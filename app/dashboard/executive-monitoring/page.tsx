"use client"

import React from "react"
import { Box, Typography, Card, CardContent, Grid, Chip, Avatar, LinearProgress } from "@mui/material"
import { Person, TrendingUp, Security, Visibility } from "@mui/icons-material"

export default function ExecutiveMonitoringPage() {
  const executiveStats = [
    { title: "Executives Monitored", count: 12, status: "Active", color: "#3b82f6" },
    { title: "Threat Mentions", count: 8, status: "High", color: "#ef4444" },
    { title: "Social Media Alerts", count: 23, status: "Medium", color: "#f59e0b" },
    { title: "Reputation Score", count: 94, status: "Excellent", color: "#22c55e" },
  ]

  const executives = [
    {
      name: "John Smith",
      title: "CEO",
      riskLevel: "Low",
      mentions: 45,
      sentiment: "Positive",
      lastAlert: "2 days ago",
      avatar: "JS"
    },
    {
      name: "Sarah Johnson", 
      title: "CTO",
      riskLevel: "Medium",
      mentions: 23,
      sentiment: "Neutral",
      lastAlert: "5 hours ago",
      avatar: "SJ"
    },
    {
      name: "Michael Brown",
      title: "CFO", 
      riskLevel: "Low",
      mentions: 18,
      sentiment: "Positive",
      lastAlert: "1 week ago",
      avatar: "MB"
    },
    {
      name: "Emily Davis",
      title: "CISO",
      riskLevel: "High",
      mentions: 67,
      sentiment: "Mixed",
      lastAlert: "1 hour ago",
      avatar: "ED"
    }
  ]

  const recentAlerts = [
    {
      executive: "Emily Davis",
      type: "Social Media Mention",
      platform: "LinkedIn",
      content: "Negative comment about security practices",
      severity: "Medium",
      timestamp: "1 hour ago"
    },
    {
      executive: "Sarah Johnson",
      type: "News Article",
      platform: "TechCrunch", 
      content: "Interview about company technology strategy",
      severity: "Low",
      timestamp: "5 hours ago"
    },
    {
      executive: "John Smith",
      type: "Impersonation Attempt",
      platform: "Twitter",
      content: "Fake account using CEO's name and photo",
      severity: "High",
      timestamp: "2 days ago"
    }
  ]

  const monitoringChannels = [
    { name: "Social Media", coverage: 95, alerts: 15 },
    { name: "News & Media", coverage: 87, alerts: 8 },
    { name: "Dark Web", coverage: 78, alerts: 3 },
    { name: "Forums & Blogs", coverage: 92, alerts: 12 },
  ]

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#111827", mb: 1 }}>
          Executive Monitoring
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          Monitor executive reputation and detect threats targeting leadership
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {executiveStats.map((item, index) => (
          <Grid xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {index === 0 && <Person sx={{ color: item.color, mr: 1 }} />}
                  {index === 1 && <Security sx={{ color: item.color, mr: 1 }} />}
                  {index === 2 && <Visibility sx={{ color: item.color, mr: 1 }} />}
                  {index === 3 && <TrendingUp sx={{ color: item.color, mr: 1 }} />}
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.count}{index === 3 ? "%" : ""}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#6b7280", mb: 1 }}>
                  {item.title}
                </Typography>
                <Chip 
                  label={item.status} 
                  size="small" 
                  sx={{ 
                    bgcolor: item.color, 
                    color: "white",
                    fontSize: "11px"
                  }} 
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Executive Profiles */}
        <Grid xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Executive Risk Profiles
              </Typography>
              {executives.map((exec, index) => (
                <Box key={index} sx={{ 
                  display: "flex", 
                  alignItems: "center",
                  p: 2,
                  border: "1px solid #e5e7eb",
                  borderRadius: 1,
                  mb: 2,
                  "&:last-child": { mb: 0 }
                }}>
                  <Avatar sx={{ width: 40, height: 40, bgcolor: "#3b82f6", mr: 2 }}>
                    {exec.avatar}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {exec.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      {exec.title} • {exec.mentions} mentions • Last alert: {exec.lastAlert}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 1 }}>
                    <Chip 
                      label={exec.riskLevel}
                      size="small"
                      sx={{
                        bgcolor: exec.riskLevel === "High" ? "#ef4444" : 
                                 exec.riskLevel === "Medium" ? "#f59e0b" : "#22c55e",
                        color: "white",
                        fontSize: "10px"
                      }}
                    />
                    <Chip 
                      label={exec.sentiment}
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: "10px" }}
                    />
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Alerts & Monitoring Coverage */}
        <Grid xs={12} md={6}>
          <Grid container spacing={3}>
            {/* Recent Alerts */}
            <Grid xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                    Recent Executive Alerts
                  </Typography>
                  {recentAlerts.map((alert, index) => (
                    <Box key={index} sx={{ 
                      p: 2,
                      border: "1px solid #e5e7eb",
                      borderRadius: 1,
                      mb: 2,
                      "&:last-child": { mb: 0 }
                    }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {alert.executive} - {alert.type}
                          </Typography>
                          <Typography variant="caption" sx={{ color: "#6b7280" }}>
                            {alert.platform} • {alert.timestamp}
                          </Typography>
                        </Box>
                        <Chip 
                          label={alert.severity}
                          size="small"
                          sx={{
                            bgcolor: alert.severity === "High" ? "#ef4444" : 
                                     alert.severity === "Medium" ? "#f59e0b" : "#22c55e",
                            color: "white",
                            fontSize: "10px"
                          }}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ color: "#6b7280", fontSize: "12px" }}>
                        {alert.content}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>

            {/* Monitoring Coverage */}
            <Grid xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                    Monitoring Coverage
                  </Typography>
                  {monitoringChannels.map((channel, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {channel.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#6b7280" }}>
                          {channel.coverage}% • {channel.alerts} alerts
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={channel.coverage} 
                        sx={{ 
                          height: 6, 
                          borderRadius: 3,
                          bgcolor: "#e5e7eb",
                          "& .MuiLinearProgress-bar": {
                            bgcolor: "#3b82f6"
                          }
                        }} 
                      />
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
