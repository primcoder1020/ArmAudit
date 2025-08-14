"use client"

import React, { useState } from "react"
import { Box } from "@mui/material"
import { 
  IoCHeader, 
  IoCFilters, 
  IoCAISummary, 
  IoCMetrics, 
  IoCTable, 
  IoCPagination 
} from "./ioc-lookup/index"

export function IoCLookup() {
  const [aiSummaryTab, setAiSummaryTab] = useState(0)
  const [expanded, setExpanded] = useState(true)

  return (
    <Box>
      <IoCHeader />
      <IoCFilters />
      <IoCAISummary 
        expanded={expanded}
        setExpanded={setExpanded}
        aiSummaryTab={aiSummaryTab}
        setAiSummaryTab={setAiSummaryTab}
      />
      <IoCMetrics />
      <IoCTable />
      <IoCPagination />
    </Box>
  )
} 