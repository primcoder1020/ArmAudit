"use client"

import { Security } from "@mui/icons-material"
import { Box, Card, CardContent, Chip, Typography } from "@mui/material"

export default function AttackSurfacePage() {
  const attackSurfaceData = [
    { title: "External Assets", count: 1247, risk: "High", color: "#ef4444" },
    { title: "Open Ports", count: 89, risk: "Medium", color: "#f59e0b" },
    { title: "SSL Certificates", count: 156, risk: "Low", color: "#22c55e" },
    { title: "Subdomains", count: 342, risk: "Medium", color: "#f59e0b" },
  ]

  const recentFindings = [
    { asset: "api.company.com", issue: "Exposed API endpoint", severity: "Critical" },
    { asset: "staging.company.com", issue: "Weak SSL configuration", severity: "High" },
    { asset: "mail.company.com", issue: "Outdated mail server", severity: "Medium" },
    { asset: "dev.company.com", issue: "Development server exposed", severity: "High" },
  ]

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#111827", mb: 1 }}>
          Attack Surface
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          Monitor and analyze your organization's external attack surface
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3, mb: 4 }}>
        {attackSurfaceData.map((item, index) => (
          <Card key={index} sx={{ height: "100%" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Security sx={{ color: item.color, mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {item.count}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "#6b7280", mb: 1 }}>
                {item.title}
              </Typography>
              <Chip
                label={item.risk}
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

      {/* Recent Findings */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
            Recent Security Findings
          </Typography>
          {recentFindings.map((finding, index) => (
            <Box key={index} sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
              borderBottom: index < recentFindings.length - 1 ? "1px solid #e5e7eb" : "none"
            }}>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {finding.asset}
                </Typography>
                <Typography variant="body2" sx={{ color: "#6b7280" }}>
                  {finding.issue}
                </Typography>
              </Box>
              <Chip
                label={finding.severity}
                size="small"
                sx={{
                  bgcolor: finding.severity === "Critical" ? "#ef4444" :
                    finding.severity === "High" ? "#f59e0b" : "#22c55e",
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
