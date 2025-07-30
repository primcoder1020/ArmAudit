"use client"

import React from "react"
import { Box, TextField, InputAdornment, IconButton } from "@mui/material"
import { Search, Download, Refresh, MoreHoriz } from "@mui/icons-material"
import { PageHeader } from "@/components/layout/page-header"

export function NewsfeedHeader() {
  const headerActions = [
    { label: "Select Duration" },
    { icon: <Download /> },
    { icon: <Refresh /> },
    { icon: <MoreHoriz /> },
  ]

  return (
    <PageHeader
      title="Armaudit Newsfeed"
      subtitle="Select your fiat currency and your favourite payment method"
      actions={headerActions}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2 }}>
        <TextField
          placeholder="Search for IP=192.168.1.1 or Domain..."
          size="small"
          sx={{ width: 320 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "text.secondary", fontSize: 16 }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </PageHeader>
  )
}
