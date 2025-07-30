"use client"

import React from "react"
import { Chip } from "@mui/material"

interface TagChipProps {
  label: string
  color?: "primary" | "secondary" | "default" | "error" | "info" | "success" | "warning"
  variant?: "filled" | "outlined"
  size?: "small" | "medium"
  clickable?: boolean
  onClick?: () => void
  sx?: object
}

export function TagChip({
  label,
  color = "primary",
  variant = "outlined",
  size = "small",
  clickable = false,
  onClick,
  sx = {},
}: TagChipProps) {
  return (
    <Chip
      label={label}
      color={color}
      variant={variant}
      size={size}
      clickable={clickable}
      onClick={onClick}
      sx={{
        borderRadius: 1,
        fontSize: "0.75rem",
        fontWeight: 500,
        ...sx,
      }}
    />
  )
}
