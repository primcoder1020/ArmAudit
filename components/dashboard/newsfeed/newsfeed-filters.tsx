"use client"

import React from "react"
import { Box, Button, Chip } from "@mui/material"
import { ExpandMore } from "@mui/icons-material"

const filterOptions = [
  { label: "Source", count: "0" },
  { label: "Industries", count: "0" },
  { label: "Countries", count: "1" },
  { label: "Regions", count: "0" },
  { label: "Threat Actors", count: "0" },
  { label: "Malware Families", count: "0" },
  { label: "Tags", count: "0" },
  { label: "Techniques", count: "0" },
]

export function NewsfeedFilters() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3, overflowX: "auto" }}>
      {filterOptions.map((option, index) => (
        <Button
          key={index}
          variant="outlined"
          size="small"
          endIcon={<ExpandMore />}
          sx={{
            bgcolor: "transparent",
            whiteSpace: "nowrap",
            color: "text.secondary",
            borderColor: "grey.300",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            gap: 1,
            "&:hover": {
              backgroundColor: "grey.50",
            },
          }}
        >
          {option.label}
          <Chip
            label={option.count}
            size="small"
            sx={{
              bgcolor: option.count === "1" ? "secondary.main" : "grey.200",
              color: option.count === "1" ? "white" : "text.primary",
              height: 20,
              fontSize: "0.75rem",
              fontWeight: 500,
            }}
          />
        </Button>
      ))}
    </Box>
  )
}
