import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Palette } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const ColorSlider = () => {
  const { palette, changePalette, colorPalettes, theme } = useTheme()
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef(null)

  const paletteKeys = useMemo(() => Object.keys(colorPalettes), [colorPalettes])
  const paletteIndex = paletteKeys.indexOf(palette)
  const gradientColors = paletteKeys.map((key) => colorPalettes[key][theme].primary)
  const sliderPosition = (paletteIndex / (paletteKeys.length - 1)) * 100

  const handleInteraction = useCallback(
    (clientX) => {
      if (!sliderRef.current) return

      const rect = sliderRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percentage = Math.max(0, Math.min(1, x / rect.width))
      const index = Math.round(percentage * (paletteKeys.length - 1))

      if (paletteKeys[index] !== palette) {
        changePalette(paletteKeys[index])
      }
    },
    [changePalette, palette, paletteKeys],
  )

  const handleMouseMove = useCallback((event) => handleInteraction(event.clientX), [handleInteraction])
  const handleTouchMove = useCallback((event) => handleInteraction(event.touches[0].clientX), [handleInteraction])
  const stopDragging = useCallback(() => setIsDragging(false), [])

  useEffect(() => {
    if (!isDragging) return undefined

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', stopDragging)
    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', stopDragging)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', stopDragging)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', stopDragging)
    }
  }, [handleMouseMove, handleTouchMove, isDragging, stopDragging])

  const moveByKeyboard = (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()

    if (event.key === 'Home') {
      changePalette(paletteKeys[0])
      return
    }

    if (event.key === 'End') {
      changePalette(paletteKeys[paletteKeys.length - 1])
      return
    }

    const nextIndex = event.key === 'ArrowRight'
      ? Math.min(paletteIndex + 1, paletteKeys.length - 1)
      : Math.max(paletteIndex - 1, 0)
    changePalette(paletteKeys[nextIndex])
  }

  return (
    <div className="surface-card-strong w-full p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: 'rgba(var(--particle-rgb), 0.1)', color: 'var(--color-primary)' }}>
            <Palette size={18} />
          </span>
          <div>
            <h3 className="text-sm font-black text-slate-950 dark:text-white">Theme Accent</h3>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{colorPalettes[palette].name}</p>
          </div>
        </div>
        <div
          className="h-8 w-8 rounded-full border-4 border-white shadow-lg dark:border-slate-950"
          style={{ background: colorPalettes[palette][theme].primary }}
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-3.5 py-3">
        <div
          ref={sliderRef}
          role="slider"
          tabIndex={0}
          aria-label="Theme accent color"
          aria-valuemin={0}
          aria-valuemax={paletteKeys.length - 1}
          aria-valuenow={paletteIndex}
          aria-valuetext={colorPalettes[palette].name}
          onKeyDown={moveByKeyboard}
          onMouseDown={(event) => {
            setIsDragging(true)
            handleInteraction(event.clientX)
          }}
          onTouchStart={(event) => {
            setIsDragging(true)
            handleInteraction(event.touches[0].clientX)
          }}
          className="h-2.5 cursor-pointer rounded-full outline-none ring-offset-2 ring-offset-transparent focus-visible:ring-4"
          style={{
            background: `linear-gradient(to right, ${gradientColors.join(', ')})`,
            boxShadow: 'inset 0 1px 3px rgba(15, 23, 42, 0.28)',
            '--tw-ring-color': 'rgba(var(--particle-rgb), 0.24)',
          }}
        />

        <div
          className="pointer-events-none absolute top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${sliderPosition}%` }}
          aria-hidden="true"
        >
          <motion.div
            className="h-full w-full rounded-full border-4 border-white shadow-xl dark:border-slate-950"
            animate={{ scale: isDragging ? 1.08 : 1 }}
            transition={{ type: 'spring', stiffness: 420, damping: 34 }}
            style={{
              background: `linear-gradient(135deg, ${colorPalettes[palette][theme].primary}, ${colorPalettes[palette][theme].accent})`,
              boxShadow: `0 10px 26px rgba(var(--particle-rgb), 0.35)`,
            }}
          />
        </div>
      </div>

      <div className="mt-1 flex justify-between gap-1">
        {paletteKeys.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => changePalette(key)}
            className="h-7 w-7 rounded-full border-2 transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4"
            style={{
              background: colorPalettes[key][theme].primary,
              borderColor: palette === key ? 'white' : 'transparent',
              boxShadow: palette === key ? `0 0 0 2px ${colorPalettes[key][theme].primary}` : 'none',
              '--tw-ring-color': 'rgba(var(--particle-rgb), 0.24)',
            }}
            aria-label={`Use ${colorPalettes[key].name} accent`}
          />
        ))}
      </div>
    </div>
  )
}

export default ColorSlider
