# 🎨 Color Palette System Guide

## Overview
Your portfolio now features a dynamic color palette system with **6 unique color schemes**, each carefully designed to work seamlessly with both **light** and **dark themes**.

## Available Color Palettes

### 1. 🔵 Blue (Default)
- **Light Mode**: Sky blue tones - Professional and trustworthy
- **Dark Mode**: Bright blue - Modern and energetic
- **Best for**: Tech portfolios, corporate feel

### 2. 🟢 Green
- **Light Mode**: Emerald tones - Fresh and innovative  
- **Dark Mode**: Bright emerald - Natural and balanced
- **Best for**: Environmental, health, or growth-focused portfolios

### 3. 🟣 Purple
- **Light Mode**: Deep violet - Creative and sophisticated
- **Dark Mode**: Lavender purple - Artistic and unique
- **Best for**: Creative professionals, designers, artists

### 4. 🩷 Pink
- **Light Mode**: Rose pink - Bold and modern
- **Dark Mode**: Soft pink - Elegant and friendly
- **Best for**: Fashion, lifestyle, or personal brands

### 5. 🟡 Yellow
- **Light Mode**: Amber/gold - Warm and optimistic
- **Dark Mode**: Bright yellow - Energetic and cheerful
- **Best for**: Hospitality, education, or sunny personalities

### 6. 🟤 Brown
- **Light Mode**: Deep amber - Earthy and professional
- **Dark Mode**: Orange-brown - Warm and reliable
- **Best for**: Architecture, real estate, or traditional businesses

## How to Use

### Changing Color Palettes
1. Click the **Palette icon** (🎨) in the navigation bar
2. Select your preferred color from the dropdown menu
3. The entire site updates instantly!
4. Your selection is automatically saved to localStorage

### Theme Toggle
- Click the **Sun/Moon icon** to switch between light and dark modes
- Works perfectly with all color palettes
- Smooth animated transitions

## Technical Implementation

### CSS Variables
The system uses CSS custom properties that update dynamically:
```css
--color-primary: Main brand color
--color-primary-hover: Hover state color
--color-accent: Accent highlights
--particle-rgb: Particle system colors
```

### Component Support
All components automatically adapt to the selected palette:
- ✅ Navbar navigation links
- ✅ Hero section buttons and text
- ✅ About section icons and cards
- ✅ Projects cards and tags
- ✅ Skills badges
- ✅ Contact form and icons
- ✅ Footer links
- ✅ Particles background animation

### Persistence
- Color palette choice saved in `localStorage`
- Theme preference saved in `localStorage`
- Settings persist across browser sessions
- Respects system dark mode preference on first visit

## Color Palette Details

### Light Theme Colors
| Palette | Primary | Hover | Accent |
|---------|---------|-------|--------|
| Blue | #0284c7 | #0369a1 | #38bdf8 |
| Green | #059669 | #047857 | #10b981 |
| Purple | #7c3aed | #6d28d9 | #a78bfa |
| Pink | #db2777 | #be185d | #f472b6 |
| Yellow | #d97706 | #b45309 | #f59e0b |
| Brown | #92400e | #78350f | #b45309 |

### Dark Theme Colors
| Palette | Primary | Hover | Accent |
|---------|---------|-------|--------|
| Blue | #3b82f6 | #60a5fa | #38bdf8 |
| Green | #34d399 | #6ee7b7 | #10b981 |
| Purple | #a78bfa | #c4b5fd | #8b5cf6 |
| Pink | #f472b6 | #f9a8d4 | #ec4899 |
| Yellow | #fbbf24 | #fcd34d | #f59e0b |
| Brown | #d97706 | #f59e0b | #fb923c |

## Responsive Design
- Mobile-friendly palette selector
- Works on all screen sizes
- Touch-optimized for mobile devices
- Smooth animations across all breakpoints

## Accessibility
- High contrast ratios maintained in all palettes
- Focus states clearly visible
- Keyboard navigation supported
- ARIA labels included for assistive technologies

## Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS/Android)

## Customization Tips

### Want to add your own palette?
Edit `/src/context/ThemeContext.jsx` and add a new palette object:

```javascript
yourcolor: {
  name: 'Your Color',
  light: {
    primary: '#hexcode',
    primaryHover: '#hexcode',
    accent: '#hexcode',
    gradient: 'from-color-600 to-color-400',
    particleRgb: 'r, g, b',
  },
  dark: {
    primary: '#hexcode',
    primaryHover: '#hexcode',
    accent: '#hexcode',
    gradient: 'from-color-400 to-color-400',
    particleRgb: 'r, g, b',
  }
}
```

## Performance
- ⚡ Instant palette switching
- 🎨 No page reload required
- 💾 Minimal localStorage usage
- 🚀 Optimized CSS variables
- ✨ Smooth 300ms transitions

## Tips for Best Results
1. **Match your brand**: Choose colors that reflect your personal or company brand
2. **Consider your field**: Different industries suit different colors
3. **Test both themes**: Make sure your choice looks good in light AND dark mode
4. **Check readability**: Ensure text remains legible on all backgrounds
5. **Mobile preview**: Test on mobile devices for best results

---

**Enjoy your new dynamic color palette system!** 🎨✨

