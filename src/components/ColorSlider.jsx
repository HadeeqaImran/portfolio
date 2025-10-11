import React, { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Palette } from 'lucide-react'

const ColorSlider = () => {
  const { palette, changePalette, colorPalettes, theme } = useTheme()
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef(null)
  
  const paletteKeys = Object.keys(colorPalettes)
  const paletteIndex = paletteKeys.indexOf(palette)
  
  // Get colors for the gradient based on current theme
  const getGradientColors = () => {
    return paletteKeys.map(key => colorPalettes[key][theme].primary)
  }
  
  const gradientColors = getGradientColors()
  
  const handleInteraction = useCallback((clientX) => {
    if (!sliderRef.current) return
    
    const rect = sliderRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(1, x / rect.width))
    const index = Math.round(percentage * (paletteKeys.length - 1))
    
    if (paletteKeys[index] !== palette) {
      changePalette(paletteKeys[index])
    }
  }, [paletteKeys, palette, changePalette])
  
  const handleMouseDown = (e) => {
    setIsDragging(true)
    handleInteraction(e.clientX)
  }
  
  const handleMouseMove = useCallback((e) => {
    handleInteraction(e.clientX)
  }, [handleInteraction])
  
  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])
  
  const handleTouchStart = (e) => {
    setIsDragging(true)
    handleInteraction(e.touches[0].clientX)
  }
  
  const handleTouchMove = useCallback((e) => {
    handleInteraction(e.touches[0].clientX)
  }, [handleInteraction])
  
  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])
  
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleTouchEnd)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])
  
  const sliderPosition = (paletteIndex / (paletteKeys.length - 1)) * 100
  
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="z-40"
    >
      <motion.div
        className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-3 sm:p-4 lg:p-5 w-[200px] sm:w-[280px] lg:w-[320px]"
        style={{
          backgroundColor: theme === 'dark' ? `rgba(var(--bg-dark), 0.95)` : undefined,
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <Palette size={16} className="sm:w-5 sm:h-5" style={{ color: 'var(--color-primary)' }} />
            </motion.div>
            <div>
              <h3 className="text-[11px] sm:text-sm font-bold text-gray-900 dark:text-white">
                Colors
              </h3>
              <p className="text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400 hidden sm:block">
                Click to customize
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative mb-2 sm:mb-3">
          {/* Background track */}
          <motion.div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className="relative h-2 sm:h-2.5 rounded-full cursor-pointer overflow-hidden hover:h-2.5 sm:hover:h-3 transition-all duration-200"
            style={{
              background: `linear-gradient(to right, ${gradientColors.join(', ')})`,
              boxShadow: `0 2px 10px rgba(var(--particle-rgb), 0.3), inset 0 1px 3px rgba(0,0,0,0.2)`,
            }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/20 pointer-events-none"></div>
          </motion.div>
          
          {/* Thumb/Handle */}
          <motion.div
            className="absolute top-1/2 cursor-grab active:cursor-grabbing"
            style={{
              left: `calc(${sliderPosition}%)`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              left: `calc(${sliderPosition}%)`,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
          >
            <motion.div
              className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: isDragging ? 1.15 : 1,
              }}
              style={{
                background: `linear-gradient(135deg, ${colorPalettes[palette][theme].primary}, ${colorPalettes[palette][theme].primaryHover})`,
                boxShadow: `0 0 0 2px ${theme === 'dark' ? 'rgba(0,0,0,0.5)' : 'white'}, 0 0 0 3px ${colorPalettes[palette][theme].primary}, 0 2px 12px ${colorPalettes[palette][theme].primary}`,
              }}
            >
              {/* Inner glow */}
              <div 
                className="absolute inset-0.5 sm:inset-1 rounded-full"
                style={{
                  background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), transparent 50%)`,
                }}
              />
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundColor: colorPalettes[palette][theme].primary,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Palette Name Labels */}
        <div className="flex justify-between px-0.5 sm:px-1">
          {paletteKeys.map((key) => (
            <motion.button
              key={key}
              onClick={() => changePalette(key)}
              className={`text-[8px] sm:text-[10px] font-medium transition-all duration-200 ${
                palette === key
                  ? 'opacity-100'
                  : 'opacity-40 hover:opacity-70'
              }`}
              style={{
                color: palette === key ? colorPalettes[key][theme].primary : undefined,
              }}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={palette === key ? 'font-bold' : ''}>
                {colorPalettes[key].name}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ColorSlider

