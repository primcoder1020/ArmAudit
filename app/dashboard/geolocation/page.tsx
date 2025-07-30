"use client"

import React from "react"
import { Box, Typography, Card, CardContent, Grid, Chip } from "@mui/material"
import { LocationOn, Public, Security, TrendingUp } from "@mui/icons-material"

export default function GeolocationPage() {
  const locationStats = [
    { title: "Monitored Locations", count: 45, change: "+3", color: "#3b82f6" },
    { title: "High Risk Areas", count: 8, change: "+1", color: "#ef4444" },
    { title: "Active Threats", count: 12, change: "-2", color: "#f59e0b" },
    { title: "Safe Zones", count: 37, change: "+5", color: "#22c55e" },
  ]

  const riskAreas = [
    { location: "Eastern Europe", risk: "High", threats: 15, lastUpdate: "2 hours ago" },
    { location: "Southeast Asia", risk: "Medium", threats: 8, lastUpdate: "4 hours ago" },
    { location: "Middle East", risk: "High", threats: 12, lastUpdate: "1 hour ago" },
    { location: "North America", risk: "Low", threats: 3, lastUpdate: "6 hours ago" },
  ]

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#111827", mb: 1 }}>
          Geolocation Intelligence
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          Geographic threat intelligence and location-based security monitoring
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {locationStats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <LocationOn sx={{ color: item.color, mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.count}
                  </Typography>
                  <Chip 
                    label={item.change} 
                    size="small" 
                    sx={{ 
                      ml: 1,
                      bgcolor: item.change.startsWith('+') ? "#dcfce7" : "#fef2f2", 
                      color: item.change.startsWith('+') ? "#16a34a" : "#dc2626",
                      fontSize: "11px"
                    }} 
                  />
                </Box>
                <Typography variant="body2" sx={{ color: "#6b7280" }}>
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Map Placeholder */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
            Global Threat Map
          </Typography>
          <Box sx={{ 
            height: 300, 
            bgcolor: "#f3f4f6", 
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px dashed #d1d5db"
          }}>
            <Typography variant="body1" sx={{ color: "#6b7280" }}>
              Interactive World Map Component
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Risk Areas */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
            Regional Risk Assessment
          </Typography>
          {riskAreas.map((area, index) => (
            <Box key={index} sx={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              py: 2,
              borderBottom: index < riskAreas.length - 1 ? "1px solid #e5e7eb" : "none"
            }}>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {area.location}
                </Typography>
                <Typography variant="body2" sx={{ color: "#6b7280" }}>
                  {area.threats} active threats • Updated {area.lastUpdate}
                </Typography>
              </Box>
              <Chip 
                label={area.risk}
                size="small"
                sx={{
                  bgcolor: area.risk === "High" ? "#ef4444" : 
                           area.risk === "Medium" ? "#f59e0b" : "#22c55e",
                  color: "white"
                }}
              />
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  )
}
