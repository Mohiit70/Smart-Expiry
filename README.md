<div align="center">

<img src="./public/Logo.png" width="300" height="300">

# Smart Expiry

</div>

A modern web application designed to help users track expiration dates of items and receive timely notifications. Built for the Kestra Hackathon, the app integrates with Kestra for automated expiry checks and notifications, offering a seamless experience for managing perishable items.

## Features

- 📅 **Track item expiration dates**: Easily input and monitor the expiration dates of your items.
- 🖼️ **Upload and manage item images**: Add pictures of items to quickly identify them.
- 🔔 **Real-time notifications for expiring items**: Receive instant alerts when an item is nearing its expiration date.
- 🤖 **Automated expiry checks using Kestra workflows**: Let the system automatically handle expiry checks and notifications.
- 📱 **Responsive design**: Fully optimized for desktop, tablet, and mobile devices, providing a smooth user experience on all screen sizes.
- 💾 **Local storage for data persistence**: Your data remains intact even after closing the browser.
- 📨 **Slack notifications**: Get notified on Slack when items are about to expire.

## Tech Stack

- **Frontend**: React, Vite
- **Styling**: SASS
- **Automation**: Kestra for workflow automation
- **Data Storage**: Local Storage for persistence
- **Deployment**: Docker for Kestra deployment
- **Notifications**: Slack webhook integration

## Screenshots

Here are some snapshots of the app in action:

![Smart Expiry Screenshot 1](./public/Screenshot%202024-12-01%20232611.png)  
*Track the expiration dates of your items with ease.*

![Smart Expiry Screenshot 2](./public/Screenshot%202024-12-01%20232627.png)  
*Easily upload and manage item images for a personalized experience.*

![Smart Expiry Screenshot 3](./public/Screenshot%202024-12-01%20232640.png)  
*Get notified when your items are about to expire.*

![Smart Expiry Screenshot 4](./public/Screenshot%202024-12-01%20232739.png)  
*Responsive design ensures smooth navigation across all devices.*

![Smart Expiry Screenshot 5](./public/Screenshot%202024-12-01%20232814.png)  
*The app works perfectly on mobile devices as well.*

## Demo Video

Watch a demo of the app in action on YouTube:  
[![Smart Expiry Demo](https://img.youtube.com/vi/kFwUqLk6Gy4/0.jpg)](https://youtu.be/kFwUqLk6Gy4)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 16+**: Required to run the frontend.
- **Docker** and **Docker Compose**: Needed to run Kestra workflows locally.
- **Slack webhook URL**: For sending notifications to your Slack workspace.

### Installation

# Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/smart-expiry.git
    cd smart-expiry
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set up Docker for Kestra**:
    ```bash
    docker-compose up -d
    ```

4. **Configure Slack Webhook**:
    - Set up a Slack webhook by following the Slack Incoming Webhooks documentation.
    - Add your webhook URL to the `config.json` file in the project.

5. **Run the App**:
    ```bash
    npm run dev
    ```

# Usage
- After running the app, you can start adding items, their expiration dates, and upload images.
- You'll receive notifications about expiring items directly on Slack.
- The app will automatically check for expiring items using Kestra workflows.

# Contributing
Feel free to fork this project and submit pull requests. We welcome contributions from the community.
