"use client"

import React from "react"
import { Box, Typography } from "@mui/material"
import { DashboardCard } from "@/components/ui/dashboard-card"


const statisticsData = [
  { label: "Compromised Endpoints", value: "6,279", change: "↓ 15.1%", changeColor: "error" },
  { label: "Data Exposures", value: "2,333", change: "↓ 6.8%", changeColor: "error" },
  { label: "Compromised Files", value: "1,179", change: "↑ 1.1%", changeColor: "success" },
  { label: "Leaked Credentials", value: "360", change: "↓ 17.3%", changeColor: "error" },
  { label: "Ransomware Leaks", value: "29", change: "↓ 7.7%", changeColor: "error" },
]

const MiniChart = () => (
  <svg viewBox="0 0 64 32" style={{ width: "100%", height: "100%" }}>
    <path d="M0,20 Q16,15 32,18 T64,16" stroke="#5454d4" strokeWidth="2" fill="none" />
  </svg>
)

export function DarkwebStatistics() {
  return (
    <DashboardCard title="Darkweb Statistics">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {statisticsData.map((item, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography variant="body2" sx={{ color: "text.primary", fontSize: "13px" }}>
              {item.label}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: "text.primary", fontSize: "13px" }}>
                {item.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  color: item.changeColor === "error" ? "error.main" : "success.main"
                }}
              >
                {item.change}
              </Typography>
              <Box sx={{ width: 40, height: 20 }}>
                <MiniChart />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </DashboardCard>
  )
}
