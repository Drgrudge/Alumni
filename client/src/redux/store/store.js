import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import forumReducer from './forumSlice';
import jobReducer from './jobSlice';
import eventReducer from './eventSlice';
import userReducer from './userSlice';
import chattingReducer from './chattingSlice';
import donationReducer from './donationSlice'; // Import the donation slice
import donationAnalyticsReducer from './donationAnalyticsSlice'; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    forum: forumReducer,
    jobs: jobReducer,
    events: eventReducer,
    user: userReducer,
    chatting: chattingReducer,
    donations: donationReducer, // Add the donation slice here
    donationAnalytics: donationAnalyticsReducer,
  },
});
