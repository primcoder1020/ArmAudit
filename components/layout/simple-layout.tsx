"use client"

import React from "react"
import { Box } from "@mui/material"
import { Sidebar } from "@/components/sidebar"

interface SimpleLayoutProps {
  children: React.ReactNode
}

export function SimpleLayout({ children }: SimpleLayoutProps) {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        {/* Main Content */}
        <Box component="main" sx={{ flex: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}
