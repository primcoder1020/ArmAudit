import React from "react"
import { 
  Box, 
  Card, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Chip, 
  Typography 
} from "@mui/material"
import Image from "next/image"

// Mock data for IoC table
const iocData = [
  {
    id: 1,
    ioc: "00000000000000000000000000000000",
    firstSeen: "12-Jun-2024",
    lastSeen: "12-Jun-2024",
    confidenceRating: "MEDIUM",
    riskScore: 80,
    sources: "Malware Patr.... +1",
    behaviorTags: "Adversary +2",
    relatedEntities: { people: 12, domains: 0, documents: 10, files: 0 }
  },
  {
    id: 2,
    ioc: "11111111111111111111111111111111",
    firstSeen: "12-Jun-2024",
    lastSeen: "12-Jun-2024",
    confidenceRating: "MEDIUM",
    riskScore: 80,
    sources: "Malware Patr.... +1",
    behaviorTags: "Adversary +2",
    relatedEntities: { people: 12, domains: 0, documents: 10, files: 0 }
  },
  {
    id: 3,
    ioc: "22222222222222222222222222222222",
    firstSeen: "12-Jun-2024",
    lastSeen: "12-Jun-2024",
    confidenceRating: "MEDIUM",
    riskScore: 80,
    sources: "Malware Patr.... +1",
    behaviorTags: "Adversary +2",
    relatedEntities: { people: 12, domains: 0, documents: 10, files: 0 }
  },
  {
    id: 4,
    ioc: "33333333333333333333333333333333",
    firstSeen: "12-Jun-2024",
    lastSeen: "12-Jun-2024",
    confidenceRating: "MEDIUM",
    riskScore: 80,
    sources: "Malware Patr.... +1",
    behaviorTags: "Adversary +2",
    relatedEntities: { people: 12, domains: 0, documents: 10, files: 0 }
  }
]

export function IoCTable() {
  return (
    <Card>
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "grey.50" }}>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>IoC</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>First Seen</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Last Seen</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Confidence Rati...</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Risk Score</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Sources</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Behaviour Tags</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Related Entities</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {iocData.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell sx={{ fontFamily: "monospace", fontSize: "0.875rem" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Image src="/Icons/text.png" alt="Document" width={16} height={16} />
                    {row.ioc.substring(0, 20)}...
                  </Box>
                </TableCell>
                <TableCell>{row.firstSeen}</TableCell>
                <TableCell>{row.lastSeen}</TableCell>
                <TableCell>
                  <Chip 
                    label={row.confidenceRating} 
                    size="small"
                    sx={{ 
                      backgroundColor: row.confidenceRating === "HIGH" ? "success.light" :
                                     row.confidenceRating === "MEDIUM" ? "warning.light" : "error.light",
                      color: "white",
                      fontWeight: 500
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Box sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: "error.main",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: "bold"
                  }}>
                    {row.riskScore}
                  </Box>
                </TableCell>
                <TableCell>{row.sources}</TableCell>
                <TableCell>
                  <Chip 
                    label={row.behaviorTags} 
                    size="small"
                    sx={{ 
                      backgroundColor: "success.light",
                      color: "white",
                      fontWeight: 500
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Image src="/Icons/Virus.png" alt="People" width={12} height={12} />
                      <Typography variant="caption">{row.relatedEntities.people}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Image src="/Icons/Keyhole.png" alt="Domains" width={12} height={12} />
                      <Typography variant="caption">{row.relatedEntities.domains}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Image src="/Icons/marker-pin-04.png" alt="Documents" width={12} height={12} />
                      <Typography variant="caption">{row.relatedEntities.documents}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <Image src="/Icons/hospital.png" alt="Files" width={12} height={12} />
                      <Typography variant="caption">{row.relatedEntities.files}</Typography>
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}