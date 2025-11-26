# 🌿 Bloom Beauty

A personalized beauty routine recommendation app built with React.

![Bloom Beauty](https://img.shields.io/badge/React-18.2-blue) ![Vite](https://img.shields.io/badge/Vite-5.0-purple)

## Features

- ✨ Interactive skincare & haircare quizzes
- 💄 Personalized product recommendations
- 🛒 Full shopping cart functionality
- 💳 Complete checkout flow with payment
- 📱 Mobile-first responsive design
- 🎨 Beautiful organic green aesthetic

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### 4. Preview Production Build

```bash
npm run preview
```

---

## Deployment

### Deploy to Vercel (Recommended)

**Option A: Via GitHub**
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" - Vercel auto-detects Vite settings
6. Your site is live! 🎉

**Option B: Via CLI**
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

**Option A: Drag & Drop**
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the deploy zone
4. Your site is live! 🎉

**Option B: Via CLI**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

**Option C: Via GitHub**
1. Push to GitHub
2. Connect repository in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Run:
```bash
npm run deploy
```

---

## Project Structure

```
bloom-beauty/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # React entry point
│   └── index.css      # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **CSS-in-JS** - Inline styles for components

## Customization

### Colors
Edit the color values in the `styles` object in `App.jsx`:
- Primary green: `#2d5a3d`
- Light green: `#90c67c`
- Gold accent: `#d4a853`
- Background: `#f0f7e9`

### Products
Modify the `beautyProducts` object to add/edit products.

### Quiz Questions
Update `quizQuestions` to customize the assessment.

---

## License

MIT License - feel free to use this for your own projects!

---

Made with 💚 by Bloom Beauty
