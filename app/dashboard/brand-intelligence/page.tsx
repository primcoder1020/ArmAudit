"use client"

import React from "react"
import { Box, Typography, Card, CardContent, Grid, Chip, Avatar } from "@mui/material"
import { Visibility, TrendingUp, Warning, Public } from "@mui/icons-material"

export default function BrandIntelligencePage() {
  const brandStats = [
    { title: "Brand Mentions", count: 2847, change: "+12%", color: "#3b82f6" },
    { title: "Threat Detections", count: 23, change: "+5%", color: "#ef4444" },
    { title: "Impersonation Attempts", count: 8, change: "-2%", color: "#f59e0b" },
    { title: "Domain Squatting", count: 15, change: "+3%", color: "#8b5cf6" },
  ]

  const brandThreats = [
    {
      type: "Phishing Site",
      domain: "company-login.net",
      similarity: 94.2,
      status: "Active",
      detected: "2 hours ago"
    },
    {
      type: "Social Media Impersonation", 
      platform: "Twitter",
      account: "@company_official_",
      similarity: 87.6,
      status: "Reported",
      detected: "5 hours ago"
    },
    {
      type: "Typosquatting",
      domain: "compnay.com",
      similarity: 91.3,
      status: "Monitoring",
      detected: "1 day ago"
    },
    {
      type: "Brand Abuse",
      platform: "Facebook",
      content: "Fake promotion campaign",
      similarity: 78.9,
      status: "Takedown Requested",
      detected: "2 days ago"
    }
  ]

  const socialPlatforms = [
    { name: "Twitter", mentions: 1247, sentiment: "Positive", threats: 3 },
    { name: "Facebook", mentions: 892, sentiment: "Neutral", threats: 5 },
    { name: "LinkedIn", mentions: 456, sentiment: "Positive", threats: 1 },
    { name: "Instagram", mentions: 234, sentiment: "Positive", threats: 2 },
  ]

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#111827", mb: 1 }}>
          Brand Intelligence
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          Monitor brand reputation and detect impersonation threats across digital channels
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {brandStats.map((item, index) => (
          <Grid xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: item.color }}>
                    {item.count.toLocaleString()}
                  </Typography>
                  <Chip 
                    label={item.change} 
                    size="small" 
                    sx={{ 
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

      <Grid container spacing={3}>
        {/* Brand Threats */}
        <Grid xs={12} md={8}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Active Brand Threats
              </Typography>
              {brandThreats.map((threat, index) => (
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
                        {threat.type}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#6b7280" }}>
                        {threat.domain || threat.platform}: {threat.account || threat.content || threat.domain}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                        Similarity: {threat.similarity}% • Detected {threat.detected}
                      </Typography>
                    </Box>
                    <Chip 
                      label={threat.status}
                      size="small"
                      sx={{
                        bgcolor: threat.status === "Active" ? "#ef4444" : 
                                 threat.status === "Reported" ? "#f59e0b" : "#22c55e",
                        color: "white",
                        fontSize: "10px"
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Social Media Monitoring */}
        <Grid xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Social Media Monitoring
              </Typography>
              {socialPlatforms.map((platform, index) => (
                <Box key={index} sx={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  py: 2,
                  borderBottom: index < socialPlatforms.length - 1 ? "1px solid #e5e7eb" : "none"
                }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar sx={{ width: 24, height: 24, bgcolor: "#e5e7eb", fontSize: "12px" }}>
                      {platform.name[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {platform.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#6b7280" }}>
                        {platform.mentions} mentions • {platform.threats} threats
                      </Typography>
                    </Box>
                  </Box>
                  <Chip 
                    label={platform.sentiment}
                    size="small"
                    sx={{
                      bgcolor: platform.sentiment === "Positive" ? "#22c55e" : 
                               platform.sentiment === "Neutral" ? "#6b7280" : "#ef4444",
                      color: "white",
                      fontSize: "10px"
                    }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
