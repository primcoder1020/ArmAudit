"use client"

import React from "react"
import { Box, Typography } from "@mui/material"
import { DashboardCard } from "@/components/ui/dashboard-card"
import { ProgressBar } from "@/components/ui/progress-bar"

const countryData = [
  { country: "United States", count: "2,801", percentage: 100 },
  { country: "Russian Federation", count: "1,041", percentage: 37 },
  { country: "China", count: "959", percentage: 34 },
  { country: "United Kingdom", count: "574", percentage: 20 },
  { country: "Germany", count: "445", percentage: 16 },
]

export function CountryStatsCard() {
  return (
    <DashboardCard title="Newsfeed country wise (Top 5)" showMoreButton>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {countryData.map((item, index) => (
          <Box key={index}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 0.5 }}>
              <Typography variant="body2" sx={{ color: "text.primary" }}>
                {item.country}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {item.count}
              </Typography>
            </Box>
            <ProgressBar
              value={item.percentage}
              height={16}
              color="secondary.main"
            />
          </Box>
        ))}
      </Box>
      
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
        Total Records:{" "}
        <Typography component="span" sx={{ fontWeight: 500, color: "text.primary" }}>
          12,390
        </Typography>
      </Typography>
    </DashboardCard>
  )
}
