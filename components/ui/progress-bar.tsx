"use client"

import React from "react"
import { Box, LinearProgress, Typography } from "@mui/material"

interface ProgressBarProps {
  label?: string
  value: number
  color?: string
  showValue?: boolean
  height?: number
  sx?: object
}

export function ProgressBar({
  label,
  value,
  color = "primary",
  showValue = false,
  height = 16,
  sx = {},
}: ProgressBarProps) {
  return (
    <Box sx={{ ...sx }}>
      {(label || showValue) && (
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
          {label && (
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {label}
            </Typography>
          )}
          {showValue && (
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {value}%
            </Typography>
          )}
        </Box>
      )}
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height,
          borderRadius: height / 2,
          bgcolor: "grey.200",
          "& .MuiLinearProgress-bar": {
            bgcolor: typeof color === "string" && color.startsWith("#") ? color : `${color}.main`,
            borderRadius: height / 2,
          },
        }}
      />
    </Box>
  )
}
