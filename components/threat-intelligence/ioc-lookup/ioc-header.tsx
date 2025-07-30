import React from "react"
import { Box, Typography } from "@mui/material"

export function IoCHeader() {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "text.primary", mb: 1 }}>
        IoC Lookup
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        Select your fiat currency and your favourite payment method
      </Typography>
    </Box>
  )
} 