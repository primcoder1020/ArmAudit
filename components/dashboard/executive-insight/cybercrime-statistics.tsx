"use client"

import React from "react"
import { Box, Typography } from "@mui/material"
import { DashboardCard } from "@/components/ui/dashboard-card"


export function CybercrimeStatistics() {
  return (
    <DashboardCard title="Cybercrime Statistics" showMoreButton>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {[1, 2, 3, 4, 5].map((index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography variant="body2" sx={{ color: "text.primary", fontSize: "13px" }}>
              Cybercrime Forum Mentions
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: "text.primary", fontSize: "13px" }}>
                1,982
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "12px", color: "error.main" }}>
                ↓ 3%
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </DashboardCard>
  )
}
