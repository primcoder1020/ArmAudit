"use client"

import React from "react"
import { Card, CardContent, CardHeader, Typography, IconButton, Box } from "@mui/material"
import { MoreHoriz } from "@mui/icons-material"

interface DashboardCardProps {
  title?: string
  subtitle?: string
  icon?: React.ReactNode
  action?: React.ReactNode
  showMoreButton?: boolean
  onMoreClick?: () => void
  children: React.ReactNode
  sx?: object
}

export function DashboardCard({
  title,
  subtitle,
  icon,
  action,
  showMoreButton = false,
  onMoreClick,
  children,
  sx = {},
}: DashboardCardProps) {
  return (
    <Card sx={{ ...sx }}>
      {(title || icon || action || showMoreButton) && (
        <CardHeader
          avatar={icon}
          title={
            title && (
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {title}
              </Typography>
            )
          }
          subheader={
            subtitle && (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {subtitle}
              </Typography>
            )
          }
          action={
            action || (showMoreButton && (
              <IconButton onClick={onMoreClick}>
                <MoreHoriz sx={{ color: "text.secondary" }} />
              </IconButton>
            ))
          }
        />
      )}
      <CardContent sx={{ pt: title || icon ? 0 : 2 }}>
        {children}
      </CardContent>
    </Card>
  )
}
