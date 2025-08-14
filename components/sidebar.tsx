"use client"

import { useRouter, usePathname } from "next/navigation"
import {
  BarChart,
  Public,
  Visibility,
  People,
  Security,
  Warning,
  Timeline,
  Notifications,
  Settings,
  ExpandMore,
} from "@mui/icons-material"
import Image from "next/image"
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box, ListItemButton } from "@mui/material"

export function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  const menuItems = [
    { icon: <Image src="/Icons/sidebar/home-2.png" alt="Dashboard" width={24} height={24} />, label: "Dashboard", path: "/dashboard/executive-insight", active: pathname.startsWith("/dashboard") },
    { icon: <Image src="/Icons/sidebar/message-programming.png" alt="Attack Surface" width={24} height={24} />, label: "Attack Surface", path: "/attack-surface" },
    { icon: <Image src="/Icons/sidebar/password-check.png" alt="Threat Intelligence" width={24} height={24} />, label: "Threat Intelligence", path: "/threat-intelligence", active: pathname.startsWith("/threat-intelligence") },
    { icon: <Image src="/Icons/sidebar/picture-frame.png" alt="Geolocation" width={24} height={24} />, label: "Geolocation", path: "/geolocation", hasSubmenu: true },
    { icon: <Image src="/Icons/sidebar/security-user.png" alt="DeepFake" width={24} height={24} />, label: "DeepFake", path: "/deepfake" },
    { icon: <Image src="/Icons/sidebar/heart-remove.png" alt="Physical Threats" width={24} height={24} />, label: "Physical Threats", path: "/physical-threats" },
    { icon: <Image src="/Icons/sidebar/cloud-lightning.png" alt="Cloud Security" width={24} height={24} />, label: "Cloud Security", path: "/cloud-security" },
    { icon: <Image src="/Icons/sidebar/flash-circle.png" alt="Brand Intelligence" width={24} height={24} />, label: "Brand Intelligence", path: "/brand-intelligence" },
    { icon: <Image src="/Icons/sidebar/shield-search.png" alt="Vulnerability Intelligence" width={24} height={24} />, label: "Vulnerability Intelligence", path: "/vulnerability-intelligence" },
    { icon: <Image src="/Icons/sidebar/info-circle.png" alt="Alerts" width={24} height={24} />, label: "Alerts", path: "/alerts" },
    { icon: <Image src="/Icons/sidebar/keyboard.png" alt="Executive monitoring" width={24} height={24} />, label: "Executive monitoring", path: "/executive-monitoring" },
    { icon: <Image src="/Icons/sidebar/setting.png" alt="Settings" width={24} height={24} />, label: "Settings", path: "/settings" },
  ]

  const handleMenuClick = (path: string) => {
    router.push(path)
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 256,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 256,
          boxSizing: "border-box",
          bgcolor: "background.paper",
          borderRight: "1px solid",
          borderColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.divider : 'grey.200',
          position: "relative",
          height: "calc(100vh - 64px)", // Full height minus header
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="caption" sx={{ color: "text.secondary", mb: 2, display: "block" }}>
          MAIN MENU
        </Typography>
        <List sx={{ p: 0 }}>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => handleMenuClick(item.path)}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  bgcolor: item.active ? "rgba(70, 229, 149, 0.1)" : "transparent",
                  color: item.active ? "text.primary" : "text.secondary",
                  fontWeight: item.active ? 500 : 400,
                  "&:hover": {
                    bgcolor: item.active ? "rgba(70, 229, 149, 0.1)" : "grey.50",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    variant: "body2",
                    sx: { fontWeight: item.active ? 500 : 400 },
                  }}
                />
                {item.hasSubmenu && <ExpandMore sx={{ fontSize: 16, ml: "auto" }} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
