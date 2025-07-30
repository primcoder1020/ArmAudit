"use client"

import React, { useState } from "react"
import { Box, Typography, Button } from "@mui/material"
import { IoCLookup } from "./ioc-lookup"

const tabs = [
  { key: "ioc-lookup", label: "IoC Lookup", component: IoCLookup },
  { key: "sensor-intelligence", label: "Sensor intelligence", component: () => <div>Sensor Intelligence Content</div> },
  { key: "botshield", label: "BotShield", component: () => <div>BotShield Content</div> },
  { key: "ransomware-incidents", label: "Ransomware incidents", component: () => <div>Ransomware Incidents Content</div> },
  { key: "threat-lens", label: "Threat Lens", component: () => <div>Threat Lens Content</div> },
  { key: "mobile-app-scanning", label: "Mobile app scanning", component: () => <div>Mobile App Scanning Content</div> },
]

export function ThreatIntelligence() {
  const [activeTab, setActiveTab] = useState("ioc-lookup")

  const ActiveComponent = tabs.find(tab => tab.key === activeTab)?.component || IoCLookup

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "text.primary", mb: 1 }}>
          Threat Intelligence
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Select your fiat currency and your favourite payment method
        </Typography>
      </Box>

      {/* Navigation Tabs */}
      <Box sx={{ 
        display: "flex", 
        gap: 3, 
        mb: 3, 
        borderBottom: 1, 
        borderColor: "divider", 
        pb: 1 
      }}>
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "0.875rem",
              color: activeTab === tab.key ? "text.primary" : "text.secondary",
              borderBottom: activeTab === tab.key ? 2 : 0,
              borderColor: "secondary.main",
              borderRadius: 0,
              pb: 1,
              "&:hover": {
                bgcolor: "transparent",
                color: "text.primary",
              },
            }}
          >
            {tab.label}
          </Button>
        ))}
      </Box>

      {/* Content */}
      <ActiveComponent />
    </Box>
  )
} 