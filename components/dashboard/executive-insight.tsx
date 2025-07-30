"use client"

import { Box } from "@mui/material"
import { PageHeader } from "@/components/layout/page-header"
import { AISummaryCard } from "./executive-insight/ai-summary-card"
import { DarkwebStatistics } from "./executive-insight/darkweb-statistics"
import { TagsDistribution } from "./executive-insight/tags-distribution"
import { TopKeywords } from "./executive-insight/top-keywords"
import { CybercrimeStatistics } from "./executive-insight/cybercrime-statistics"
import { ImpactedOrganisation } from "./executive-insight/impacted-organisation"

export function ExecutiveInsight() {
  return (
    <Box>
      <PageHeader
        title="Executive Insight"
        subtitle="Select your fiat currency and your favourite payment method"
      />

      {/* AI Summary Card */}
      <Box sx={{ mb: 3 }}>
        <AISummaryCard />
      </Box>

      {/* Statistics Grid */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr)" }, gap: 3 }}>
        {/* Darkweb Statistics */}
        <DarkwebStatistics />

        {/* Tags Distribution */}
        <TagsDistribution />

        {/* Top Keywords */}
        <TopKeywords />
      </Box>

      {/* Bottom Section */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "repeat(2, 1fr)" }, gap: 3, mt: 3 }}>
        {/* Cybercrime Statistics */}
        <CybercrimeStatistics />

        {/* Impacted Organisation */}
        <ImpactedOrganisation />
      </Box>
    </Box>
  )
}
