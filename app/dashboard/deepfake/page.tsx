"use client"

import React from "react"
import { Box, Typography, Card, CardContent, Chip, LinearProgress } from "@mui/material"
import { Security, VideoLibrary, Image, Warning } from "@mui/icons-material"

export default function DeepFakePage() {
  const detectionStats = [
    { title: "Videos Analyzed", count: 1247, accuracy: 98.5, color: "#3b82f6" },
    { title: "Deepfakes Detected", count: 23, accuracy: 96.2, color: "#ef4444" },
    { title: "Images Processed", count: 5689, accuracy: 99.1, color: "#22c55e" },
    { title: "Audio Files", count: 892, accuracy: 94.8, color: "#8b5cf6" },
  ]

  const recentDetections = [
    { 
      type: "Video", 
      filename: "executive_speech.mp4", 
      confidence: 94.2, 
      status: "Deepfake Detected",
      timestamp: "2 hours ago"
    },
    { 
      type: "Image", 
      filename: "profile_photo.jpg", 
      confidence: 87.6, 
      status: "Suspicious",
      timestamp: "4 hours ago"
    },
    { 
      type: "Audio", 
      filename: "voice_message.wav", 
      confidence: 91.3, 
      status: "Deepfake Detected",
      timestamp: "6 hours ago"
    },
    { 
      type: "Video", 
      filename: "company_announcement.mp4", 
      confidence: 23.1, 
      status: "Authentic",
      timestamp: "8 hours ago"
    },
  ]

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#111827", mb: 1 }}>
          DeepFake Detection
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          AI-powered detection of synthetic media and deepfake content
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3, mb: 4 }}>
        {detectionStats.map((item, index) => (
          <Card key={index} sx={{ height: "100%" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {index === 0 && <VideoLibrary sx={{ color: item.color, mr: 1 }} />}
                  {index === 1 && <Warning sx={{ color: item.color, mr: 1 }} />}
                  {index === 2 && <Image sx={{ color: item.color, mr: 1 }} />}
                  {index === 3 && <Security sx={{ color: item.color, mr: 1 }} />}
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.count.toLocaleString()}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "#6b7280", mb: 2 }}>
                  {item.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={item.accuracy} 
                    sx={{ 
                      flex: 1, 
                      height: 6, 
                      borderRadius: 3,
                      bgcolor: "#e5e7eb",
                      "& .MuiLinearProgress-bar": {
                        bgcolor: item.color
                      }
                    }} 
                  />
                  <Typography variant="caption" sx={{ color: "#6b7280" }}>
                    {item.accuracy}%
                  </Typography>
                </Box>
              </CardContent>
            </Card>
        ))}
      </Box>

      {/* Upload Area */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
            Upload Media for Analysis
          </Typography>
          <Box sx={{ 
            height: 200, 
            bgcolor: "#f9fafb", 
            borderRadius: 1,
            border: "2px dashed #d1d5db",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&:hover": {
              bgcolor: "#f3f4f6"
            }
          }}>
            <VideoLibrary sx={{ fontSize: 48, color: "#9ca3af", mb: 2 }} />
            <Typography variant="body1" sx={{ color: "#6b7280", mb: 1 }}>
              Drop files here or click to upload
            </Typography>
            <Typography variant="body2" sx={{ color: "#9ca3af" }}>
              Supports video, audio, and image files
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Recent Detections */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
            Recent Analysis Results
          </Typography>
          {recentDetections.map((detection, index) => (
            <Box key={index} sx={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              py: 2,
              borderBottom: index < recentDetections.length - 1 ? "1px solid #e5e7eb" : "none"
            }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Chip 
                  label={detection.type}
                  size="small"
                  sx={{ bgcolor: "#e5e7eb", color: "#374151" }}
                />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {detection.filename}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6b7280" }}>
                    Confidence: {detection.confidence}% • {detection.timestamp}
                  </Typography>
                </Box>
              </Box>
              <Chip 
                label={detection.status}
                size="small"
                sx={{
                  bgcolor: detection.status === "Deepfake Detected" ? "#ef4444" : 
                           detection.status === "Suspicious" ? "#f59e0b" : "#22c55e",
                  color: "white"
                }}
              />
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  )
}
