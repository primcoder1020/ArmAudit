"use client"

import React from "react"
import { Box, Typography, Card, CardContent, Chip, Avatar } from "@mui/material"
import { Warning, LocationOn, Security, Person } from "@mui/icons-material"

export default function PhysicalThreatsPage() {
  const threatStats = [
    { title: "Active Incidents", count: 7, severity: "High", color: "#ef4444" },
    { title: "Monitored Locations", count: 45, severity: "Normal", color: "#3b82f6" },
    { title: "Security Personnel", count: 128, severity: "Active", color: "#22c55e" },
    { title: "Threat Alerts", count: 23, severity: "Medium", color: "#f59e0b" },
  ]

  const activeIncidents = [
    {
      id: "INC-001",
      type: "Unauthorized Access",
      location: "Building A - Floor 3",
      severity: "High",
      status: "Active",
      reportedBy: "Security Camera AI",
      timestamp: "15 minutes ago"
    },
    {
      id: "INC-002", 
      type: "Suspicious Vehicle",
      location: "Parking Lot B",
      severity: "Medium",
      status: "Investigating",
      reportedBy: "Security Guard",
      timestamp: "1 hour ago"
    },
    {
      id: "INC-003",
      type: "Tailgating Detected",
      location: "Main Entrance",
      severity: "Low",
      status: "Resolved",
      reportedBy: "Access Control System",
      timestamp: "3 hours ago"
    }
  ]

  const securityZones = [
    { name: "Executive Floor", status: "Secure", personnel: 8, lastCheck: "5 min ago" },
    { name: "Data Center", status: "Secure", personnel: 4, lastCheck: "2 min ago" },
    { name: "Main Lobby", status: "Alert", personnel: 6, lastCheck: "1 min ago" },
    { name: "Parking Areas", status: "Monitoring", personnel: 12, lastCheck: "8 min ago" },
  ]

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#111827", mb: 1 }}>
          Physical Threats
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          Real-time monitoring of physical security threats and incidents
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3, mb: 4 }}>
        {threatStats.map((item, index) => (
          <Card key={index} sx={{ height: "100%" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {index === 0 && <Warning sx={{ color: item.color, mr: 1 }} />}
                  {index === 1 && <LocationOn sx={{ color: item.color, mr: 1 }} />}
                  {index === 2 && <Person sx={{ color: item.color, mr: 1 }} />}
                  {index === 3 && <Security sx={{ color: item.color, mr: 1 }} />}
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.count}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#6b7280", mb: 1 }}>
                  {item.title}
                </Typography>
                <Chip 
                  label={item.severity} 
                  size="small" 
                  sx={{ 
                    bgcolor: item.color, 
                    color: "white",
                    fontSize: "11px"
                  }} 
                />
              </CardContent>
            </Card>
        ))}
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3 }}>
        {/* Active Incidents */}
        <Box>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Active Security Incidents
              </Typography>
              {activeIncidents.map((incident, index) => (
                <Box key={index} sx={{ 
                  p: 2,
                  border: "1px solid #e5e7eb",
                  borderRadius: 1,
                  mb: 2,
                  "&:last-child": { mb: 0 }
                }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {incident.id} - {incident.type}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#6b7280" }}>
                        <LocationOn sx={{ fontSize: 14, mr: 0.5 }} />
                        {incident.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Chip 
                        label={incident.severity}
                        size="small"
                        sx={{
                          bgcolor: incident.severity === "High" ? "#ef4444" : 
                                   incident.severity === "Medium" ? "#f59e0b" : "#22c55e",
                          color: "white",
                          fontSize: "10px"
                        }}
                      />
                      <Chip 
                        label={incident.status}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: "10px" }}
                      />
                    </Box>
                  </Box>
                  <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                    Reported by {incident.reportedBy} • {incident.timestamp}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Box>

        {/* Security Zones */}
        <Box>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Security Zone Status
              </Typography>
              {securityZones.map((zone, index) => (
                <Box key={index} sx={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  py: 2,
                  borderBottom: index < securityZones.length - 1 ? "1px solid #e5e7eb" : "none"
                }}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {zone.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#6b7280" }}>
                      {zone.personnel} personnel • {zone.lastCheck}
                    </Typography>
                  </Box>
                  <Chip 
                    label={zone.status}
                    size="small"
                    sx={{
                      bgcolor: zone.status === "Secure" ? "#22c55e" : 
                               zone.status === "Alert" ? "#ef4444" : "#f59e0b",
                      color: "white",
                      fontSize: "10px"
                    }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
