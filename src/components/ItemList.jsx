import React from 'react';
import { FaTrash } from 'react-icons/fa';
import dayjs from 'dayjs';

const ItemList = ({ items, onDeleteItem }) => {
  const getExpiryStatus = (expiryDate) => {
    const daysLeft = dayjs(expiryDate).diff(dayjs(), 'day');
    if (daysLeft < 0) return 'expired';
    if (daysLeft <= 3) return 'near-expiry';
    return 'safe';
  };

  return (
    <div className="item-list">
      {items.map(item => (
        <div 
          key={item.id} 
          className={`item ${getExpiryStatus(item.expiryDate)}`}
        >
          {item.image && (
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
          )}
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>
              Expires: {dayjs(item.expiryDate).format('DD MMM YYYY')}
              <span className="days-left">
                ({dayjs(item.expiryDate).diff(dayjs(), 'day')} days left)
              </span>
            </p>
          </div>
          <button 
            onClick={() => onDeleteItem(item.id)} 
            className="delete-btn"
          >
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;