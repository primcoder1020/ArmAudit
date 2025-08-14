import React from "react"
import { Box, Typography, Button, FormControl, Select, MenuItem } from "@mui/material"

export function IoCPagination() {
  return (
    <Box sx={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      mt: 2 
    }}>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        1-10 of 1,84,934 Records
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <Select defaultValue={4}>
            <MenuItem value={4}>Item per page 4</MenuItem>
            <MenuItem value={10}>10 per page</MenuItem>
            <MenuItem value={25}>25 per page</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button size="small" variant="outlined">&lt;</Button>
          <Typography variant="body2">1/20</Typography>
          <Button size="small" variant="outlined">&gt;</Button>
        </Box>
      </Box>
    </Box>
  )
} 