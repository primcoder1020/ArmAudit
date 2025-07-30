"use client"

import React from "react"
import { Box, Typography } from "@mui/material"
import { DashboardCard } from "@/components/ui/dashboard-card"
import RiskGauge from "@/app/riskChart"

const services = [
  "Data Exposures...",
  "Ransomware Leaks",
  "Compromised Endpoints",
  "Compromised Cookies",
  "I2P Links",
  "Tor Links",
  "Compromised Files",
  "Leaked Credentials",
]

export function RiskGaugeCard() {
  return (
    <DashboardCard sx={{ height: "100%", display: "flex" }}>
      <Box
        sx={{
          width: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <RiskGauge />
      </Box>
      <Box sx={{ flex: 1, padding: "20px" }}>
        {/* Header */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 2,
            pb: 1,
            mb: 2,
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Typography variant="body2" sx={{
            fontWeight: 700,
            color: "text.primary",
            textTransform: "uppercase",
            fontSize: "12px",
            letterSpacing: "0.5px"
          }}>
            SERVICE
          </Typography>
          <Typography variant="body2" sx={{
            fontWeight: 700,
            color: "text.primary",
            textTransform: "uppercase",
            fontSize: "12px",
            letterSpacing: "0.5px"
          }}>
            RISK
          </Typography>
          <Typography variant="body2" sx={{
            fontWeight: 700,
            color: "text.primary",
            textTransform: "uppercase",
            fontSize: "12px",
            letterSpacing: "0.5px"
          }}>
            ALERTS
          </Typography>
        </Box>

        {/* Data Rows */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Typography variant="body2" sx={{
                color: "text.secondary",
                fontSize: "14px",
                fontWeight: 400
              }}>
                {service}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#d1d5db"
                }} />
                <Typography variant="body2" sx={{
                  color: "text.secondary",
                  fontSize: "14px",
                  fontWeight: 400
                }}>
                  Low
                </Typography>
              </Box>
              <Typography variant="body2" sx={{
                color: "text.primary",
                fontSize: "14px",
                fontWeight: 500
              }}>
                0
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </DashboardCard>
  )
}
