"use client"

import { Box } from "@mui/material"
import { FilterProvider } from "@/contexts/filter-context"
import { AlertsHeader } from "./alerts-insight/alerts-header"
import { RiskGaugeCard } from "./alerts-insight/risk-gauge-card"
import { TotalAlertsCard } from "./alerts-insight/total-alerts-card"
import { TagsCloudCard } from "./alerts-insight/tags-cloud-card"
import { SeverityDistribution } from "./alerts-insight/severity-distribution"

export function AlertsInsight() {
  return (
    <FilterProvider>
      <Box>
        <AlertsHeader />

        {/* Main Content - 2x2 Layout */}
        <Box sx={{ width: "100%" }}>
          {/* First Row */}
          <Box sx={{ display: "flex", gap: "24px", marginBottom: "24px", height: "400px" }}>
            {/* Risk Gauge and Services Table - Left Half */}
            <Box sx={{ flex: "1", height: "100%" }}>
              <RiskGaugeCard />
            </Box>

            {/* Total Alerts - Right Half */}
            <Box sx={{ flex: "1", height: "100%" }}>
              <TotalAlertsCard />
            </Box>
          </Box>

          {/* Second Row */}
          <Box sx={{ display: "flex", gap: "24px", height: "350px" }}>
            {/* AI Filtered Tags Cloud - Left Half */}
            <Box sx={{ flex: "1", height: "100%" }}>
              <TagsCloudCard />
            </Box>

            {/* Severity Distribution - Right Half */}
            <Box sx={{ flex: "1", height: "100%" }}>
              <SeverityDistribution />
            </Box>
          </Box>
        </Box>
      </Box>
    </FilterProvider>
  )
}
