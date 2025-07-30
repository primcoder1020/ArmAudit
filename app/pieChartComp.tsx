"use client"

import { Pie, PieChart } from "recharts"
import { MoreHorizontal } from "lucide-react"
import { Box, Typography, Paper, IconButton } from "@mui/material"
import { styled } from "@mui/material/styles"

interface ThreatActorData {
  name: string
  value: number
  fill: string
}

interface ThreatActorsPieChartProps {
  title?: string
  centerValue?: string
  centerLabel?: string
  data?: ThreatActorData[]
  showMenu?: boolean
}

const ChartContainer = styled(Box)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const CenterTextContainer = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
})

const HeaderContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 16,
})

const LegendContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  marginTop: 16,
})

const LegendItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 8,
})

const LegendColor = styled(Box)<{ color: string }>(({ color }) => ({
  width: 12,
  height: 12,
  borderRadius: "50%",
  backgroundColor: color,
  flexShrink: 0,
}))

export default function ThreatActorsPieChart({
  title = "Top 5 threat actors",
  centerValue = "50,904",
  centerLabel = "Post Mentions",
  showMenu = true,
  data = [
    { name: "Lockbit", value: 35, fill: "#e396aa" },
    { name: "Lazarus", value: 25, fill: "#b1e1c4" },
    { name: "Kimsuky", value: 20, fill: "#9bc3f6" },
    { name: "Blackcat", value: 12, fill: "#ecb467" },
    { name: "VoltTyphoon", value: 8, fill: "#7aaff4" },
  ],
}: ThreatActorsPieChartProps) {
  // Create chart config from data
  const chartConfig = data.reduce(
    (config, item) => {
      config[item.name.toLowerCase()] = {
        label: item.name,
        color: item.fill,
      }
      return config
    },
    {} as Record<string, { label: string; color: string }>,
  )

  return (
    <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
      {/* Header */}
      <HeaderContainer>
        <Typography variant="h6" component="h2" fontWeight="600">
          {title}
        </Typography>
        {showMenu && (
          <IconButton size="small" sx={{ color: "text.secondary" }}>
            <MoreHorizontal size={20} />
          </IconButton>
        )}
      </HeaderContainer>

      {/* Chart Container */}
      <ChartContainer>
        <Box sx={{ width: 300, height: 300 }}>
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx={150}
              cy={150}
              innerRadius={80}
              outerRadius={120}
              strokeWidth={0}
            />
          </PieChart>
        </Box>

        {/* Center Text - Perfectly positioned */}
        <CenterTextContainer>
          <Typography variant="h4" component="div" fontWeight="bold" color="text.primary">
            {centerValue}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {centerLabel}
          </Typography>
        </CenterTextContainer>
      </ChartContainer>

      {/* Legend */}
      <LegendContainer>
        {data.map((item, index) => (
          <LegendItem key={index}>
            <LegendColor color={item.fill} />
            <Typography variant="body2" color="text.primary" sx={{ flexGrow: 1 }}>
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontWeight="500">
              {item.value}%
            </Typography>
          </LegendItem>
        ))}
      </LegendContainer>
    </Paper>
  )
}
