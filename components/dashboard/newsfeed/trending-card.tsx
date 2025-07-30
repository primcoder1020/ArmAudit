"use client"

import React from "react"
import { Box, Typography, Button } from "@mui/material"
import { ExpandMore } from "@mui/icons-material"
import { DashboardCard } from "@/components/ui/dashboard-card"
import { ProgressBar } from "@/components/ui/progress-bar"

const trendingData = [
  { industry: "Government & LEA", count: "2,801", percentage: 100 },
  { industry: "IT & ITES", count: "2,801", percentage: 100 },
  { industry: "BFSI", count: "2,801", percentage: 100 },
  { industry: "Technology", count: "2,801", percentage: 100 },
  { industry: "Healthcare", count: "2,601", percentage: 93 },
]

export function TrendingCard() {
  return (
    <DashboardCard 
      title="Top 5 Trending"
      action={
        <Button 
          variant="outlined" 
          size="small" 
          endIcon={<ExpandMore />} 
          sx={{ 
            bgcolor: "transparent",
            textTransform: "none",
            borderColor: "grey.300",
            color: "text.primary",
          }}
        >
          Industry
        </Button>
      }
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {trendingData.map((item, index) => (
          <Box key={index}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 0.5 }}>
              <Typography variant="body2" sx={{ color: "text.primary" }}>
                {item.industry}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {item.count}
              </Typography>
            </Box>
            <ProgressBar
              value={item.percentage}
              height={16}
              color="#f97316"
            />
          </Box>
        ))}
      </Box>
    </DashboardCard>
  )
}
