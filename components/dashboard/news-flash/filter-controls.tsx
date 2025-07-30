"use client"

import React from "react"
import { Box, Button, Chip } from "@mui/material"
import { KeyboardArrowDown } from "@mui/icons-material"

const filterOptions = [
  { label: "Select Countries", count: "1", active: true },
  { label: "Select Regions", count: "0", active: false },
  { label: "Select Industries", count: "0", active: false },
  { label: "Select Tags", count: "0", active: false },
]

export function FilterControls() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
      {filterOptions.map((option, index) => (
        <Button
          key={index}
          variant="outlined"
          size="small"
          endIcon={<KeyboardArrowDown />}
          sx={{
            textTransform: "none",
            borderColor: "grey.300",
            color: "text.primary",
            bgcolor: "transparent",
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
              bgcolor: option.active ? "secondary.main" : "grey.200",
              color: option.active ? "white" : "text.primary",
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
