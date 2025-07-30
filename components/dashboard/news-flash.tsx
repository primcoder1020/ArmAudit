"use client"

import React, { useState } from "react"
import { Box, Typography, IconButton, Button } from "@mui/material"
import { Info, Refresh, MoreHoriz, Search, KeyboardArrowDown } from "@mui/icons-material"
import { FilterDropdown } from "@/components/ui/filter-dropdown"
import { CountryDropdown } from "@/components/ui/country-dropdown"
import { NewsTable } from "./news-flash/news-table"

const NewsFlash = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>(["India"])
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [duration, setDuration] = useState("Select Duration")

  const countryOptions = [
    "India", "Afghanistan", "Aland Islands", "Albania", "Algeria", "United States", "United Kingdom", "China", "Russia"
  ]

  const regionOptions = [
    "Asia & Pacific (APAC)", "Europe & UK", "North America", "South America", "Middle East", "Africa"
  ]

  const industryOptions = [
    "Technology", "Healthcare", "Finance", "Retail", "Manufacturing", "Government", "Education"
  ]

  const tagOptions = [
    "Ransomware", "Data Breach", "Malware", "Phishing", "APT", "Vulnerability", "Insider Threat"
  ]

  const durationOptions = [
    "Last 24 Hours", "Last 7 Days", "Last 30 Days", "Last 3 Months", "Last 6 Months", "Last Year"
  ]

  const handleRemoveCountry = (country: string) => {
    setSelectedCountries(prev => prev.filter(c => c !== country))
  }

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "text.primary" }}>
            Armaudit NewsFlash
          </Typography>
          <Info sx={{ fontSize: 16, color: "text.secondary" }} />
        </Box>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Select your fiat currency and your favourite payment method
        </Typography>
      </Box>

      {/* Filter Controls */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              textTransform: "none",
              borderColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : 'grey.300',
              color: "text.primary",
              bgcolor: "background.paper",
              minWidth: 140,
              height: 32,
              fontSize: "13px",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : 'grey.50',
                borderColor: (theme) => theme.palette.mode === 'dark' ? '#4b5563' : 'grey.400',
              },
            }}
          >
            Select Duration
          </Button>
          {selectedCountries.map((country) => (
            <Button
              key={country}
              variant="outlined"
              size="small"
              onClick={() => handleRemoveCountry(country)}
              sx={{
                textTransform: "none",
                borderColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : 'grey.300',
                color: "text.primary",
                bgcolor: "background.paper",
                minWidth: 80,
                height: 32,
                fontSize: "13px",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : 'grey.50',
                  borderColor: (theme) => theme.palette.mode === 'dark' ? '#4b5563' : 'grey.400',
                },
              }}
            >
              {country} ×
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton size="small" sx={{ color: "text.secondary" }}>
            <Search />
          </IconButton>
          <IconButton size="small" sx={{ color: "text.secondary" }}>
            <Refresh />
          </IconButton>
          <IconButton size="small" sx={{ color: "text.secondary" }}>
            <MoreHoriz />
          </IconButton>
        </Box>
      </Box>

      {/* Filter Dropdowns Row */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        <CountryDropdown
          label="Select Countries"
          options={countryOptions}
          value={selectedCountries}
          onChange={setSelectedCountries}
          badge={selectedCountries.length}
        />

        <Button
          variant="outlined"
          size="small"
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
              {selectedRegions.length > 0 && (
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
                  {selectedRegions.length}
                </Box>
              )}
              <KeyboardArrowDown sx={{ fontSize: 16 }} />
            </Box>
          }
        >
          Select Regions
        </Button>

        <Button
          variant="outlined"
          size="small"
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
              {selectedIndustries.length > 0 && (
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
                  {selectedIndustries.length}
                </Box>
              )}
              <KeyboardArrowDown sx={{ fontSize: 16 }} />
            </Box>
          }
        >
          Select Industries
        </Button>

        <Button
          variant="outlined"
          size="small"
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
              {selectedTags.length > 0 && (
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
                  {selectedTags.length}
                </Box>
              )}
              <KeyboardArrowDown sx={{ fontSize: 16 }} />
            </Box>
          }
        >
          Select Tags
        </Button>
      </Box>

      <NewsTable
        filters={{
          countries: selectedCountries,
          regions: selectedRegions,
          industries: selectedIndustries,
          tags: selectedTags,
          duration
        }}
      />
    </Box>
  )
}

export default NewsFlash
