import React from "react"
import { 
  Box, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  IconButton 
} from "@mui/material"
import { 
  Download, 
  ViewList, 
  ViewModule, 
  Refresh, 
  MoreVert 
} from "@mui/icons-material"

export function IoCFilters() {
  return (
    <Box sx={{ 
      display: "flex", 
      gap: 2, 
      mb: 3, 
      alignItems: "center",
      flexWrap: "wrap"
    }}>
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel>Countries</InputLabel>
        <Select label="Countries" defaultValue="">
          <MenuItem value="">All Countries</MenuItem>
          <MenuItem value="us">United States</MenuItem>
          <MenuItem value="uk">United Kingdom</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel>Regions</InputLabel>
        <Select label="Regions" defaultValue="">
          <MenuItem value="">All Regions</MenuItem>
          <MenuItem value="na">North America</MenuItem>
          <MenuItem value="eu">Europe</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 150 }}>
        <InputLabel>Ransomware Group</InputLabel>
        <Select label="Ransomware Group" defaultValue="">
          <MenuItem value="">All Groups</MenuItem>
          <MenuItem value="lockbit">LockBit</MenuItem>
          <MenuItem value="conti">Conti</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel>Industries</InputLabel>
        <Select label="Industries" defaultValue="">
          <MenuItem value="">All Industries</MenuItem>
          <MenuItem value="tech">Technology</MenuItem>
          <MenuItem value="finance">Finance</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ ml: "auto", display: "flex", gap: 1 }}>
        <IconButton size="small">
          <Download />
        </IconButton>
        <IconButton size="small">
          <ViewList />
        </IconButton>
        <IconButton size="small">
          <ViewModule />
        </IconButton>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select defaultValue="7d">
            <MenuItem value="7d">Select Duration</MenuItem>
            <MenuItem value="24h">Last 24 Hours</MenuItem>
            <MenuItem value="7d">Last 7 Days</MenuItem>
            <MenuItem value="30d">Last 30 Days</MenuItem>
          </Select>
        </FormControl>
        <IconButton size="small">
          <Refresh />
        </IconButton>
        <IconButton size="small">
          <MoreVert />
        </IconButton>
      </Box>
    </Box>
  )
} 