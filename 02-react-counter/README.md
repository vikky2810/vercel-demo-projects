# React Counter

A beautiful and interactive counter application built with React, Vite, and Tailwind CSS. This project demonstrates modern React development with component-based architecture and utility-first CSS.

## Features

- ⚛️ Built with React 18 and modern hooks
- 🎨 Styled with Tailwind CSS for rapid UI development
- 🚀 Powered by Vite for lightning-fast development
- 📱 Fully responsive design
- 🎯 Interactive animations and transitions
- 🎉 Fun stats and encouraging messages
- 🔄 Real-time state management

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Quick Start

```bash
# Clone and navigate to the project
cd 02-react-counter

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Setup Instructions

### 1. Install Dependencies

Navigate to the project directory and install the required packages:

```bash
cd 02-react-counter
npm install
```

### 2. Run Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### 3. Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### 4. Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Vercel Deployment

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Navigate** to the project directory:
   ```bash
   cd 02-react-counter
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project? `N`
   - Project name: `react-counter` (or your preferred name)
   - Directory: `./` (current directory)
   - Override settings? `N`

### Method 2: GitHub Integration

1. **Push** this folder to a GitHub repository
2. **Go to** [vercel.com](https://vercel.com)
3. **Sign in** with your GitHub account
4. **Click** "New Project"
5. **Import** your repository
6. **Configure**:
   - Framework Preset: `Vite`
   - Root Directory: `02-react-counter`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
7. **Click** "Deploy"

### Method 3: Drag & Drop

1. **Build** the project first:
   ```bash
   npm run build
   ```
2. **Go to** [vercel.com](https://vercel.com)
3. **Sign in** to your account
4. **Drag and drop** the `dist` folder onto the deployment area
5. **Wait** for deployment to complete

## Project Structure

```
02-react-counter/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Counter.jsx      # Main counter component
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles with Tailwind
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # This file
```

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## Key Features Explained

### State Management
- Uses React's `useState` hook for local state management
- Counter value is stored in component state

### Styling
- Tailwind CSS for rapid UI development
- Responsive design with mobile-first approach
- Custom animations and transitions

### User Experience
- Visual feedback with color changes based on counter value
- Smooth animations and hover effects
- Encouraging messages and fun statistics

## Customization

Feel free to customize:

### Colors
Modify the Tailwind classes in `Counter.jsx`:
```jsx
// Change button colors
className="bg-blue-500 hover:bg-blue-600"
```

### Animations
Add custom animations in `tailwind.config.js`:
```js
theme: {
  extend: {
    animation: {
      'custom-bounce': 'bounce 1s infinite',
    }
  }
}
```

### Functionality
Add new features like:
- Step size configuration
- Counter history
- Keyboard shortcuts
- Sound effects

## Troubleshooting

### Common Issues

**Port already in use**: Vite will automatically use the next available port.

**Build errors**: Make sure all dependencies are installed with `npm install`.

**Styling issues**: Ensure Tailwind CSS is properly configured in `tailwind.config.js`.

### Development Tips

- Use React Developer Tools browser extension for debugging
- Check the browser console for any errors
- Use `npm run lint` to check for code issues

## Next Steps

After deploying to Vercel, you can:
- Share your live URL
- Add custom domain
- Monitor performance with Vercel Analytics
- Set up automatic deployments from Git

## Learning Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

Happy coding! 🚀
