import dayjs from 'dayjs';

export const checkExpiryWorkflow = (items) => {
  const notifications = [];

  items.forEach(item => {
    const daysUntilExpiry = dayjs(item.expiryDate).diff(dayjs(), 'day');
    
    if (daysUntilExpiry <= 3 && daysUntilExpiry >= 0) {
      notifications.push({
        id: item.id,
        message: `${item.name} is expiring in ${daysUntilExpiry} days!`,
        severity: daysUntilExpiry <= 1 ? 'high' : 'medium'
      });
    }
  });

  return notifications;
};

export const showNotification = (message) => {
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('Expiry Tracker', {
          body: message,
          icon: '/favicon.ico'
        });
      }
    });
  }
};