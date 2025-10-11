import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Check } from 'lucide-react'
import { useTheme, colorPalettes } from '../context/ThemeContext'

const ColorPaletteSelector = () => {
  const { palette, changePalette, availablePalettes } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const paletteColors = {
    blue: '#3b82f6',
    green: '#10b981',
    purple: '#a78bfa',
    pink: '#f472b6',
    yellow: '#fbbf24',
    brown: '#d97706',
  }

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-200"
        aria-label="Change color palette"
      >
        <Palette size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Palette selector */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 z-50 min-w-[200px]"
            >
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Color Palette
              </h3>
              <div className="space-y-2">
                {availablePalettes.map((paletteKey) => (
                  <motion.button
                    key={paletteKey}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      changePalette(paletteKey)
                      setIsOpen(false)
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors duration-200 ${
                      palette === paletteKey
                        ? 'bg-gray-100 dark:bg-slate-700'
                        : 'hover:bg-gray-50 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-5 h-5 rounded-full border-2 border-white dark:border-slate-900 shadow-sm"
                        style={{ backgroundColor: paletteColors[paletteKey] }}
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {colorPalettes[paletteKey].name}
                      </span>
                    </div>
                    {palette === paletteKey && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      >
                        <Check size={16} className="text-gray-700 dark:text-gray-300" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ColorPaletteSelector

