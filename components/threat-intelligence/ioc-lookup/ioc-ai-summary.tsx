import React from "react"
import { 
  Box, 
  Typography, 
  IconButton, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Tabs, 
  Tab 
} from "@mui/material"
import { 
  ExpandMore, 
  ThumbUp, 
  ThumbDown, 
  Psychology 
} from "@mui/icons-material"
import Image from "next/image"

interface IoCAISummaryProps {
  expanded: boolean
  setExpanded: (expanded: boolean) => void
  aiSummaryTab: number
  setAiSummaryTab: (tab: number) => void
}

export function IoCAISummary({ 
  expanded, 
  setExpanded, 
  aiSummaryTab, 
  setAiSummaryTab 
}: IoCAISummaryProps) {
  return (
    <Accordion 
      expanded={expanded} 
      onChange={() => setExpanded(!expanded)}
      sx={{ mb: 3 }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image src="/Icons/star-06.png" alt="Star" width={20} height={20} />
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            AI Summary
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Tabs 
            value={aiSummaryTab} 
            onChange={(_, newValue) => setAiSummaryTab(newValue)}
            sx={{ mb: 2 }}
          >
            <Tab label="Status" />
            <Tab label="Insight" />
          </Tabs>
          
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
            We discover publicly available websites, internal/admin applications, APIs, network device (firewall, router etc.) interfaces, IoT (camera) devices, virtual hosted applications etc. from the organisation inventory of domains, subdomains, IPs. We continuously scan the Asset Inventory (domains, subdomains, IPs, netblocks etc.) of the organisation for the exposed ports and pipe them to discover web applications.
          </Typography>
          
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              AI-generated content may be incorrect. Learn more
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton size="small">
                <ThumbUp />
              </IconButton>
              <IconButton size="small">
                <ThumbDown />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
} 