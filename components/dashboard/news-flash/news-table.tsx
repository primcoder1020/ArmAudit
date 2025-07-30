"use client"

import React, { useState, useMemo } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TablePagination,
  Drawer,
  Box,
  TextField,
  InputAdornment,
  Checkbox,
  Typography,
} from "@mui/material"
import { Search } from "@mui/icons-material"
import NewsDetail from "../NewsDetail"

interface NewsItem {
  id: number
  date: string
  actor: string
  title: string
  country: string
  region: string
  status: "VIEWED" | "UNVIEWED"
}

interface NewsFilters {
  countries: string[]
  regions: string[]
  industries: string[]
  tags: string[]
  duration: string
}

interface NewsTableProps {
  filters?: NewsFilters
}

const newsData: NewsItem[] = [
  {
    id: 1,
    date: "13 Dec, 2024",
    actor: "Vaibhav",
    title: "Source Code of Bharatiya Janata Party's Mobile Application, Leaked",
    country: "India",
    region: "Asia & Pacific (APAC)",
    status: "UNVIEWED",
  },
  {
    id: 2,
    date: "13 Dec, 2024",
    actor: "Shift",
    title: "Customers Data Stolen from an Indian Jewelry Store, on Sale",
    country: "India",
    region: "Asia & Pacific (APAC)",
    status: "UNVIEWED",
  },
  {
    id: 3,
    date: "13 Dec, 2024",
    actor: "NanC",
    title: "Data Allegedly Pertaining to 'UKSoccershop.com', Leaked",
    country: "United Kingdom, India",
    region: "Europe & UK, Asia & Pacific (APAC)",
    status: "UNVIEWED",
  },
  {
    id: 4,
    date: "13 Dec, 2024",
    actor: "Shift",
    title: "Akira Ransomware Group Claims Breach of Indian Pharmaceutical Giant Cipla",
    country: "India",
    region: "Asia & Pacific (APAC)",
    status: "VIEWED",
  },
  {
    id: 5,
    date: "13 Dec, 2024",
    actor: "billy100",
    title: "940k Pii Records Stolen from an Indian Jewelry Retailer, Leaked",
    country: "India",
    region: "Asia & Pacific (APAC)",
    status: "UNVIEWED",
  },
  {
    id: 6,
    date: "13 Dec, 2024",
    actor: "Akira",
    title: "Source Code of Bharatiya Janata Party's Mobile Application, Leaked",
    country: "India",
    region: "Asia & Pacific (APAC)",
    status: "VIEWED",
  },
  {
    id: 7,
    date: "13 Dec, 2024",
    actor: "Akira",
    title: "940k Pii Records Stolen from an Indian Jewelry Retailer, Leaked",
    country: "India",
    region: "Asia & Pacific (APAC)",
    status: "UNVIEWED",
  },
  {
    id: 8,
    date: "13 Dec, 2024",
    actor: "gwap",
    title: "Source Code of Bharatiya Janata Party's Mobile Application, Leaked",
    country: "India",
    region: "Asia & Pacific (APAC)",
    status: "UNVIEWED",
  },
]

