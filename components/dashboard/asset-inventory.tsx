"use client"

import { useState } from "react"
import {
  Search,
  ExpandMore,
  Download,
  Refresh,
  MoreHoriz,
  ExpandLess,
} from "@mui/icons-material"
import {
  TextField,
  Button,
  Chip,
  Card,
  CardContent,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Collapse,
} from "@mui/material"

export function AssetInventory() {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({
    pixpirate: true,
    "microsoft-windows": true,
  })

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }))
  }

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "text.primary", mb: 1 }}>
            Asset Inventory
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Select your fiat currency and your favourite payment method
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
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
          <Button
            variant="outlined"
            size="small"
            endIcon={<ExpandMore />}
            sx={{
              bgcolor: "background.paper",
              borderColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : '#d1d5db',
              color: "text.primary",
              textTransform: "none",
              fontSize: "13px",
              height: 32,
              "&:hover": {
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : '#f9fafb',
                borderColor: (theme) => theme.palette.mode === 'dark' ? '#4b5563' : '#9ca3af',
              },
            }}
          >
            Select Duration
          </Button>
          <IconButton size="small" sx={{ color: "text.secondary" }}>
            <Download />
          </IconButton>
          <IconButton size="small" sx={{ color: "text.secondary" }}>
            <Refresh />
          </IconButton>
          <IconButton size="small" sx={{ color: "text.secondary" }}>
            <MoreHoriz />
          </IconButton>
        </Box>
      </Box>

      {/* Filters */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        {[
          ["Select Severities", "0", (theme: any) => theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'],
          ["Select Countries", "1", "#22c55e"],
          ["Select Regions", "0", (theme: any) => theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'],
          ["Select Industries", "0", (theme: any) => theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'],
        ].map(([label, count, color], index) => (
          <Button
            key={index}
            variant="outlined"
            size="small"
            endIcon={<ExpandMore />}
            sx={{
              bgcolor: "background.paper",
              borderColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : '#d1d5db',
              color: "text.primary",
              textTransform: "none",
              fontSize: "13px",
              height: 32,
              "&:hover": {
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : '#f9fafb',
                borderColor: (theme) => theme.palette.mode === 'dark' ? '#4b5563' : '#9ca3af',
              },
            }}
          >
            {typeof label === 'function' ? label({} as any) : label}
            {count !== "0" && (
              <Chip
                label={count}
                size="small"
                sx={{
                  bgcolor: typeof color === 'function' ? color({} as any) : color,
                  color: count === "0" ? "text.secondary" : "white",
                  ml: 1,
                  height: 16,
                  fontSize: "10px",
                  fontWeight: 600,
                  "& .MuiChip-label": {
                    px: 0.5,
                  },
                }}
              />
            )}
          </Button>
        ))}
      </Box>

      {/* Asset Cards */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

        {/* PixPirate Card */}
        <Card sx={{
          borderLeft: "4px solid #800000", // Maroon vertical line
          boxShadow: "none",
          border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'}`,
          borderRadius: "8px",
          mb: 1,
          bgcolor: 'background.paper',
        }}>
          <CardContent sx={{ p: 0 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 3,
                py: 2,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : '#fafafa',
                },
              }}
              onClick={() => toggleCardExpansion("pixpirate")}
            >
              <Typography variant="h6" sx={{
                fontWeight: 600,
                color: "text.primary",
                fontSize: "16px",
                fontFamily: "system-ui, -apple-system, sans-serif"
              }}>
                PixPirate
              </Typography>
              <IconButton size="small" sx={{ color: "text.secondary", p: 0.5 }}>
                {expandedCards["pixpirate"] ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
              </IconButton>
            </Box>
            <Collapse in={expandedCards["pixpirate"]}>
              <Box sx={{
                px: 3,
                pb: 3,
                pt: 2,
                borderTop: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'}`,
                bgcolor: (theme) => theme.palette.mode === 'dark' ? '#1f2937' : '#fafafa'
              }}>
                {/* Fields */}
                {[
                  ["Description", "PixPirate Exploits WhatsApp in THE LATEST Campaign"],
                  ["Published On", "10-Dec-2024"],
                  ["Published By", "Armaudit"],
                ].map(([label, value], index) => (
                  <Box key={index} sx={{ display: "flex", mb: 2 }}>
                    <Typography variant="body2" sx={{
                      color: "text.secondary",
                      fontSize: "12px",
                      fontWeight: 500,
                      minWidth: "100px",
                      mr: 2
                    }}>
                      {label} :
                    </Typography>
                    <Typography variant="body2" sx={{
                      color: "text.primary",
                      fontSize: "13px",
                      lineHeight: 1.4,
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      flex: 1
                    }}>
                      {value}
                    </Typography>
                  </Box>
                ))}

                {/* Tags */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", mb: 2 }}>
                  {["MALWARE", "ANDROID", "TROJAN", "EXPLOIT", "SOCIAL ENGINEERING", "SMISHING"].map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: (theme) => theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb',
                        color: (theme) => theme.palette.mode === 'dark' ? '#d1d5db' : '#374151',
                        fontSize: "11px",
                        height: 22,
                        fontWeight: 500,
                        borderRadius: "4px",
                        "& .MuiChip-label": {
                          px: 1.5,
                          py: 0,
                        },
                      }}
                    />
                  ))}
                </Box>

                {/* Flag */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{
                    width: 20,
                    height: 12,
                    borderRadius: "2px",
                    border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#4b5563' : '#d1d5db'}`,
                    position: "relative",
                    overflow: "hidden",
                    background: "linear-gradient(to bottom, #ff9933 0%, #ff9933 33.33%, #ffffff 33.33%, #ffffff 66.66%, #138808 66.66%, #138808 100%)",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      border: "0.5px solid #000080",
                      background: "transparent"
                    }
                  }} />
                </Box>
              </Box>
            </Collapse>
          </CardContent>
        </Card>

        {/* HeadMare Cards */}
        {[1, 2, 3].map((index) => (
          <Card key={`headmare-${index}`} sx={{
            borderLeft: "4px solid #f59e0b",
            boxShadow: "none",
            border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'}`,
            borderRadius: "8px",
            mb: 1,
            bgcolor: 'background.paper',
          }}>
            <CardContent sx={{ p: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 3,
                  py: 2,
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : '#fafafa',
                  },
                }}
                onClick={() => toggleCardExpansion(`headmare-${index}`)}
              >
                <Typography variant="h6" sx={{
                  fontWeight: 600,
                  color: "text.primary",
                  fontSize: "16px",
                  fontFamily: "system-ui, -apple-system, sans-serif"
                }}>
                  HeadMare
                </Typography>
                <IconButton size="small" sx={{ color: "text.secondary", p: 0.5 }}>
                  {expandedCards[`headmare-${index}`] ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}

        {/* Microsoft Windows Card */}
        <Card sx={{
          borderLeft: "4px solid #800000", // Maroon vertical line
          boxShadow: "none",
          border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'}`,
          borderRadius: "8px",
          mb: 1,
          bgcolor: 'background.paper',
        }}>
          <CardContent sx={{ p: 0 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 3,
                py: 2,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#374151' : '#fafafa',
                },
              }}
              onClick={() => toggleCardExpansion("microsoft-windows")}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Typography variant="h6" sx={{
                  fontWeight: 600,
                  color: "text.primary",
                  fontSize: "16px",
                  fontFamily: "system-ui, -apple-system, sans-serif"
                }}>
                  Microsoft Windows
                </Typography>
                <Chip
                  label="EXCLUSIVE"
                  size="small"
                  sx={{
                    bgcolor: "#22c55e",
                    color: "white",
                    fontSize: "10px",
                    height: 20,
                    fontWeight: 600,
                    borderRadius: "4px",
                    "& .MuiChip-label": {
                      px: 1.5,
                      py: 0,
                    },
                  }}
                />
              </Box>
              <IconButton size="small" sx={{ color: "text.secondary", p: 0.5 }}>
                {expandedCards["microsoft-windows"] ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
              </IconButton>
            </Box>
            <Collapse in={expandedCards["microsoft-windows"]}>
              <Box sx={{
                px: 3,
                pb: 3,
                pt: 2,
                borderTop: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb'}`,
                bgcolor: (theme) => theme.palette.mode === 'dark' ? '#1f2937' : '#fafafa'
              }}>
                {[
                  ["Description", "Microsoft Windows Common Log File System Driver Heap-Based Buffer Overflow Vulnerability incorporated by CISA Known Exploited Vulnerability (KEV) catalog"],
                  ["Published On", "11-Dec-2024"],
                  ["Published By", "Armaudit"],
                ].map(([label, value], index) => (
                  <Box key={index} sx={{ display: "flex", mb: 2 }}>
                    <Typography variant="body2" sx={{
                      color: "text.secondary",
                      fontSize: "12px",
                      fontWeight: 500,
                      minWidth: "100px",
                      mr: 2
                    }}>
                      {label} :
                    </Typography>
                    <Typography variant="body2" sx={{
                      color: "text.primary",
                      fontSize: "13px",
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      flex: 1
                    }}>
                      {value}
                    </Typography>
                  </Box>
                ))}

                <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", mb: 2 }}>
                  {["VULNERABILITY", "CISA", "EXPLOIT", "KEV HEAP BASED", "BUFFER", "OVERFLOW"].map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: (theme) => theme.palette.mode === 'dark' ? '#374151' : '#e5e7eb',
                        color: (theme) => theme.palette.mode === 'dark' ? '#d1d5db' : '#374151',
                        fontSize: "11px",
                        height: 22,
                        fontWeight: 500,
                        borderRadius: "4px",
                        "& .MuiChip-label": {
                          px: 1.5,
                          py: 0,
                        },
                      }}
                    />
                  ))}
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{
                    width: 20,
                    height: 12,
                    borderRadius: "2px",
                    border: (theme) => `1px solid ${theme.palette.mode === 'dark' ? '#4b5563' : '#d1d5db'}`,
                    position: "relative",
                    overflow: "hidden",
                    background: "linear-gradient(to bottom, #ff9933 0%, #ff9933 33.33%, #ffffff 33.33%, #ffffff 66.66%, #138808 66.66%, #138808 100%)",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      border: "0.5px solid #000080",
                      background: "transparent"
                    }
                  }} />
                </Box>
              </Box>
            </Collapse>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}
