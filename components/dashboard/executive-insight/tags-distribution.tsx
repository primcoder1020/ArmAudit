"use client"

import React from "react"
import { Box, Typography } from "@mui/material"
import { DashboardCard } from "@/components/ui/dashboard-card"


const tagsData = [
  { label: "Cybersecurity Discussions", value: 50 },
  { label: "Probable India Bank account", value: 48 },
  { label: "Credit Card Number", value: 45 },
  { label: "Chinese", value: 43 },
  { label: "IP Address", value: 40 },
  { label: "Crypto Currency", value: 39 },
  { label: "Arabic", value: 33 },
  { label: "Russian", value: 31 },
  { label: "Abusive Language", value: 32 },
  { label: "Probable Phone Number", value: 30 },
]

export function TagsDistribution() {
  return (
    <DashboardCard title="Tags Distribution">
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="body2" sx={{ fontWeight: 500, color: "text.secondary" }}>
          TAG
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 500, color: "text.secondary" }}>
          Distribution
        </Typography>
      </Box>
      
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {tagsData.map((item, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body2" sx={{ minWidth: 160, fontSize: "13px", color: "text.primary" }}>
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
                    width: `${item.value}%`,
                    height: "100%",
                    backgroundColor: "#000000",
                    borderRadius: 1,
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ minWidth: 35, fontSize: "13px", color: "text.primary", fontWeight: 500 }}>
                {item.value}%
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </DashboardCard>
  )
}
