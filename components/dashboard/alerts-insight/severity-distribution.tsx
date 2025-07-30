"use client"

import React, { useMemo } from "react"
import { Box, Typography } from "@mui/material"
import { DashboardCard } from "@/components/ui/dashboard-card"
import { useFilters } from "@/contexts/filter-context"

const getSeverityData = (timeFilter: string, keywordFilter: string) => {
  const baseData = [
    { name: "Data Exposures", value: 85, color: "#ef4444" },
    { name: "Ransomware Leaks", value: 70, color: "#f97316" },
    { name: "Compromised End...", value: 45, color: "#eab308" },
    { name: "Compromised Co...", value: 30, color: "#22c55e" },
    { name: "I2P Links", value: 15, color: "#ef4444" },
    { name: "Tor Links", value: 95, color: "#f97316" },
  ]

  // Filter based on keyword selection
  if (keywordFilter !== "All Keywords") {
    return baseData.filter(item =>
      item.name.toLowerCase().includes(keywordFilter.toLowerCase()) ||
      (keywordFilter === "Ransomware" && item.name.includes("Ransomware")) ||
      (keywordFilter === "Data Breach" && item.name.includes("Data Exposures"))
    ).map(item => ({
      ...item,
      value: Math.floor(item.value * 1.2) // Boost filtered results
    }))
  }

  return baseData
}

export function SeverityDistribution() {
  const { filters } = useFilters()

  const severityData = useMemo(() =>
    getSeverityData(filters.timeFilter, filters.keywordFilter),
    [filters.timeFilter, filters.keywordFilter]
  )

  const maxValue = useMemo(() =>
    Math.max(...severityData.map(item => item.value)),
    [severityData]
  )

  return (
    <DashboardCard title="Severity Distribution" showMoreButton>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        {severityData.length === 0 ? (
          <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "center", py: 4 }}>
            No data available for selected filters
          </Typography>
        ) : (
          severityData.map((item, index) => (
            <Box key={index} sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Typography variant="body2" sx={{ fontSize: "13px", color: "text.primary" }}>
                {item.name}
              </Typography>
              <Box sx={{ position: "relative", height: 8, backgroundColor: "#f3f4f6", borderRadius: 1 }}>
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: `${(item.value / maxValue) * 100}%`,
                    backgroundColor: item.color,
                    borderRadius: 1,
                    transition: "width 0.3s ease",
                  }}
                />
              </Box>
            </Box>
          ))
        )}
      </Box>
    </DashboardCard>
  )
}
