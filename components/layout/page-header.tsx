"use client"

import React from "react"
import { Box, Typography, Button } from "@mui/material"

interface ActionButton {
  label?: string
  icon?: React.ReactNode
  onClick?: () => void
  variant?: "text" | "outlined" | "contained"
  endIcon?: React.ReactNode
}

interface PageHeaderProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  actions?: ActionButton[]
  children?: React.ReactNode
}

export function PageHeader({ title, subtitle, icon, actions, children }: PageHeaderProps) {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
            {icon}
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "text.primary" }}>
              {title}
            </Typography>
          </Box>
          {subtitle && (
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {subtitle}
            </Typography>
          )}
        </Box>
        
        {actions && actions.length > 0 && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "outlined"}
                size="small"
                onClick={action.onClick}
                endIcon={action.endIcon}
                sx={{
                  textTransform: "none",
                  borderColor: action.variant === "outlined" ? "grey.300" : undefined,
                  color: action.variant === "outlined" ? "text.primary" : undefined,
                  minWidth: action.label ? "auto" : "40px",
                  "&:hover": {
                    backgroundColor: action.variant === "outlined" ? "grey.50" : undefined,
                  },
                }}
              >
                {action.icon || action.label}
              </Button>
            ))}
          </Box>
        )}
      </Box>
      
      {children}
    </Box>
  )
}
