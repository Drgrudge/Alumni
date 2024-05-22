// redux/store/eventSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/events';
const IMAGE_BASE_URL = 'http://localhost:3000/uploads/images'; // Base URL for images

export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth; // Retrieve the auth token from state
      const response = await axios.get(`${BASE_URL}/all`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchEventById = createAsyncThunk(
  'events/fetchEventById',
  async (eventId, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const response = await axios.get(`${BASE_URL}/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createEvent = createAsyncThunk(
  'events/createEvent',
  async (eventData, { getState, rejectWithValue }) => {
    const { token, user } = getState().auth; // Assuming user details are stored in auth state
    if (!user || !user.id) {
      return rejectWithValue('No user ID found for organizer.');
    }

    const formData = new FormData();
    for (const key in eventData) {
      formData.append(key, eventData[key]);
    }

    // Include the organizer ID in the formData
    formData.append('organizer', user.id);

    try {
      const response = await axios.post(`${BASE_URL}/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      });
      return response.data;
    } catch (error) {
      console.error("Event creation error: ", error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : 'Unexpected error occurred');
    }
  }
);

export const updateEvent = createAsyncThunk(
  'events/updateEvent',
  async ({ eventId, eventData }, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    const formData = new FormData();
    for (const key in eventData) {
      formData.append(key, eventData[key]);
    }

    try {
      const response = await axios.put(`${BASE_URL}/update/${eventId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteEvent = createAsyncThunk(
  'events/deleteEvent',
  async (eventId, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    try {
      await axios.delete(`${BASE_URL}/delete/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return eventId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  events: [],
  event: null,
  status: 'idle',
  error: null,
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchEventById.fulfilled, (state, action) => {
        state.event = action.payload;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.events = state.events.filter(event => event._id !== action.payload);
      })
      // Handle other actions...
  },
});

export const selectAllEvents = (state) => state.events.events.map(event => ({
  ...event,
  imageUrl: event.image ? `${IMAGE_BASE_URL}${event.image.replace('/uploads/images', '')}` : 'https://miro.medium.com/v2/resize:fit:900/1*cRSs6Icwnk2qQ9yLzEi8jg.png',
}));

export const selectEventById = (state, eventId) => {
  const event = state.events.events.find(event => event._id === eventId);
  if (event) {
    return {
      ...event,
      imageUrl: event.image ? `${IMAGE_BASE_URL}${event.image.replace('/uploads/images', '')}` : 'https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png',
    };
  }
  return null;
};

export default eventSlice.reducer;
