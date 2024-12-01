import React from 'react';
import { FaBell, FaExclamationCircle } from 'react-icons/fa';

const NotificationBell = ({ notifications }) => {
  return (
    <div className="notification-bell">
      <div className="bell-icon">
        <FaBell />
        {notifications.length > 0 && (
          <span className="notification-count">
            {notifications.length}
          </span>
        )}
      </div>
      {notifications.length > 0 && (
        <div className="notification-dropdown">
          {notifications.map(notification => (
            <div 
              key={notification.id} 
              className={`notification ${notification.severity}`}
            >
              <FaExclamationCircle />
              <span>{notification.message}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;