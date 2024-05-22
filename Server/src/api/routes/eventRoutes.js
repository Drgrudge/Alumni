// routes/eventRoutes.js
import express from 'express';
import eventController from '../controllers/eventController.js';
import authenticate from '../../middleware/authenticate.js';
import upload from '../../middleware/upload.js';

const router = express.Router();

router.post('/create', authenticate, upload, eventController.createEvent);
router.get('/all', eventController.getAllEvents);
router.get('/:eventId', eventController.getEventById);
router.put('/update/:eventId', authenticate, upload, eventController.updateEvent);
router.delete('/delete/:eventId', authenticate, eventController.deleteEvent);

export default router;
