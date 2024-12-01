import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import NotificationBell from './components/NotificationBell';
import LandingPage from './components/LandingPage';
import { getItemsFromStorage, removeItemFromStorage } from '../src/utils/ localStorage';
import { checkExpiryWorkflow, showNotification } from './utils/notifications';
import { triggerKestraWorkflow } from './utils/kestraIntegration';
import './styles/main.scss';

function App() {
  const [items, setItems] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const storedItems = getItemsFromStorage();
    setItems(storedItems);
  }, []);

  useEffect(() => {
    const newNotifications = checkExpiryWorkflow(items);
    setNotifications(newNotifications);

    // Show browser notifications for new notifications
    newNotifications.forEach(notification => {
      showNotification(notification.message);
    });

    // Trigger Kestra workflow
    triggerKestraWorkflow(items);
  }, [items]);

  const handleAddItem = (newItem) => {
    setItems(prev => [...prev, newItem]);
  };

  const handleDeleteItem = (id) => {
    removeItemFromStorage(id);
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="main-nav">
          <div className="logo">
            <Link to="/">
              <img src="public/Logo.png" alt="Expiry Tracker Logo" />
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
                <h1>My Expiry Tracker</h1>
                <AddItemForm onAddItem={handleAddItem} />
                <ItemList items={items} onDeleteItem={handleDeleteItem} />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

