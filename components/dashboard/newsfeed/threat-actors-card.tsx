"use client"

import React from "react"
import { DashboardCard } from "@/components/ui/dashboard-card"
import ThreatActorsPieChart from "@/app/pieChartComp"

const threatActorsData = [
  { name: "Lockbit", value: 40, fill: "#8B5A3C" },
  { name: "Lazarus", value: 25, fill: "#D4A574" },
  { name: "Kimsuky", value: 15, fill: "#E8A5A5" },
  { name: "Blackcat", value: 12, fill: "#A8C8A8" },
  { name: "VoltTyphoon", value: 8, fill: "#A5B8E8" },
]

export function ThreatActorsCard() {
  return (
    <DashboardCard title="Top 5 threat actors" showMoreButton>
      <ThreatActorsPieChart
        title="50,904"
        centerValue="50,904"
        centerLabel="Post Mentions"
        data={threatActorsData}
      />
    </DashboardCard>
  )
}
