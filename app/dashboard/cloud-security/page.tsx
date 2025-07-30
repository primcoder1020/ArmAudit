"use client"

import React from "react"
import { Box, Typography, Card, CardContent, Grid, Chip, LinearProgress } from "@mui/material"
import { Cloud, Security, Warning, CheckCircle } from "@mui/icons-material"

export default function CloudSecurityPage() {
  const cloudStats = [
    { title: "Cloud Assets", count: 1247, compliance: 94.2, color: "#3b82f6" },
    { title: "Vulnerabilities", count: 23, compliance: 78.5, color: "#ef4444" },
    { title: "Compliant Resources", count: 1156, compliance: 98.7, color: "#22c55e" },
    { title: "Policy Violations", count: 8, compliance: 85.3, color: "#f59e0b" },
  ]

  const cloudProviders = [
    { name: "AWS", resources: 567, status: "Healthy", compliance: 96.2 },
    { name: "Azure", resources: 423, status: "Warning", compliance: 89.1 },
    { name: "GCP", resources: 257, status: "Healthy", compliance: 97.8 },
  ]

  const securityFindings = [
    { 
      resource: "s3-bucket-prod-data", 
      issue: "Public read access enabled", 
      severity: "Critical",
      provider: "AWS"
    },
    { 
      resource: "vm-web-server-01", 
      issue: "Outdated security patches", 
      severity: "High",
      provider: "Azure"
    },
    { 
      resource: "gke-cluster-staging", 
      issue: "Network policy not configured", 
      severity: "Medium",
      provider: "GCP"
    },
  ]

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#111827", mb: 1 }}>
          Cloud Security
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          Multi-cloud security posture management and compliance monitoring
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {cloudStats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {index === 0 && <Cloud sx={{ color: item.color, mr: 1 }} />}
                  {index === 1 && <Warning sx={{ color: item.color, mr: 1 }} />}
                  {index === 2 && <CheckCircle sx={{ color: item.color, mr: 1 }} />}
                  {index === 3 && <Security sx={{ color: item.color, mr: 1 }} />}
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.count.toLocaleString()}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#6b7280", mb: 2 }}>
                  {item.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={item.compliance} 
                    sx={{ 
                      flex: 1, 
                      height: 6, 
                      borderRadius: 3,
                      bgcolor: "#e5e7eb",
                      "& .MuiLinearProgress-bar": {
                        bgcolor: item.color
                      }
                    }} 
                  />
                  <Typography variant="caption" sx={{ color: "#6b7280" }}>
                    {item.compliance}%
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Cloud Providers */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Cloud Providers
              </Typography>
              {cloudProviders.map((provider, index) => (
                <Box key={index} sx={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  py: 2,
                  borderBottom: index < cloudProviders.length - 1 ? "1px solid #e5e7eb" : "none"
                }}>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {provider.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      {provider.resources} resources • {provider.compliance}% compliant
                    </Typography>
                  </Box>
                  <Chip 
                    label={provider.status}
                    size="small"
                    sx={{
                      bgcolor: provider.status === "Healthy" ? "#22c55e" : "#f59e0b",
                      color: "white"
                    }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Security Findings */}
        <Grid item xs={12} md={8}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Recent Security Findings
              </Typography>
              {securityFindings.map((finding, index) => (
                <Box key={index} sx={{ 
                  p: 2,
                  border: "1px solid #e5e7eb",
                  borderRadius: 1,
                  mb: 2,
                  "&:last-child": { mb: 0 }
                }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {finding.resource}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#6b7280" }}>
                        {finding.issue}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Chip 
                        label={finding.provider}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: "10px" }}
                      />
                      <Chip 
                        label={finding.severity}
                        size="small"
                        sx={{
                          bgcolor: finding.severity === "Critical" ? "#ef4444" : 
                                   finding.severity === "High" ? "#f59e0b" : "#22c55e",
                          color: "white",
                          fontSize: "10px"
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
