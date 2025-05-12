"use client"

import { useEffect, useRef } from "react"

export default function WaveBackgroundCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      draw()
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Gradient for wave lines
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient.addColorStop(0, "#3DDEED")
      gradient.addColorStop(1, "#CB00DD")

      // Draw wave lines
      const drawWavyLine = (startY, amplitude, frequency) => {
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.globalAlpha = 0.2

        for (let i = 0; i < 20; i++) {
          ctx.beginPath()
          const yOffset = i * 15

          for (let x = 0; x < canvas.width; x += 5) {
            const y = startY + yOffset + Math.sin(x * frequency) * amplitude
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
          }

          ctx.stroke()
        }
      }

      // Draw spiral lines
      const drawSpiral = (centerX, centerY) => {
        const maxRadius = Math.min(canvas.width, canvas.height) * 0.8

        for (let j = 0; j < 10; j++) {
          ctx.beginPath()
          ctx.strokeStyle = j % 2 === 0 ? "#a78bfa" : "#93c5fd"
          ctx.lineWidth = 1
          ctx.globalAlpha = 0.15

          const startRadius = 50 + j * 20

          for (let angle = 0; angle < Math.PI * 8; angle += 0.01) {
            const radius = startRadius + angle * 10
            if (radius > maxRadius) break

            const x = centerX + radius * Math.cos(angle)
            const y = centerY + radius * Math.sin(angle)

            angle === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
          }

          ctx.stroke()
        }
      }

      drawWavyLine(canvas.height * 0.3, 20, 0.01)
      drawWavyLine(canvas.height * 0.7, 15, 0.02)
      drawSpiral(canvas.width * 0.5, canvas.height * 0.5)
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 opacity-10"
    />
  )
}
