"use client"

import React, { useMemo } from "react"
import { Box, Typography, Stack } from "@mui/material"
import { Visibility, VisibilityOff, CheckCircle, Schedule, Autorenew, Block } from "@mui/icons-material"
import { DashboardCard } from "@/components/ui/dashboard-card"
import { useFilters } from "@/contexts/filter-context"

// Base data that changes based on filters
const getAlertStats = (timeFilter: string, keywordFilter: string) => {
  // Simulate different data based on filters
  const baseMultiplier = timeFilter === "Last 24 Hours" ? 1 :
                        timeFilter === "Last 7 Days" ? 7 :
                        timeFilter === "Last 30 Days" ? 30 : 50

  const keywordMultiplier = keywordFilter === "All Keywords" ? 1 : 0.3

  const multiplier = baseMultiplier * keywordMultiplier

  return [
    { label: "Viewed", value: Math.floor(6 * multiplier).toString(), icon: <Visibility sx={{ width: 16, height: 16, color: "text.secondary" }} /> },
    { label: "Unviewed", value: `${(35.68 * multiplier).toFixed(1)}k`, icon: <VisibilityOff sx={{ width: 16, height: 16, color: "text.secondary" }} /> },
    { label: "Confirmed", value: Math.floor(2 * multiplier).toString(), icon: <CheckCircle sx={{ width: 16, height: 16, color: "text.secondary" }} /> },
    { label: "Under Review", value: Math.floor(1 * multiplier).toString(), icon: <Schedule sx={{ width: 16, height: 16, color: "text.secondary" }} /> },
    { label: "Remediation In Progress", value: Math.floor(3 * multiplier).toString(), icon: <Autorenew sx={{ width: 16, height: 16, color: "text.secondary" }} /> },
    { label: "Remediation Not Required", value: Math.floor(5 * multiplier).toString(), icon: <Block sx={{ width: 16, height: 16, color: "text.secondary" }} /> },
  ]
}

export function TotalAlertsCard() {
  const { filters } = useFilters()

  const alertStats = useMemo(() =>
    getAlertStats(filters.timeFilter, filters.keywordFilter),
    [filters.timeFilter, filters.keywordFilter]
  )

  const totalAlerts = useMemo(() => {
    const unviewedStat = alertStats.find(stat => stat.label === "Unviewed")
    return unviewedStat?.value || "35.68k"
  }, [alertStats])

  return (
    <DashboardCard sx={{ height: "100%" }} showMoreButton>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "16px" }}>
          TOTAL ALERTS:
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#111827", fontSize: "32px" }}>
          {totalAlerts}
        </Typography>
      </Box>

      <Stack spacing={3} sx={{ flex: 1 }}>
        {alertStats.map((stat, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {stat.icon}
              <Typography variant="body2" sx={{ fontSize: "14px" }}>
                {stat.label}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "14px" }}>
              {stat.value}
            </Typography>
          </Box>
        ))}
      </Stack>
    </DashboardCard>
  )
}
