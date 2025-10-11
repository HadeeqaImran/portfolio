import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

// Color palettes with light and dark variants
export const colorPalettes = {
  blue: {
    name: 'Blue',
    light: {
      primary: '#0284c7',
      primaryHover: '#0369a1',
      accent: '#38bdf8',
      gradient: 'from-sky-600 to-sky-400',
      particleRgb: '14, 165, 233',
      bgGradientStart: '240, 249, 255',  // sky-50
      bgGradientMid: '224, 242, 254',    // sky-100
      bgGradientEnd: '186, 230, 253',    // sky-200
    },
    dark: {
      primary: '#3b82f6',
      primaryHover: '#60a5fa',
      accent: '#38bdf8',
      gradient: 'from-blue-400 to-cyan-400',
      particleRgb: '100, 181, 246',
      bgGradientStart: '3, 19, 28',      // very dark blue
      bgGradientMid: '5, 27, 40',        // very dark blue-mid
      bgGradientEnd: '7, 35, 52',        // very dark blue-end
      bgDark: '8, 20, 35',               // very dark blue for components
      bgDarkAlt: '10, 25, 42',           // slightly lighter dark blue
      cardBg: '15, 35, 55',              // dark blue for cards
    }
  },
  green: {
    name: 'Green',
    light: {
      primary: '#059669',
      primaryHover: '#047857',
      accent: '#10b981',
      gradient: 'from-emerald-600 to-emerald-400',
      particleRgb: '16, 185, 129',
      bgGradientStart: '236, 253, 245',  // emerald-50
      bgGradientMid: '209, 250, 229',    // emerald-100
      bgGradientEnd: '167, 243, 208',    // emerald-200
    },
    dark: {
      primary: '#34d399',
      primaryHover: '#6ee7b7',
      accent: '#10b981',
      gradient: 'from-emerald-400 to-green-400',
      particleRgb: '52, 211, 153',
      bgGradientStart: '2, 20, 15',      // very dark emerald
      bgGradientMid: '3, 28, 21',        // very dark emerald-mid
      bgGradientEnd: '4, 36, 27',        // very dark emerald-end
      bgDark: '5, 22, 18',               // very dark emerald for components
      bgDarkAlt: '6, 28, 22',            // slightly lighter dark emerald
      cardBg: '8, 40, 30',               // dark emerald for cards
    }
  },
  purple: {
    name: 'Purple',
    light: {
      primary: '#7c3aed',
      primaryHover: '#6d28d9',
      accent: '#a78bfa',
      gradient: 'from-violet-600 to-purple-400',
      particleRgb: '124, 58, 237',
      bgGradientStart: '245, 243, 255',  // violet-50
      bgGradientMid: '237, 233, 254',    // violet-100
      bgGradientEnd: '221, 214, 254',    // violet-200
    },
    dark: {
      primary: '#a78bfa',
      primaryHover: '#c4b5fd',
      accent: '#8b5cf6',
      gradient: 'from-violet-400 to-purple-400',
      particleRgb: '167, 139, 250',
      bgGradientStart: '12, 5, 25',      // very dark violet
      bgGradientMid: '18, 8, 35',        // very dark violet-mid
      bgGradientEnd: '24, 10, 45',       // very dark violet-end
      bgDark: '15, 8, 30',               // very dark violet for components
      bgDarkAlt: '20, 10, 38',           // slightly lighter dark violet
      cardBg: '28, 15, 55',              // dark violet for cards
    }
  },
  pink: {
    name: 'Pink',
    light: {
      primary: '#db2777',
      primaryHover: '#be185d',
      accent: '#f472b6',
      gradient: 'from-pink-600 to-rose-400',
      particleRgb: '219, 39, 119',
      bgGradientStart: '253, 242, 248',  // pink-50
      bgGradientMid: '252, 231, 243',    // pink-100
      bgGradientEnd: '251, 207, 232',    // pink-200
    },
    dark: {
      primary: '#f472b6',
      primaryHover: '#f9a8d4',
      accent: '#ec4899',
      gradient: 'from-pink-400 to-rose-400',
      particleRgb: '244, 114, 182',
      bgGradientStart: '22, 7, 28',      // very dark pink/fuchsia
      bgGradientMid: '30, 10, 38',       // very dark pink-mid
      bgGradientEnd: '38, 12, 48',       // very dark pink-end
      bgDark: '25, 8, 32',               // very dark pink for components
      bgDarkAlt: '32, 10, 40',           // slightly lighter dark pink
      cardBg: '45, 15, 55',              // dark pink for cards
    }
  },
  yellow: {
    name: 'Yellow',
    light: {
      primary: '#d97706',
      primaryHover: '#b45309',
      accent: '#f59e0b',
      gradient: 'from-amber-600 to-yellow-400',
      particleRgb: '245, 158, 11',
      bgGradientStart: '255, 251, 235',  // amber-50
      bgGradientMid: '254, 243, 199',    // amber-100
      bgGradientEnd: '253, 230, 138',    // amber-200
    },
    dark: {
      primary: '#fbbf24',
      primaryHover: '#fcd34d',
      accent: '#f59e0b',
      gradient: 'from-amber-400 to-yellow-400',
      particleRgb: '251, 191, 36',
      bgGradientStart: '20, 15, 2',      // very dark amber
      bgGradientMid: '28, 20, 3',        // very dark amber-mid
      bgGradientEnd: '35, 25, 4',        // very dark amber-end
      bgDark: '22, 16, 3',               // very dark amber for components
      bgDarkAlt: '30, 22, 5',            // slightly lighter dark amber
      cardBg: '42, 30, 8',               // dark amber for cards
    }
  },
  brown: {
    name: 'Brown',
    light: {
      primary: '#92400e',
      primaryHover: '#78350f',
      accent: '#b45309',
      gradient: 'from-amber-800 to-orange-600',
      particleRgb: '180, 83, 9',
      bgGradientStart: '255, 247, 237',  // orange-50
      bgGradientMid: '255, 237, 213',    // orange-100
      bgGradientEnd: '254, 215, 170',    // orange-200
    },
    dark: {
      primary: '#d97706',
      primaryHover: '#f59e0b',
      accent: '#fb923c',
      gradient: 'from-amber-600 to-orange-400',
      particleRgb: '217, 119, 6',
      bgGradientStart: '18, 8, 3',       // very dark orange/brown
      bgGradientMid: '25, 12, 5',        // very dark orange-mid
      bgGradientEnd: '32, 15, 6',        // very dark orange-end
      bgDark: '20, 10, 4',               // very dark brown for components
      bgDarkAlt: '28, 14, 6',            // slightly lighter dark brown
      cardBg: '40, 20, 10',              // dark brown for cards
    }
  }
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme
    
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  const [palette, setPalette] = useState(() => {
    const savedPalette = localStorage.getItem('colorPalette')
    return savedPalette || 'blue'
  })

  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove both classes first
    root.classList.remove('light', 'dark')
    // Add the current theme
    root.classList.add(theme)
    
    // Save to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    // Apply color palette CSS variables
    const root = window.document.documentElement
    const colors = colorPalettes[palette][theme]
    
    root.style.setProperty('--color-primary', colors.primary)
    root.style.setProperty('--color-primary-hover', colors.primaryHover)
    root.style.setProperty('--color-accent', colors.accent)
    root.style.setProperty('--particle-rgb', colors.particleRgb)
    root.style.setProperty('--bg-gradient-start', colors.bgGradientStart)
    root.style.setProperty('--bg-gradient-mid', colors.bgGradientMid)
    root.style.setProperty('--bg-gradient-end', colors.bgGradientEnd)
    
    // Dark mode component backgrounds (only set if in dark mode)
    if (theme === 'dark' && colors.bgDark) {
      root.style.setProperty('--bg-dark', colors.bgDark)
      root.style.setProperty('--bg-dark-alt', colors.bgDarkAlt)
      root.style.setProperty('--card-bg', colors.cardBg)
    }
    
    // Save to localStorage
    localStorage.setItem('colorPalette', palette)
  }, [palette, theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const changePalette = (newPalette) => {
    setPalette(newPalette)
  }

  const getCurrentColors = () => colorPalettes[palette][theme]

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      palette, 
      changePalette, 
      getCurrentColors,
      availablePalettes: Object.keys(colorPalettes)
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

