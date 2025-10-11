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
      bgGradientStart: '15, 23, 42',     // slate-950
      bgGradientMid: '30, 41, 59',       // slate-800
      bgGradientEnd: '51, 65, 85',       // slate-700
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
      bgGradientStart: '15, 23, 42',     // slate-950
      bgGradientMid: '30, 41, 59',       // slate-800
      bgGradientEnd: '51, 65, 85',       // slate-700
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
      bgGradientStart: '15, 23, 42',     // slate-950
      bgGradientMid: '30, 41, 59',       // slate-800
      bgGradientEnd: '51, 65, 85',       // slate-700
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
      bgGradientStart: '15, 23, 42',     // slate-950
      bgGradientMid: '30, 41, 59',       // slate-800
      bgGradientEnd: '51, 65, 85',       // slate-700
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
      bgGradientStart: '15, 23, 42',     // slate-950
      bgGradientMid: '30, 41, 59',       // slate-800
      bgGradientEnd: '51, 65, 85',       // slate-700
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
      bgGradientStart: '15, 23, 42',     // slate-950
      bgGradientMid: '30, 41, 59',       // slate-800
      bgGradientEnd: '51, 65, 85',       // slate-700
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

