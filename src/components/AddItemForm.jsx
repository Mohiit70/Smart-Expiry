import React, { useState, useRef } from 'react';
import { FaPlus, FaImage } from 'react-icons/fa';
import { addItemToStorage } from '../utils/ localStorage';

const AddItemForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [itemImage, setItemImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setItemImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName || !expiryDate) return;

    const newItem = {
      id: Date.now(),
      name: itemName,
      expiryDate,
      image: itemImage,
      createdAt: new Date().toISOString()
    };

    const storedItem = addItemToStorage(newItem);
    onAddItem(storedItem);

    // Reset form
    setItemName('');
    setExpiryDate('');
    setItemImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <div className="image-upload">
        {itemImage ? (
          <img 
            src={itemImage} 
            alt="Item" 
            className="uploaded-image" 
          />
        ) : (
          <div 
            className="image-placeholder"
            onClick={() => fileInputRef.current.click()}
          >
            <FaImage />
            <span>Upload Image</span>
          </div>
        )}
        <input 
          type="file" 
          ref={fileInputRef}
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
      </div>

      <div className="form-inputs">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
          required
        />
        <input
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />
        <button type="submit">
          <FaPlus /> Add Item
        </button>
      </div>
    </form>
  );
};

export default AddItemForm;