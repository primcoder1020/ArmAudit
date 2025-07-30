"use client"

import React from "react"
import { Box, Typography } from "@mui/material"
import { Warning } from "@mui/icons-material"
import { DashboardCard } from "@/components/ui/dashboard-card"

const data = [
  {
    threatActor: "Mohammed/DIGITAL People's Cy...",
    organisation: "Danish Ministry Of Transport",
    newsFlash: "Pro-russian Hacktivists Launch DDoS...",
  },
  {
    threatActor: "Lockbit3.0, RU, ru",
    organisation: "Ministry Of Public Health",
    newsFlash: "Data Allegedly Stolen From Ecuador...",
  },
  {
    threatActor: "Counter",
    organisation: "% Latam Spa",
    newsFlash: "Data Allegedly Stolen From Tourpay a...",
  },
  {
    threatActor: "Killnet (Killnet affiliate)",
    organisation: "Italian Senate",
    newsFlash: "Coordinated Cyberattack on Italian G...",
  },
  {
    threatActor: "Anonymous Sudan",
    organisation: "Microsoft Azure",
    newsFlash: "Claimed Responsibility for Azure Out...",
  },
  {
    threatActor: "Ragnar Locker",
    organisation: "Capcom (Japan)",
    newsFlash: "Ransomware Attack Exposes Internal...",
  },
  {
    threatActor: "LAPSUS$ Group",
    organisation: "Nvidia",
    newsFlash: "Source Code Leaked After Breach",
  },
  {
    threatActor: "APT29 (Cozy Bear)",
    organisation: "Norwegian Parliament",
    newsFlash: "Cyberespionage Linked to Russian St...",
  },
  {
    threatActor: "BlackCat (ALPHV)",
    organisation: "Mercier",
    newsFlash: "Ransomware Attack Leads to Leak of...",
  },
]

export function ImpactedOrganisation() {
  return (
    <DashboardCard 
      title="Impacted organisation and associated business risk" 
      showMoreButton
    >
      <Box sx={{ display: "flex", gap: 4, mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Warning sx={{ fontSize: 16, color: "warning.main" }} />
          <Typography variant="body2" sx={{ fontWeight: 500, color: "text.secondary" }}>
            THREAT ACTOR
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Warning sx={{ fontSize: 16, color: "warning.main" }} />
          <Typography variant="body2" sx={{ fontWeight: 500, color: "text.secondary" }}>
            IMPACTED ORGANISATION
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Warning sx={{ fontSize: 16, color: "warning.main" }} />
          <Typography variant="body2" sx={{ fontWeight: 500, color: "text.secondary" }}>
            LATEST NEWS FLASH
          </Typography>
        </Box>
      </Box>
      
      {/* Data Rows */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {data.slice(0, 5).map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 2,
              py: 1,
              alignItems: "center",
            }}
          >
            <Typography variant="body2" sx={{ color: "text.primary", fontSize: "13px" }}>
              {item.threatActor}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.primary", fontSize: "13px" }}>
              {item.organisation}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "12px", color: "text.secondary" }}>
              {item.newsFlash}
            </Typography>
          </Box>
        ))}
      </Box>
    </DashboardCard>
  )
}
