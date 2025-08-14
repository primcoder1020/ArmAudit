"use client"

import React from "react"
import { Box, Typography, Card, CardContent, Chip, List, ListItem, ListItemText, Avatar } from "@mui/material"
import { Notifications, Warning, Security, CheckCircle } from "@mui/icons-material"

export default function AlertsPage() {
  const alertStats = [
    { title: "Active Alerts", count: 47, priority: "High", color: "#ef4444" },
    { title: "Resolved Today", count: 23, priority: "Resolved", color: "#22c55e" },
    { title: "Critical Pending", count: 8, priority: "Critical", color: "#dc2626" },
    { title: "False Positives", count: 12, priority: "Low", color: "#6b7280" },
  ]

  const recentAlerts = [
    {
      id: "ALT-001",
      title: "Suspicious Login Activity Detected",
      description: "Multiple failed login attempts from unusual location",
      severity: "High",
      category: "Authentication",
      timestamp: "5 minutes ago",
      status: "Active"
    },
    {
      id: "ALT-002",
      title: "Malware Detected on Endpoint",
      description: "Trojan.Win32.Generic found on workstation WS-001",
      severity: "Critical",
      category: "Malware",
      timestamp: "15 minutes ago", 
      status: "Investigating"
    },
    {
      id: "ALT-003",
      title: "Unusual Network Traffic Pattern",
      description: "High volume data transfer to external IP",
      severity: "Medium",
      category: "Network",
      timestamp: "1 hour ago",
      status: "Active"
    },
    {
      id: "ALT-004",
      title: "Privilege Escalation Attempt",
      description: "User attempted to access admin resources",
      severity: "High",
      category: "Access Control",
      timestamp: "2 hours ago",
      status: "Resolved"
    }
  ]

  const alertCategories = [
    { name: "Authentication", count: 15, color: "#3b82f6" },
    { name: "Malware", count: 12, color: "#ef4444" },
    { name: "Network", count: 8, color: "#f59e0b" },
    { name: "Data Loss", count: 6, color: "#8b5cf6" },
    { name: "Access Control", count: 4, color: "#06b6d4" },
    { name: "Compliance", count: 2, color: "#22c55e" },
  ]

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#111827", mb: 1 }}>
          Security Alerts
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          Monitor and manage security alerts across your infrastructure
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3, mb: 4 }}>
        {alertStats.map((item, index) => (
          <Card key={index} sx={{ height: "100%" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                {index === 0 && <Notifications sx={{ color: item.color, mr: 1 }} />}
                {index === 1 && <CheckCircle sx={{ color: item.color, mr: 1 }} />}
                {index === 2 && <Warning sx={{ color: item.color, mr: 1 }} />}
                {index === 3 && <Security sx={{ color: item.color, mr: 1 }} />}
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {item.count}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "#6b7280", mb: 1 }}>
                {item.title}
              </Typography>
              <Chip 
                label={item.priority} 
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
        {/* Recent Alerts */}
        <Box>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Recent Security Alerts
              </Typography>
              {recentAlerts.map((alert, index) => (
                <Box key={index} sx={{ 
                  p: 2,
                  border: "1px solid #e5e7eb",
                  borderRadius: 1,
                  mb: 2,
                  "&:last-child": { mb: 0 }
                }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {alert.id} - {alert.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#6b7280", mb: 1 }}>
                        {alert.description}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                        Category: {alert.category} • {alert.timestamp}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 1 }}>
                      <Chip 
                        label={alert.severity}
                        size="small"
                        sx={{
                          bgcolor: alert.severity === "Critical" ? "#ef4444" : 
                                   alert.severity === "High" ? "#f59e0b" : "#22c55e",
                          color: "white",
                          fontSize: "10px"
                        }}
                      />
                      <Chip 
                        label={alert.status}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: "10px" }}
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Box>

        {/* Alert Categories */}
        <Box>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Alert Categories
              </Typography>
              <List>
                {alertCategories.map((category, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: category.color, mr: 2 }}>
                      {category.count}
                    </Avatar>
                    <ListItemText
                      primary={category.name}
                      secondary={`${category.count} active alerts`}
                      primaryTypographyProps={{ fontWeight: 500 }}
                      secondaryTypographyProps={{ fontSize: "12px" }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
