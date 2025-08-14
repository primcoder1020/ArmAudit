"use client"

import React from "react"
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Switch, 
  FormControlLabel,
  Button,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Chip
} from "@mui/material"
import { Settings, Security, Notifications, Person } from "@mui/icons-material"

export default function SettingsPage() {
  const settingsCategories = [
    {
      title: "General Settings",
      icon: <Settings sx={{ color: "#3b82f6" }} />,
      settings: [
        { name: "Dark Mode", description: "Enable dark theme", enabled: false },
        { name: "Auto Refresh", description: "Automatically refresh dashboards", enabled: true },
        { name: "Sound Notifications", description: "Play sounds for alerts", enabled: true },
        { name: "Email Digest", description: "Daily security summary email", enabled: true },
      ]
    },
    {
      title: "Security Settings", 
      icon: <Security sx={{ color: "#ef4444" }} />,
      settings: [
        { name: "Two-Factor Authentication", description: "Require 2FA for login", enabled: true },
        { name: "Session Timeout", description: "Auto logout after inactivity", enabled: true },
        { name: "IP Whitelist", description: "Restrict access by IP address", enabled: false },
        { name: "API Key Rotation", description: "Automatically rotate API keys", enabled: true },
      ]
    },
    {
      title: "Alert Settings",
      icon: <Notifications sx={{ color: "#f59e0b" }} />,
      settings: [
        { name: "Critical Alerts", description: "Immediate notifications for critical threats", enabled: true },
        { name: "Threat Intelligence", description: "New threat intelligence alerts", enabled: true },
        { name: "Vulnerability Alerts", description: "New CVE and vulnerability notifications", enabled: false },
        { name: "Executive Monitoring", description: "Executive mention and threat alerts", enabled: true },
      ]
    }
  ]

  const apiKeys = [
    { name: "Production API", key: "ak_prod_****1234", created: "2024-01-15", lastUsed: "2 hours ago", status: "Active" },
    { name: "Development API", key: "ak_dev_****5678", created: "2024-02-01", lastUsed: "1 day ago", status: "Active" },
    { name: "Integration API", key: "ak_int_****9012", created: "2024-01-20", lastUsed: "Never", status: "Inactive" },
  ]

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#111827", mb: 1 }}>
          Settings
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          Configure your security dashboard preferences and integrations
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3 }}>
        {/* Settings Categories */}
        <Box>
          {settingsCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} sx={{ mb: 3 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  {category.icon}
                  <Typography variant="h6" sx={{ fontWeight: 600, ml: 1 }}>
                    {category.title}
                  </Typography>
                </Box>
                <List>
                  {category.settings.map((setting, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemText
                        primary={setting.name}
                        secondary={setting.description}
                        primaryTypographyProps={{ fontWeight: 500 }}
                        secondaryTypographyProps={{ fontSize: "13px", color: "#6b7280" }}
                      />
                      <ListItemSecondaryAction>
                        <Switch
                          edge="end"
                          checked={setting.enabled}
                          color="primary"
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Profile & API Keys */}
        <Box>
          {/* User Profile */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Person sx={{ color: "#22c55e", mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  User Profile
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  label="Full Name"
                  defaultValue="Jacob Stanly"
                  size="small"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Email"
                  defaultValue="jacobstanly@gmail.com"
                  size="small"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Organization"
                  defaultValue="ArmAudit"
                  size="small"
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </Box>
              <Button variant="contained" size="small" fullWidth>
                Update Profile
              </Button>
            </CardContent>
          </Card>

          {/* API Keys */}
          <Card>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  API Keys
                </Typography>
                <Button variant="outlined" size="small">
                  Generate New
                </Button>
              </Box>
              {apiKeys.map((key, index) => (
                <Box key={index} sx={{ 
                  p: 2,
                  border: "1px solid #e5e7eb",
                  borderRadius: 1,
                  mb: 2,
                  "&:last-child": { mb: 0 }
                }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {key.name}
                    </Typography>
                    <Chip 
                      label={key.status}
                      size="small"
                      sx={{
                        bgcolor: key.status === "Active" ? "#22c55e" : "#6b7280",
                        color: "white",
                        fontSize: "10px"
                      }}
                    />
                  </Box>
                  <Typography variant="caption" sx={{ color: "#6b7280", fontFamily: "monospace" }}>
                    {key.key}
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="caption" sx={{ color: "#9ca3af", display: "block" }}>
                      Created: {key.created}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#9ca3af" }}>
                      Last used: {key.lastUsed}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
