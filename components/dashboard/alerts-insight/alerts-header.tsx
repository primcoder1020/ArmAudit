"use client"

import React from "react"
import { Box, Typography, IconButton } from "@mui/material"
import { CalendarToday, TrendingUp, Refresh, MoreHoriz } from "@mui/icons-material"
import { FilterDropdown } from "@/components/ui/filter-dropdown"
import { useFilters } from "@/contexts/filter-context"

export function AlertsHeader() {
  const { filters, updateFilter, resetFilters } = useFilters()

  const timeOptions = [
    "Last 24 Hours",
    "Last 7 Days",
    "Last 30 Days",
    "Last 3 Months",
    "Last 6 Months",
    "Last Year"
  ]

  const keywordOptions = [
    "All Keywords",
    "Ransomware",
    "Data Breach",
    "Malware",
    "Phishing",
    "APT",
    "Vulnerability"
  ]

  const handleRefresh = () => {
    resetFilters()
    // Add any additional refresh logic here
  }

  return (
    <Box>
      {/* Page Title */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "text.primary", mb: 1 }}>
          Alerts Insight
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Select your fiat currency and your favourite payment method
        </Typography>
      </Box>

      {/* Filter Controls */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <FilterDropdown
            label="Time Period"
            options={timeOptions}
            value={filters.timeFilter}
            onChange={(value) => updateFilter("timeFilter", Array.isArray(value) ? value[0] || "" : value)}
            icon={<CalendarToday sx={{ fontSize: 16 }} />}
          />

          <FilterDropdown
            label="Keywords"
            options={keywordOptions}
            value={filters.keywordFilter}
            onChange={(value) => updateFilter("keywordFilter", Array.isArray(value) ? value[0] || "" : value)}
            icon={<TrendingUp sx={{ fontSize: 16 }} />}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton size="small" sx={{ color: "text.secondary" }} onClick={handleRefresh}>
            <Refresh />
          </IconButton>
          <IconButton size="small" sx={{ color: "text.secondary" }}>
            <MoreHoriz />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}
