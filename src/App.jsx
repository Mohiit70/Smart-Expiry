import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import NotificationBell from './components/NotificationBell';
import LandingPage from './components/LandingPage';
import './styles/main.scss';

function App() {
  const [items, setItems] = useState([]);
  const [notifications, setNotifications] = useState([]);

  return (
    <Router>
      <div className="app-container">
        <nav className="main-nav">
          <div className="logo">
            <Link to="/">
              <img src="/logo.svg" alt="Expiry Tracker Logo" />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/tracker">My Tracker</Link>
            <NotificationBell notifications={notifications} />
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/tracker" 
            element={
              <>
                <AddItemForm 
                  onAddItem={(newItem) => {
                    setItems(prev => [...prev, newItem]);
                  }} 
                />
                <ItemList 
                  items={items}
                  onDeleteItem={(id) => {
                    setItems(prev => prev.filter(item => item.id !== id));
                  }}
                />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;