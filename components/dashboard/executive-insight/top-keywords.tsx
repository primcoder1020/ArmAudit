"use client"

import React from "react"
import { Box, Typography } from "@mui/material"
import { DashboardCard } from "@/components/ui/dashboard-card"


const keywordsData = [
  { label: "spotify.com", value: "6.4", color: "#fbbf24" },
  { label: "BMW", value: "1.53k", color: "#a855f7" },
  { label: "pacinsurance.com.au", value: "1.31k", color: "#3b82f6" },
  { label: "Walmart.com", value: "947", color: "#10b981" },
  { label: "wikipedia.org", value: "844", color: "#ef4444" },
]

export function TopKeywords() {
  return (
    <DashboardCard title="Top Keywords">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {keywordsData.map((item, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body2" sx={{ color: "text.primary", fontSize: "13px", minWidth: 140 }}>
              {item.label}
            </Typography>
            <Box sx={{ flex: 1, display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  flex: 1,
                  height: 8,
                  backgroundColor: "grey.100",
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: `${(index + 1) * 20}%`, // Different widths for visual variety
                    height: "100%",
                    backgroundColor: item.color,
                    borderRadius: 1,
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 600, color: "text.primary", fontSize: "13px", minWidth: 40 }}>
                {item.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </DashboardCard>
  )
}
