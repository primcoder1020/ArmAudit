"use client"

import React from "react"
import { useRouter, usePathname } from "next/navigation"
import { Box, Typography, Button } from "@mui/material"

interface TabItem {
  key: string
  label: string
  path: string
}

const tabs: TabItem[] = [
  { key: "executive-insight", label: "Executive Insight", path: "/dashboard/executive-insight" },
  { key: "alerts-insight", label: "Alerts Insight", path: "/dashboard/alerts-insight" },
  { key: "advisories", label: "Advisories", path: "/dashboard/advisories" },
  { key: "news-flash", label: "NewsFlash", path: "/dashboard/news-flash" },
  { key: "newsfeed", label: "Newsfeed", path: "/dashboard/newsfeed" },
]

export function NavigationTabs() {
  const router = useRouter()
  const pathname = usePathname()

  const handleTabClick = (path: string) => {
    router.push(path)
  }

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "text.primary", mb: 1 }}>
          Dashboard
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Select your fiat currency and your favourite payment method
        </Typography>
      </Box>

      {/* Navigation Tabs */}
      <Box sx={{ display: "flex", gap: 3, mb: 3, borderBottom: 1, borderColor: "divider", pb: 1 }}>
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            onClick={() => handleTabClick(tab.path)}
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "0.875rem",
              color: pathname === tab.path ? "text.primary" : "text.secondary",
              borderBottom: pathname === tab.path ? 2 : 0,
              borderColor: "secondary.main",
              borderRadius: 0,
              pb: 1,
              "&:hover": {
                bgcolor: "transparent",
                color: "text.primary",
              },
            }}
          >
            {tab.label}
          </Button>
        ))}
      </Box>
    </Box>
  )
}
