"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { Box } from "@mui/material"
import { Sidebar } from "@/components/sidebar"
import { NavigationTabs } from "@/components/layout/navigation-tabs"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()

  // Only show dashboard tabs and header on main dashboard routes
  const isDashboardRoute = pathname.startsWith("/dashboard/") && [
    "/dashboard/executive-insight",
    "/dashboard/alerts-insight",
    "/dashboard/advisories",
    "/dashboard/news-flash",
    "/dashboard/newsfeed"
  ].includes(pathname)

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        {/* Main Content */}
        <Box component="main" sx={{ flex: 1, p: 3 }}>
          {isDashboardRoute && <NavigationTabs />}
          <Box sx={{ mt: isDashboardRoute ? 3 : 0 }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
