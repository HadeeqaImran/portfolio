# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Fully optimized for deployment on Vercel.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎨 Styled with Tailwind CSS
- 🎯 Smooth scrolling navigation
- 🎭 **Animated network graph background** - moving nodes that flee from your cursor with connected graph edges!
- 💫 **Smooth scroll-triggered animations with Framer Motion**
- ✨ **Beautiful hover effects and transitions**
- 🎬 **Staggered animations for engaging user experience**
- 📧 Contact form
- 🔗 Social media links

## Sections

- **Hero** - Eye-catching introduction with call-to-action buttons
- **About** - Personal introduction and what you do
- **Projects** - Showcase of your work with images and links
- **Skills** - Display of your technical skills organized by category
- **Contact** - Contact form and information
- **Footer** - Social links and copyright

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion (for animations)
- Lucide React (for icons)
- Canvas API (for particle effects)

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd maybe-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update your name
   - Change the title/role
   - Update social media links

2. **About Section** (`src/components/About.jsx`):
   - Write your own bio
   - Customize the feature cards

3. **Projects Section** (`src/components/Projects.jsx`):
   - Replace demo projects with your actual projects
   - Update images, descriptions, and links
   - Add/remove project cards as needed

4. **Skills Section** (`src/components/Skills.jsx`):
   - Update with your actual skills
   - Reorganize categories as needed

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Configure form submission (connect to backend or service like Formspree)

6. **Colors**:
   - Edit `tailwind.config.js` to change the color scheme
   - Update particle colors in `src/components/ParticlesBackground.jsx` (search for `rgba(14, 165, 233,` to match your theme)

7. **Animations**:
   - Adjust animation speeds in component files
   - Modify particle density by changing the divisor in `ParticlesBackground.jsx` (line ~69)
   - Disable animations by removing Framer Motion props if needed

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deployment on Vercel

### Method 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Method 2: Deploy via Vercel Dashboard

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com)

3. Click "New Project"

4. Import your GitHub repository

5. Vercel will auto-detect the Vite configuration

6. Click "Deploy"

Your site will be live in minutes!

## Environment Variables

If you need environment variables (e.g., for API keys):

1. Create a `.env` file in the root directory
2. Add your variables with `VITE_` prefix:
```
VITE_API_KEY=your_key_here
```
3. Access them in your code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY
```

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## License

MIT License - feel free to use this template for your own portfolio!

## Support

If you have any questions or run into issues, feel free to open an issue in the repository.

---

Made with ❤️ using React and Vite

