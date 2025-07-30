"use client"

import React from "react"
import { Box, Stack } from "@mui/material"
import { DashboardCard } from "@/components/ui/dashboard-card"
import { TagChip } from "@/components/ui/tag-chip"

const leftTags = [
  "#Ransomware",
  "#DataBreach",
  "#DDoSAttack",
  "#Hacktivism",
  "#ZeroDay",
  "#NationStateThreat",
  "#CredentialLeak",
  "#InsiderThreat",
]

const rightTags = [
  "#Ransomware",
  "#PhishingCampaign",
  "#SupplyChainAttack",
  "#CyberEspionage",
  "#DarkWebSale",
  "#ThreatActor",
  "#FinancialFraud",
  "#Malware",
]

export function TagsCloudCard() {
  return (
    <DashboardCard title="AI Filtered Tags Cloud" showMoreButton sx={{ height: "100%" }}>
      <Box sx={{ display: "flex", gap: "32px", height: "calc(100% - 60px)" }}>
        <Box sx={{ flex: 1 }}>
          <Stack spacing={2}>
            {leftTags.map((tag, index) => (
              <TagChip 
                key={index} 
                label={tag} 
                color="primary"
                variant="outlined"
                sx={{ 
                  fontSize: "14px", 
                  justifyContent: "flex-start",
                  backgroundColor: "transparent",
                  color: "primary.main",
                  border: "none",
                  padding: "2px 0",
                  "& .MuiChip-label": {
                    padding: 0,
                  },
                }} 
              />
            ))}
          </Stack>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Stack spacing={2}>
            {rightTags.map((tag, index) => (
              <TagChip 
                key={index} 
                label={tag} 
                color="primary"
                variant="outlined"
                sx={{ 
                  fontSize: "14px", 
                  justifyContent: "flex-start",
                  backgroundColor: "transparent",
                  color: "primary.main",
                  border: "none",
                  padding: "2px 0",
                  "& .MuiChip-label": {
                    padding: 0,
                  },
                }} 
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </DashboardCard>
  )
}
