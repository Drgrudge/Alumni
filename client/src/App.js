import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/index.css';
import RegisterPage from './components/RegistrationPage/RegistrationPage';
import Navbar from './components/common/Navbar/Navbar';
import { SidebarWithContentSeparator } from './components/common/LeftNavbar/LeftNavbar';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/common/Footer/Footer';
import LoginPage from './components/LoginPage/LoginPage';
import DashboardPage from './components/DashboardPage/DashboardPage';
import ForumPage from './components/ForumPage/ForumPage';
import LogoutPage from './components/LogOutPage/LogOutPage';
import Signup from './components/Signup/Signup';
import UploadStudentsPage from './components/UploadStudentsPage/UploadStudentsPage';
//import ChatPage from './components/ChatPage/ChatPage';
import DonationPage from './components/DonationPage/DonationPage';
// import MakeDonationPage from './components/DonationPage/MakeDonationPage';
// Import the job components
// Correct the paths according to the actual component definitions
import JobListPage from './components/JobPostingPage/JobListPage';
import CreateJobPage from './components/JobPostingPage/CreateJobPage'; // Create job page
import JobDetailsPage from './components/JobPostingPage/JobDetailsPage'; // Job details page
import EditJobPage from './components/JobPostingPage/EditJobPage';
//import UploadCSV from './components/UploadCSV/UploadCSV';
import Contact from './components/ContactUs/ContactUs';
// Import the event components
import EventListPage from './components/EventPage/EventListPage';
import CreateEventPage from './components/EventPage/CreateEventPage';
import EditEventPage from './components/EventPage/EditEventPage';
import EventDetailsPage from './components/EventPage/EventDetailsPage';

import EditProfilePage from './components/ProfilePage/EditProfilePage';
import UpdatePrivacySettingsPage from './components/ProfilePage/UpdatePrivacyPage';
import UserProfilePage from './components/ProfilePage/UserProfilePage';


import UserDirectoryPage from './components/UserDirectoryPage/UserDirectoryPage';
import UserDirectoryProfilePage from './components/UserDirectoryPage/UserProfilePage';

import ChatPage from './components/ChatPage/ChatPage'; // Adjust path based on your structure
import MakeDonationPage from './components/DonationPage/MakeDonationPage';
import DonationAnalyticsComponent from './components/DonationPage/donationAnalytics';
import DonationHistory from './components/DonationPage/DonationHistory';
import AboutUs from './components/AboutPage/AboutPage';
import ContactUs from './components/ContactUs/ContactUs';


function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <div className="App">
        <Navbar />
        {isAuthenticated && (
          <div className="flex flex-col h-full md:flex-row">
            <SidebarWithContentSeparator className="md:w-1/4" />
            <div className="flex flex-col mt-15 w-full">
              <div className="w-full h-100vh py-5  px-4">
                <Routes>
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/forum" element={<ForumPage />} />
                  <Route path="/logout" element={<LogoutPage />} />
                  {/* <Route path="/upload" element={<UploadCSV />} /> */}
                  <Route path="/donation" element={<DonationPage />} />
                  <Route path="/make-donation" element={<MakeDonationPage />} />
                  <Route path="/donation-analytics" element={<DonationAnalyticsComponent />} />
                  <Route path="/donation-history" element={<DonationHistory />} />
                  <Route path="/upload-students" element={<UploadStudentsPage />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  {/* Protected Job Routes */}
                  
                  <Route path="/jobs/create" element={<CreateJobPage />} />
                  <Route path="/jobs/edit/:jobId" element={<EditJobPage />} />
                  <Route path="/jobs" element={<JobListPage />} />
                  <Route path="/jobs/:jobId" element={<JobDetailsPage />} />

                  {/* Protected Event Routes */}
                  <Route path="/events/create" element={<CreateEventPage />} />
                  <Route path="/events/edit/:eventId" element={<EditEventPage />} />
                  <Route path="/events" element={<EventListPage />} />
                  <Route path="/events/:eventId" element={<EventDetailsPage />} />
                  {/* More protected routes as needed */}

                  <Route path="/edit-profile/:userId" element={<EditProfilePage />} />
                  <Route path="/update-privacy/:userId" element={<UpdatePrivacySettingsPage />} />
                  <Route path="/profile/:userId" element={<UserProfilePage />} />
                  <Route path="/messages" element={<ChatPage />} />

                  {/* Add User Directory route */}
                  <Route path="/user-directory" element={<UserDirectoryPage />} />
                  <Route path="/user-directory/profile/:userId" element={<UserDirectoryProfilePage />} />

                  <Route path="/messages" element={<ChatPage />} />

                  

                  {/* More protected routes as needed */}


                </Routes>
              </div>
            </div>
          </div>
        )}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Conditional rendering based on authentication state */}
          <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" />} />
          <Route path="/register" element={!isAuthenticated ? <RegisterPage /> : <Navigate to="/dashboard" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