export function NewsTable({ filters }: NewsTableProps) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(4)
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)

  // Filter and search logic
  const filteredData = useMemo(() => {
    let filtered = newsData

    // Apply country filter
    if (filters?.countries && filters.countries.length > 0) {
      filtered = filtered.filter(item =>
        filters.countries.some(country => item.country.includes(country))
      )
    }

    // Apply region filter
    if (filters?.regions && filters.regions.length > 0) {
      filtered = filtered.filter(item =>
        filters.regions.some(region => item.region.includes(region))
      )
    }

    // Apply search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.actor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.country.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    return filtered
  }, [filters, searchTerm])

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleRowClick = (item: NewsItem) => {
    setSelectedNews(item)
  }

  return (
    <>
      {/* Search Bar */}
      <Box sx={{ mb: 2 }}>
        <TextField
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ fontSize: 16, color: "text.secondary" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: 300,
            "& .MuiOutlinedInput-root": {
              backgroundColor: "background.paper",
            },
          }}
        />
      </Box>

      <TableContainer component={Paper} sx={{
        boxShadow: (theme) => theme.palette.mode === 'dark'
          ? "0 1px 3px 0 rgb(0 0 0 / 0.3)"
          : "0 1px 3px 0 rgb(0 0 0 / 0.1)",
        borderRadius: 1,
        bgcolor: 'background.paper',
        border: (theme) => theme.palette.mode === 'dark'
          ? `1px solid ${theme.palette.divider}`
          : 'none',
      }}>
        <Table>
          <TableHead>
            <TableRow sx={{
              backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1f2937' : '#f9fafb'
            }}>
              <TableCell sx={{
                fontWeight: 600,
                color: "text.primary",
                fontSize: "13px",
                py: 2,
                borderBottom: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'}`
              }}>
                Date
              </TableCell>
              <TableCell sx={{
                fontWeight: 600,
                color: "text.primary",
                fontSize: "13px",
                py: 2,
                borderBottom: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'}`
              }}>
                Threat Actor
              </TableCell>
              <TableCell sx={{
                fontWeight: 600,
                color: "text.primary",
                fontSize: "13px",
                py: 2,
                borderBottom: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'}`
              }}>
                Title
              </TableCell>
              <TableCell sx={{
                fontWeight: 600,
                color: "text.primary",
                fontSize: "13px",
                py: 2,
                borderBottom: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'}`
              }}>
                Country
              </TableCell>
              <TableCell sx={{
                fontWeight: 600,
                color: "text.primary",
                fontSize: "13px",
                py: 2,
                borderBottom: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'}`
              }}>
                Region
              </TableCell>
              <TableCell sx={{
                fontWeight: 600,
                color: "text.primary",
                fontSize: "13px",
                py: 2,
                borderBottom: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'}`
              }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
              <TableRow
                key={item.id}
                hover
                onClick={() => handleRowClick(item)}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : '#f9fafb',
                  },
                  borderBottom: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'}`,
                }}
              >
                <TableCell sx={{
                  fontSize: "13px",
                  color: "text.primary",
                  py: 2,
                  borderBottom: "none"
                }}>
                  {item.date}
                </TableCell>
                <TableCell sx={{
                  fontSize: "13px",
                  color: "text.primary",
                  py: 2,
                  borderBottom: "none"
                }}>
                  {item.actor}
                </TableCell>
                <TableCell sx={{
                  maxWidth: 400,
                  fontSize: "13px",
                  color: "text.primary",
                  py: 2,
                  borderBottom: "none"
                }}>
                  {item.title}
                </TableCell>
                <TableCell sx={{
                  fontSize: "13px",
                  color: "text.primary",
                  py: 2,
                  borderBottom: "none"
                }}>
                  {item.country}
                </TableCell>
                <TableCell sx={{
                  fontSize: "13px",
                  color: "text.primary",
                  py: 2,
                  borderBottom: "none"
                }}>
                  {item.region}
                </TableCell>
                <TableCell sx={{
                  py: 2,
                  borderBottom: "none"
                }}>
                  <Chip
                    label={item.status}
                    size="small"
                    sx={{
                      bgcolor: item.status === "VIEWED" ? "#4ade80" : (theme) => theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb',
                      color: item.status === "VIEWED" ? "white" : (theme) => theme.palette.mode === 'dark' ? '#d1d5db' : '#6b7280',
                      fontWeight: 600,
                      fontSize: "11px",
                      height: 24,
                      borderRadius: "4px",
                      "& .MuiChip-label": {
                        px: 1,
                      },
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[4, 10, 20]}
          component="div"
          count={184934}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Item per page"
          labelDisplayedRows={({ from, to, count }) => `${from}/${to} of ${count.toLocaleString()} Records`}
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'}`,
            backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1f2937' : '#f9fafb',
            "& .MuiTablePagination-toolbar": {
              fontSize: "13px",
              color: "text.primary",
            },
            "& .MuiTablePagination-selectLabel": {
              fontSize: "13px",
              color: "text.primary",
            },
            "& .MuiTablePagination-displayedRows": {
              fontSize: "13px",
              color: "text.primary",
            },
          }}
        />
      </TableContainer>

      <Drawer
        anchor="right"
        open={!!selectedNews}
        onClose={() => setSelectedNews(null)}
        PaperProps={{ sx: { width: 700, padding: 3, bgcolor: 'background.paper' } }}
      >
        {selectedNews && <NewsDetail item={selectedNews} />}
      </Drawer>
    </>
  )
}
