import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Profile from './components/Profile';
import Upload from './components/Upload';
// import './App.css';

function App() {
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000); // Clear notification after 3 seconds
  };

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route
            path='/login'
            element={<Login showNotification={showNotification} />}
          />
          <Route
            path='/register'
            element={<Register showNotification={showNotification} />}
          />
          {/* <Route
            path='/dashboard'
            element={<Dashboard showNotification={showNotification} />}
          /> */}
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Profile showNotification={showNotification} />
              </ProtectedRoute>
            }
          />
          <Route
            path='/upload'
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />
        </Routes>
        {notification && <div className='notification'>{notification}</div>}
      </div>
    </Router>
  );
}

export default App;
