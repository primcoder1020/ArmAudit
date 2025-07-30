"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { Box } from "@mui/material"
import { Sidebar } from "@/components/sidebar"
import { NavigationTabs } from "@/components/layout/navigation-tabs"
import { GlobalHeader } from "@/components/layout/global-header"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname()

  // Only show dashboard tabs and header on main dashboard routes
  const isDashboardRoute = pathname.startsWith("/dashboard/") && [
    "/dashboard/executive-insight",
    "/dashboard/alerts-insight",
    "/dashboard/advisories",
    "/dashboard/news-flash",
    "/dashboard/newsfeed"
  ].includes(pathname)

  // Don't show sidebar and layout on root page (it redirects anyway)
  if (pathname === "/") {
    return <>{children}</>
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Global Header - Always visible */}
      <GlobalHeader />

      <Box sx={{ display: "flex", height: "calc(100vh - 64px)" }}>
        <Sidebar />
        {/* Main Content */}
        <Box component="main" sx={{ flex: 1, p: 3, overflow: "auto" }}>
          {isDashboardRoute && <NavigationTabs />}
          <Box sx={{ mt: isDashboardRoute ? 3 : 0 }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
