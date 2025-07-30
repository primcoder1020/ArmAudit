"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

interface FilterState {
  timeFilter: string
  keywordFilter: string
  statusFilter: string
  categoryFilter: string
}

interface FilterContextType {
  filters: FilterState
  updateFilter: (key: keyof FilterState, value: string) => void
  resetFilters: () => void
}

const defaultFilters: FilterState = {
  timeFilter: "Last 24 Hours",
  keywordFilter: "All Keywords",
  statusFilter: "All Status",
  categoryFilter: "All Categories"
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters)

  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const resetFilters = () => {
    setFilters(defaultFilters)
  }

  return (
    <FilterContext.Provider value={{ filters, updateFilter, resetFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilters() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error("useFilters must be used within a FilterProvider")
  }
  return context
}
