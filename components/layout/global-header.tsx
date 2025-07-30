"use client"

import React from "react"
import { useTheme } from "next-themes"
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  InputAdornment,
  IconButton,
  Chip
} from "@mui/material"
import {
  Search,
  Add,
  Notifications,
  Settings as SettingsIcon,
  DarkMode,
  LightMode,
  Help
} from "@mui/icons-material"
import Image from "next/image"

export function GlobalHeader() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Prevent hydration mismatch by showing a default state until mounted
  const currentTheme = mounted ? resolvedTheme : 'light'

  return (
    <Box sx={{
      height: 64,
      bgcolor: "background.paper",
      borderBottom: "1px solid",
      borderColor: "grey.200",
      px: 3,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      {/* Left Section - Logo */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ 
            width: 24, 
            height: 24, 
            borderRadius: "4px",
            display: "flex",
            alignItems: "center"
          }}>
            <Image src="/armup-logo-web 1.png" alt="ArmAudit" width={24} height={24} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
            ArmAudit
          </Typography>
        </Box>
      </Box>

      {/* Center Section - Search and Add Keyword */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, flex: 1, maxWidth: 600, mx: 4 }}>
        <TextField
          placeholder="Search"
          size="small"
          sx={{ 
            flex: 1,
            "& .MuiOutlinedInput-root": {
              bgcolor: "grey.50",
              borderRadius: "8px",
              "& fieldset": {
                borderColor: "grey.200",
              },
              "&:hover fieldset": {
                borderColor: "grey.300",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
              },
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "text.secondary", fontSize: 18 }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Chip 
                  label="⌘ K" 
                  size="small" 
                  sx={{
                    bgcolor: "grey.200",
                    color: "text.secondary",
                    fontSize: "11px",
                    height: 20
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
        
        <Button
          variant="contained"
          size="small"
          startIcon={<Add />}
          sx={{
            bgcolor: "#22c55e",
            color: "white",
            textTransform: "none",
            fontWeight: 500,
            borderRadius: "8px",
            px: 2,
            "&:hover": {
              bgcolor: "#16a34a",
            },
          }}
        >
          Add keyword
        </Button>
      </Box>

      {/* Right Section - User Actions */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton size="small" sx={{ color: "text.secondary" }}>
          <Notifications />
        </IconButton>

        <IconButton size="small" sx={{ color: "text.secondary" }}>
          <Help />
        </IconButton>
        
        <IconButton
          size="small"
          sx={{ color: "text.secondary" }}
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>

        <IconButton size="small" sx={{ color: "text.secondary" }}>
          <SettingsIcon />
        </IconButton>

        {/* User Profile */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, ml: 2 }}>
          <Avatar 
            sx={{ 
              width: 32, 
              height: 32, 
              bgcolor: "#22c55e",
              fontSize: "14px",
              fontWeight: "bold"
            }}
          >
            JS
          </Avatar>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 500, color: "text.primary", fontSize: "13px" }}>
              Jacob Stanly
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "11px" }}>
              jacobstanly@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
