export const addItemToStorage = (item) => {
    const items = JSON.parse(localStorage.getItem('expiryItems') || '[]');
    const newItem = {
      ...item,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    items.push(newItem);
    localStorage.setItem('expiryItems', JSON.stringify(items));
    return newItem;
  };
  
  export const getItemsFromStorage = () => {
    return JSON.parse(localStorage.getItem('expiryItems') || '[]');
  };
  
  export const removeItemFromStorage = (id) => {
    const items = JSON.parse(localStorage.getItem('expiryItems') || '[]');
    const updatedItems = items.filter(item => item.id !== id);
    localStorage.setItem('expiryItems', JSON.stringify(updatedItems));
  };
  
  