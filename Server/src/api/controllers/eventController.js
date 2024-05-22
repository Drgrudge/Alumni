// controllers/eventController.js
import Event from '../models/Event.js';
import User from '../models/User.js';
import NotificationController from './NotificationController.js';

const eventController = {
    createEvent: async (req, res) => {
        try {
            const { title, description, location, startDate, endDate, organizer, imageUrl } = req.body;

            let image = imageUrl;
            if (req.file) {
                image = `/uploads/images/${req.file.filename}`;
            }

            console.log('Image path:', image);

            const newEvent = new Event({ title, description, location, startDate, endDate, organizer, image });
            await newEvent.save();

            const users = await User.find({});
            users.forEach(user => {
                NotificationController.createNotification(
                    user._id,
                    'New Event',
                    `New event created: ${title}`,
                    `/events/${newEvent._id}`
                );
            });

            res.status(201).json(newEvent);
        } catch (error) {
            console.error('Error creating event:', error);
            res.status(400).json({ message: error.message });
        }
    },

    getAllEvents: async (req, res) => {
        try {
            const events = await Event.find().populate('organizer', 'name');
            res.status(200).json(events);
        } catch (error) {
            console.error('Error fetching events:', error);
            res.status(500).json({ message: error.message });
        }
    },

    getEventById: async (req, res) => {
        try {
            const event = await Event.findById(req.params.eventId).populate('organizer', 'name');
            if (!event) {
                return res.status(404).json({ message: 'Event not found' });
            }
            res.status(200).json(event);
        } catch (error) {
            console.error('Error fetching event by ID:', error);
            res.status(500).json({ message: error.message });
        }
    },

    updateEvent: async (req, res) => {
        try {
            const { imageUrl } = req.body;
            const updatedEventData = { ...req.body };

            if (req.file) {
                updatedEventData.image = `/uploads/images/${req.file.filename}`;
            } else if (imageUrl) {
                updatedEventData.image = imageUrl;
            }

            console.log('Updated image path:', updatedEventData.image);

            const updatedEvent = await Event.findByIdAndUpdate(req.params.eventId, updatedEventData, { new: true });
            if (!updatedEvent) {
                return res.status(404).json({ message: 'Event not found' });
            }

            const users = await User.find({});
            users.forEach(user => {
                NotificationController.createNotification(
                    user._id,
                    'Event Update',
                    `Event updated: ${updatedEvent.title}`,
                    `/events/${updatedEvent._id}`
                );
            });

            res.status(200).json(updatedEvent);
        } catch (error) {
            console.error('Error updating event:', error);
            res.status(400).json({ message: error.message });
        }
    },

    deleteEvent: async (req, res) => {
        try {
            const event = await Event.findById(req.params.eventId);
            if (!event) {
                return res.status(404).json({ message: 'Event not found' });
            }
            const title = event.title;

            await Event.findByIdAndDelete(req.params.eventId);

            const users = await User.find({});
            users.forEach(user => {
                NotificationController.createNotification(
                    user._id,
                    'Event Cancellation',
                    `Event canceled: ${title}`,
                    `/events`
                );
            });

            res.status(200).json({ message: 'Event deleted successfully' });
        } catch (error) {
            console.error('Error deleting event:', error);
            res.status(500).json({ message: error.message });
        }
    },
};

export default eventController;
