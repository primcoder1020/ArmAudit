"use client"

import React from "react"
import { Box, Typography } from "@mui/material"

interface RiskGaugeProps {
  value?: number
}

const RiskGauge: React.FC<RiskGaugeProps> = ({ value = 30 }) => {
  const size = 200
  const center = size / 2
  const radius = 70
  const strokeWidth = 16

  const angle = (value / 100) * 180
  const rad = (angle * Math.PI) / 180

  const needleLength = radius - 10
  const needleX = center + needleLength * Math.cos(Math.PI - rad)
  const needleY = center - needleLength * Math.sin(Math.PI - rad)

  const getRiskLevel = (val: number) => {
    if (val <= 25) return { level: "Low", color: "#22c55e" }
    if (val <= 50) return { level: "Medium", color: "#eab308" }
    if (val <= 75) return { level: "High", color: "#f97316" }
    return { level: "Critical", color: "#ef4444" }
  }

  const risk = getRiskLevel(value)

  const createArc = (start: number, end: number, color: string) => {
    const startRad = (start * Math.PI) / 180
    const endRad = (end * Math.PI) / 180

    const x1 = center + radius * Math.cos(Math.PI - startRad)
    const y1 = center - radius * Math.sin(Math.PI - startRad)
    const x2 = center + radius * Math.cos(Math.PI - endRad)
    const y2 = center - radius * Math.sin(Math.PI - endRad)

    const largeArc = end - start > 180 ? 1 : 0

    return (
      <path
        d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
    )
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      <Box sx={{ position: "relative", width: size, height: size / 2 + 20 }}>
        <svg width={size} height={size / 2 + 20}>
          {/* Full background arc */}
          <path
            d={`M ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center + radius} ${center}`}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />

          {/* Segmented risk arcs */}
          {createArc(0, 45, "#22c55e")}    {/* Green - Low */}
          {createArc(45, 90, "#eab308")}   {/* Yellow - Medium */}
          {createArc(90, 135, "#f97316")}  {/* Orange - High */}
          {createArc(135, 180, "#ef4444")} {/* Red - Critical */}

          {/* Needle */}
          <line
            x1={center}
            y1={center}
            x2={needleX}
            y2={needleY}
            stroke="#1f2937"
            strokeWidth={3}
            strokeLinecap="round"
          />

          {/* Center Dot */}
          <circle cx={center} cy={center} r={5} fill="#1f2937" />
        </svg>

        {/* Text inside gauge */}
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "#6b7280", fontSize: "14px" }}>
            Risk
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#111827", fontWeight: 600, fontSize: "18px", mt: 0.5 }}
          >
            {risk.level}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default RiskGauge
