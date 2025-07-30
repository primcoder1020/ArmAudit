"use client"

import { Box } from "@mui/material"
import { NewsfeedHeader } from "./newsfeed/newsfeed-header"
import { NewsfeedFilters } from "./newsfeed/newsfeed-filters"
import { CountryStatsCard } from "./newsfeed/country-stats-card"
import { ThreatActorsCard } from "./newsfeed/threat-actors-card"
import { TrendingCard } from "./newsfeed/trending-card"
import { NewsRecommendations } from "./newsfeed/news-recommendations"

export function Newsfeed() {
  return (
    <Box>
      <NewsfeedHeader />

      <NewsfeedFilters />

      {/* Analytics Cards */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr)" }, gap: 3, mb: 4 }}>
        <CountryStatsCard />

        <ThreatActorsCard />

        <TrendingCard />
      </Box>

      <NewsRecommendations />
    </Box>
  )
}
