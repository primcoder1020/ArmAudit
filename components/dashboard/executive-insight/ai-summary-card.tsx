"use client"

import React, { useState } from "react"
import { Box, Typography, Button } from "@mui/material"
import { ExpandMore, ExpandLess, Refresh, MoreHoriz } from "@mui/icons-material"
import { DashboardCard } from "@/components/ui/dashboard-card"

export function AISummaryCard() {
  const [expanded, setExpanded] = useState(false)
  const [activeTab, setActiveTab] = useState<"status" | "insight">("status")

  return (
    <DashboardCard>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, display: "flex", alignItems: "center", gap: 1, fontSize: "16px" }}>
          🤖 AI Summary
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Button size="small" sx={{ minWidth: "auto", p: 0.5, color: "text.secondary" }}>
            <Refresh sx={{ fontSize: 16 }} />
          </Button>
          <Button size="small" sx={{ minWidth: "auto", p: 0.5, color: "text.secondary" }}>
            <MoreHoriz sx={{ fontSize: 16 }} />
          </Button>
          <Button
            onClick={() => setExpanded(!expanded)}
            sx={{ minWidth: "auto", p: 0.5, color: "text.secondary" }}
          >
            {expanded ? <ExpandLess sx={{ fontSize: 16 }} /> : <ExpandMore sx={{ fontSize: 16 }} />}
          </Button>
        </Box>
      </Box>

      {/* Tab Buttons */}
      <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
        <Button
          variant="text"
          onClick={() => setActiveTab("status")}
          sx={{
            textTransform: "none",
            fontSize: "13px",
            fontWeight: activeTab === "status" ? 600 : 400,
            color: activeTab === "status" ? "text.primary" : "text.secondary",
            p: 0,
            minWidth: "auto",
            "&:hover": { backgroundColor: "transparent" }
          }}
        >
          Status
        </Button>
        <Button
          variant="text"
          onClick={() => setActiveTab("insight")}
          sx={{
            textTransform: "none",
            fontSize: "13px",
            fontWeight: activeTab === "insight" ? 600 : 400,
            color: activeTab === "insight" ? "text.primary" : "text.secondary",
            p: 0,
            minWidth: "auto",
            "&:hover": { backgroundColor: "transparent" }
          }}
        >
          Insight
        </Button>
      </Box>

      {/* Content */}
      <Box>
        {activeTab === "status" && (
          <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6, fontSize: "13px" }}>
            We discover publicly available websites, internal/admin applications, APIs, network device (firewall, router etc.) interfaces, IoT (camera) devices, virtual hosted applications from ThreatActor's digital inventory of domains, subdomains, IPs. We continuously scan the Asset inventory (domains, subdomains, IPs, netblocks etc.) of the organisation for the exposed ports and page them to discover web applications.
          </Typography>
        )}

        {activeTab === "insight" && (
          <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6, fontSize: "13px" }}>
            AI-generated content may be incorrect. <Typography component="span" sx={{ color: "primary.main", textDecoration: "underline", cursor: "pointer" }}>Learn more</Typography>
          </Typography>
        )}
      </Box>

      {expanded && (
        <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: "divider" }}>
          <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "12px" }}>
            Additional insights and detailed analysis would appear here when expanded.
          </Typography>
        </Box>
      )}
    </DashboardCard>
  )
}
