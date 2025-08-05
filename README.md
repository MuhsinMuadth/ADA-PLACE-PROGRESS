# ADA PLACE & PROGRESS

A modern React TypeScript dashboard application for tracking academic placement and progress analytics.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

ADA PLACE & PROGRESS is a comprehensive dashboard application built with React and TypeScript that provides insights into academic placement statistics and student progress tracking. The application features a modern, responsive interface with multiple analytical views.

## ✨ Features

- **Dashboard Overview**: Main landing page with key metrics and navigation
- **Analytics**: Comprehensive analytics dashboard with charts and statistics
- **Placements**: Detailed placement tracking and company information
- **Progress**: Student progress monitoring and performance metrics
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **TypeScript**: Full type safety and enhanced development experience

## 🔧 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14.x or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (comes with Node.js) or **yarn**
  - Verify npm: `npm --version`
  - Or install yarn: `npm install -g yarn`
- **Git** (for cloning the repository)
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

## 📥 Installation

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/MuhsinMuadth/ADA-PLACE-PROGRESS.git

# Navigate to the project directory
cd ADA-PLACE-PROGRESS
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# OR using yarn
yarn install
```

This will install all the required dependencies including:
- React 18
- TypeScript
- React Scripts (Create React App)
- And all other project dependencies

## 🚀 Running the Application

### Development Mode

To start the development server:

```bash
# Using npm
npm start

# OR using yarn
yarn start
```

This will:
- Start the development server on `http://localhost:3000`
- Open your default browser automatically
- Enable hot reloading (changes will be reflected immediately)
- Show any compilation errors in the terminal and browser

### ⚠️ Important: Server Management

**The development server runs continuously in the background!**

The server does **NOT** automatically stop when you:
- Close the browser tab
- Close the browser window
- Switch to other applications

### How to Stop the Development Server

**Method 1: Using the Terminal (Recommended)**
In the terminal where you ran `npm start`, press:
```bash
Ctrl + C   # (Windows/Linux)
Cmd + C    # (macOS)
```

**Method 2: Kill the Process**
If you lost the terminal or it's not responding:
```bash
# Find and kill the process on port 3000
lsof -ti:3000 | xargs kill -9

# On Windows (Command Prompt)
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

**Method 3: Kill All Node Processes (Use Carefully)**
```bash
# macOS/Linux - kills ALL Node.js processes
pkill -f node

# Windows
taskkill /im node.exe /f
```

### Checking if Server is Running

```bash
# Check what's running on port 3000
lsof -i:3000        # macOS/Linux
netstat -ano | findstr :3000   # Windows
```

### Production Build

To create a production-ready build:

```bash
# Using npm
npm run build

# OR using yarn
yarn build
```

This creates an optimized build in the `build` folder ready for deployment.

### Testing

To run the test suite:

```bash
# Using npm
npm test

# OR using yarn
yarn test
```

## 📁 Project Structure

```
ADA-PLACE-PROGRESS/
├── public/                 # Public assets
│   ├── index.html         # Main HTML template
│   └── ...                # Other static assets
├── src/                   # Source code
│   ├── components/        # Reusable React components
│   │   ├── Header.tsx     # Main navigation header
│   │   ├── Modal.tsx      # Modal dialog component
│   │   └── ProfilePanel.tsx # User profile sidebar
│   ├── pages/            # Page components
│   │   ├── Dashboard.tsx  # Main dashboard page
│   │   ├── Analytics.tsx  # Analytics dashboard
│   │   ├── Placements.tsx # Placement tracking
│   │   └── Progress.tsx   # Progress monitoring
│   ├── hooks/            # Custom React hooks
│   ├── App.tsx           # Main App component
│   ├── index.tsx         # Application entry point
│   └── styles.css        # Global styles
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## 📜 Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🚀 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/ADA-PLACE-PROGRESS",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 🔧 Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Or start on different port
PORT=3001 npm start
```

**Node modules issues:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/MuhsinMuadth/ADA-PLACE-PROGRESS/issues) section
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the steps to reproduce

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy coding! 🚀**

For more information about React, visit the [React documentation](https://reactjs.org/).