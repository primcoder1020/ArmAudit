"use client"

import React, { useState } from "react"
import { Button, Menu, MenuItem, Box, Typography, Checkbox, TextField, InputAdornment } from "@mui/material"
import { KeyboardArrowDown, Search } from "@mui/icons-material"

interface FilterDropdownProps {
  label: string
  options: string[]
  value?: string | string[]
  onChange?: (value: string | string[]) => void
  icon?: React.ReactNode
  badge?: string
  multiSelect?: boolean
  searchable?: boolean
}

export function FilterDropdown({
  label,
  options,
  value,
  onChange,
  icon,
  badge,
  multiSelect = false,
  searchable = false
}: FilterDropdownProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setSearchTerm("")
  }

  const handleSelect = (option: string) => {
    if (multiSelect) {
      const currentValues = Array.isArray(value) ? value : []
      const newValues = currentValues.includes(option)
        ? currentValues.filter(v => v !== option)
        : [...currentValues, option]
      onChange?.(newValues)
    } else {
      onChange?.(option)
      handleClose()
    }
  }

  const filteredOptions = searchable
    ? options.filter(option => option.toLowerCase().includes(searchTerm.toLowerCase()))
    : options

  const displayValue = multiSelect && Array.isArray(value) && value.length > 0
    ? `${value.length} selected`
    : Array.isArray(value) ? value[0] || label : value || label

  return (
    <Box>
      <Button
        variant="outlined"
        size="small"
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
        startIcon={icon}
        sx={{
          textTransform: "none",
          borderColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : 'grey.300',
          color: "text.primary",
          bgcolor: "background.paper",
          minWidth: 120,
          justifyContent: "space-between",
          "&:hover": {
            backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : 'grey.50',
            borderColor: (theme) => theme.palette.mode === 'dark' ? '#4b5563' : 'grey.400',
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" sx={{ fontSize: "13px" }}>
            {displayValue}
          </Typography>
          {badge && (
            <Box
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                borderRadius: "50%",
                width: 16,
                height: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: 600,
              }}
            >
              {badge}
            </Box>
          )}
        </Box>
      </Button>
      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            minWidth: 200,
            maxHeight: 300,
            boxShadow: (theme) => theme.palette.mode === 'dark'
              ? "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.2)"
              : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'}`,
            bgcolor: 'background.paper',
          },
        }}
      >
        {searchable && (
          <Box sx={{ p: 1, borderBottom: 1, borderColor: "divider" }}>
            <TextField
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ fontSize: 16, color: "text.secondary" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  fontSize: "13px",
                },
              }}
            />
          </Box>
        )}
        {filteredOptions.map((option) => (
          <MenuItem
            key={option}
            onClick={() => handleSelect(option)}
            sx={{
              fontSize: "13px",
              py: 1,
              "&:hover": {
                backgroundColor: "grey.50",
              },
            }}
          >
            {multiSelect && (
              <Checkbox
                checked={Array.isArray(value) ? value.includes(option) : false}
                size="small"
                sx={{ mr: 1 }}
              />
            )}
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
