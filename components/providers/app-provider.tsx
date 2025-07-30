"use client"

import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { ThemeProvider as NextThemeProvider } from "@/components/providers/theme-provider"
import { useTheme } from "next-themes"

const createAppTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#46e595",
    },
    background: {
      default: mode === 'light' ? "#fafafa" : "#0f0f0f",
      paper: mode === 'light' ? "#ffffff" : "#1a1a1a",
    },
    text: {
      primary: mode === 'light' ? "#111827" : "#ffffff",
      secondary: mode === 'light' ? "#6b7280" : "#a1a1aa",
    },
    grey: {
      50: mode === 'light' ? "#f9fafb" : "#1a1a1a",
      100: mode === 'light' ? "#f3f4f6" : "#262626",
      200: mode === 'light' ? "#e5e7eb" : "#404040",
      300: mode === 'light' ? "#d1d5db" : "#525252",
      400: mode === 'light' ? "#9ca3af" : "#737373",
      500: mode === 'light' ? "#6b7280" : "#a1a1aa",
      600: mode === 'light' ? "#4b5563" : "#d4d4d8",
      700: mode === 'light' ? "#374151" : "#e4e4e7",
      800: mode === 'light' ? "#1f2937" : "#f4f4f5",
      900: mode === 'light' ? "#111827" : "#fafafa",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    // Customize Material-UI components globally
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
          borderRadius: "8px",
          border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.divider : '#e5e7eb'}`,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "6px",
          fontWeight: 500,
        },
        outlined: ({ theme }) => ({
          borderColor: theme.palette.mode === 'dark' ? '#374151' : "#d1d5db",
          color: theme.palette.mode === 'dark' ? theme.palette.text.primary : "#374151",
          "&:hover": {
            backgroundColor: theme.palette.mode === 'dark' ? '#374151' : "#f9fafb",
            borderColor: theme.palette.mode === 'dark' ? '#4b5563' : "#d1d5db",
          },
        }),
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "8px",
          backgroundColor: theme.palette.mode === 'dark' ? '#374151' : "#e5e7eb",
        }),
        bar: {
          borderRadius: "8px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          fontWeight: 500,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: ({ theme }) => ({
          fontWeight: 600,
          color: theme.palette.mode === 'dark' ? theme.palette.text.primary : "#6b7280",
          backgroundColor: theme.palette.mode === 'dark' ? '#1f2937' : "#f9fafb",
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          borderRight: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.divider : '#e5e7eb'}`,
        }),
      },
    },
  },
})

interface AppProviderProps {
  children: React.ReactNode
}

function MaterialUIThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme: nextTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const materialTheme = React.useMemo(() => {
    // Use resolvedTheme for better hydration, fallback to light
    const themeMode = mounted ? (resolvedTheme === 'dark' ? 'dark' : 'light') : 'light'
    return createAppTheme(themeMode)
  }, [resolvedTheme, mounted])

  return (
    <ThemeProvider theme={materialTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange={false}
    >
      <MaterialUIThemeProvider>
        {children}
      </MaterialUIThemeProvider>
    </NextThemeProvider>
  )
}
