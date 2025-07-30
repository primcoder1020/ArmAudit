import React from "react"
import { Box, Card, CardContent, Typography } from "@mui/material"
import Image from "next/image"

const metricsData = [
  {
    title: "Domains",
    value: "20,997",
    subtitle: "Domains & URL",
    icon: "/Icons/globe.png",
    backgroundColor: "#EBF6F8"
  },
  {
    title: "IPs",
    value: "3,740",
    subtitle: "IPV4 & IPV6",
    icon: "/Icons/marker-pin-04.png",
    backgroundColor: "#FFF6DF"
  },
  {
    title: "File Hashes",
    value: "9,565",
    subtitle: "MD5, SHA1 & SHA256",
    icon: "/Icons/text.png",
    backgroundColor: "#DCE4F3"
  },
  {
    title: "Others",
    value: "438",
    subtitle: "Email & Wallet Address",
    icon: "/Icons/dots-horizontal.png",
    backgroundColor: "#FDE9D8"
  }
]

export function IoCMetrics() {
  return (
    <Box sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
      gap: 3,
      mb: 4
    }}>
      {metricsData.map((metric, index) => (
        <Card key={index} sx={{ p: 2 }}>
          <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", borderRadius: "16px", padding: "10px", backgroundColor: metric.backgroundColor }}>
                <Image src={metric.icon} alt={metric.title} width={24} height={24} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 500, color: "text.primary", fontSize: "14px" }}>
                  {metric.title}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "semibold", color: "text.primary", fontSize: "16px" }}>
                  {metric.value}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {metric.subtitle}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
} 