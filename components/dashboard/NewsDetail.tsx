"use client"

import React from "react"
import { Box, Typography, Chip, Divider, Accordion, AccordionSummary, AccordionDetails, Button, IconButton } from "@mui/material"
import { ExpandMore, ThumbUp, ThumbDown, Close } from "@mui/icons-material"

interface NewsItem {
  id: number
  date: string
  actor: string
  title: string
  country: string
  region: string
  status: "VIEWED" | "UNVIEWED"
}

interface Props {
  item: NewsItem
  onClose?: () => void
}

const NewsDetail = ({ item, onClose }: Props) => {
  return (
    <Box>
      <Typography variant="h6" fontWeight={600}>
        {item.title}
      </Typography>
      <Typography color="text.secondary" fontSize={14} mt={0.5}>
        Select your fiat currency and your favourite payment method
      </Typography>

      <Box display="flex" gap={2} my={3} flexWrap="wrap">
        <DetailBlock label="Threat Actor" value={item.actor} />
        <DetailBlock label="Threat Activity Date" value="12–Dec–2024" />
        <DetailBlock label="Published Date" value="13–Dec–2024" />
        <DetailBlock
          label="Status"
          value={<Chip label={item.status} sx={{ bgcolor: "primary.main", color: "white", fontWeight: 500 }} />}
        />
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle2" fontWeight={600} mb={1}>
        Summary of the Threat Activity:
      </Typography>
      <Typography fontSize={14} color="text.secondary" lineHeight={1.6}>
        Threat Actor (TA) {item.actor} on the nuovo BreachForums, advertised a database allegedly stolen from Payal
        Jewellers, a manufacturer of designer jewelry, diamond jewelry, and gold necklace sets. In the post, the TA
        claimed that the database is from 2024 and contains 1.1 million records. To support the claims, the TA shared a
        CSV file containing the following fields: Client ID, Group Membership, Client Name, Client Last Name, Product
        Type, Contact Number, Description, Item Count, Reward Points, Downloads, Product ID, Cost, Order History, Order
        ID, Cert, Email Address, Forgotten Password, Recurring Payments, Transactions, Returns, Password (Hashed) [sic].
        The TA did not quote any price and asked interested buyers to contact privately.
      </Typography>

      <Box mt={3}>
        <Typography variant="subtitle2" fontWeight={600}>
          Impacted Organisations:
        </Typography>
        <Typography fontSize={14} color="text.secondary">
          Payal Jewellers
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="subtitle2" fontWeight={600}>
          Related Websites:
        </Typography>
        <Typography fontSize={14} color="text.secondary">
          payaljewellers.in
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="subtitle2" fontWeight={600}>
          Impacted Countries:
        </Typography>
        <Typography fontSize={14} color="text.secondary">
          India
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="subtitle2" fontWeight={600}>
          Notes:
        </Typography>
        <Typography fontSize={14} color="text.secondary">
          Threat Actor (TA) {item.actor} on the nuovo BreachForums, advertised a database allegedly stolen from Payal
          Jewellers, a manufacturer of designer jewelry, diamond jewelry, and gold necklace sets. In the post, the TA
          claimed that the database is from 2024 and contains 1.1 million records...
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="subtitle2" fontWeight={600} mb={1}>
          Details
        </Typography>

        {[1, 2, 3, 4].map((num) => (
          <Accordion key={num} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              Threat Actor (TA) {item.actor} — 13–Dec–2024
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={14} color="text.secondary">
                Full threat data attachment preview or summary here...
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box mt={4} p={2} bgcolor={(theme) => theme.palette.mode === 'dark' ? '#1f2937' : '#f9f9f9'} borderRadius={2}>
        <Typography variant="subtitle2" fontWeight={600}>
          AI Summary
        </Typography>
        <Typography fontSize={14} color="text.secondary" mt={1}>
          We discover publicly available websites, internal/admin applications, APIs, network device (firewall, router
          etc.), interfaces, IoT (camera) devices, virtual hosted applications etc. from the organisation inventory of
          domains, subdomains, IPs. We continuously...
        </Typography>
        <Typography variant="caption" color="text.secondary" display="block" mt={1}>
          AI-generated content may be incorrect. Learn more
        </Typography>
      </Box>
    </Box>
  )
}

const DetailBlock = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <Box minWidth={150}>
    <Typography fontSize={12} color="text.secondary" fontWeight={500}>
      {label}
    </Typography>
    <Box sx={{ fontSize: 14, fontWeight: 600 }}>
      {value}
    </Box>
  </Box>
)

export default NewsDetail
