# Quote Generator

A simple and elegant quote generator built with vanilla HTML, CSS, and JavaScript. This project demonstrates static site development and external API integration.

## Features

- 🎯 Clean, responsive design
- 📱 Mobile-friendly interface
- 🎨 Beautiful gradient background and animations
- 🔄 Fetches random quotes from [Quotable API](https://api.quotable.io/)
- ⚡ Fast loading with smooth transitions

## Setup Instructions

### Local Development

1. **Clone or download** this project folder
2. **Open** `index.html` in your web browser
3. **That's it!** No build process or dependencies required

### Alternative: Using a Local Server

For better development experience (especially for API calls), you can serve the files locally:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Vercel Deployment

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Navigate** to the project directory:
   ```bash
   cd 01-quote-generator
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project? `N`
   - Project name: `quote-generator` (or your preferred name)
   - Directory: `./` (current directory)
   - Override settings? `N`

### Method 2: GitHub Integration

1. **Push** this folder to a GitHub repository
2. **Go to** [vercel.com](https://vercel.com)
3. **Sign in** with your GitHub account
4. **Click** "New Project"
5. **Import** your repository
6. **Configure**:
   - Framework Preset: `Other`
   - Root Directory: `01-quote-generator`
   - Build Command: Leave empty
   - Output Directory: Leave empty
7. **Click** "Deploy"

### Method 3: Drag & Drop

1. **Go to** [vercel.com](https://vercel.com)
2. **Sign in** to your account
3. **Drag and drop** the entire `01-quote-generator` folder onto the deployment area
4. **Wait** for deployment to complete

## Project Structure

```
01-quote-generator/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - API integration and DOM manipulation
- **Quotable API** - External quote data source

## API Information

This project uses the [Quotable API](https://api.quotable.io/) which provides:
- Random inspirational quotes
- Author information
- No API key required
- Free to use

## Customization

Feel free to customize:
- **Colors**: Modify the gradient in `styles.css`
- **Fonts**: Change the font-family in the CSS
- **API**: Replace with a different quote API
- **Styling**: Adjust the design to match your preferences

## Troubleshooting

**CORS Issues**: If you encounter CORS errors when opening the HTML file directly, use a local server instead.

**API Not Working**: The Quotable API is free but has rate limits. If it's down, the app will show an error message.

**Button Not Working**: Make sure JavaScript is enabled in your browser.

**Styling Issues**: Ensure all CSS files are in the same directory as the HTML file.

## Next Steps

After deploying to Vercel, you can:
- Share your live URL
- Add custom domain
- Monitor analytics
- Set up automatic deployments from Git

Happy coding! 🚀
