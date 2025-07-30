"use client"

import React, { useState } from "react"
import {
  Button,
  Menu,
  MenuItem,
  Box,
  Typography,
  Checkbox,
  TextField,
  InputAdornment,
  Divider,
} from "@mui/material"
import { KeyboardArrowDown, Search } from "@mui/icons-material"

interface CountryDropdownProps {
  label: string
  options: string[]
  value: string[]
  onChange: (value: string[]) => void
  badge?: number
}

export function CountryDropdown({ label, options, value, onChange, badge }: CountryDropdownProps) {
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
    const newValues = value.includes(option)
      ? value.filter(v => v !== option)
      : [...value, option]
    onChange(newValues)
  }

  const filteredOptions = options.filter(option => 
    option.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Box>
      <Button
        variant="outlined"
        size="small"
        onClick={handleClick}
        sx={{
          textTransform: "none",
          borderColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : 'grey.300',
          color: "text.primary",
          bgcolor: "background.paper",
          minWidth: 140,
          height: 32,
          fontSize: "13px",
          justifyContent: "space-between",
          "&:hover": {
            backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : 'grey.50',
            borderColor: (theme) => theme.palette.mode === 'dark' ? '#4b5563' : 'grey.400',
          },
        }}
        endIcon={
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            {badge && badge > 0 && (
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
            <KeyboardArrowDown sx={{ fontSize: 16 }} />
          </Box>
        }
      >
        {label}
      </Button>
      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 250,
            maxHeight: 400,
            boxShadow: (theme) => theme.palette.mode === 'dark'
              ? "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.2)"
              : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'}`,
            borderRadius: 1,
            bgcolor: 'background.paper',
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        {/* Search Box */}
        <Box sx={{ p: 2, pb: 1 }}>
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
                height: 32,
              },
            }}
          />
        </Box>
        
        <Divider />
        
        {/* Country List */}
        <Box sx={{ maxHeight: 300, overflow: "auto" }}>
          {filteredOptions.map((option) => (
            <MenuItem
              key={option}
              onClick={() => handleSelect(option)}
              sx={{
                fontSize: "13px",
                py: 1,
                px: 2,
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : 'grey.50',
                },
              }}
            >
              <Checkbox
                checked={value.includes(option)}
                size="small"
                sx={{ 
                  mr: 1,
                  p: 0,
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                  },
                }}
              />
              <Typography variant="body2" sx={{ fontSize: "13px" }}>
                {option}
              </Typography>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  )
}
