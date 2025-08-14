"use client"

import * as React from "react"
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { cn } from "@/lib/utils"

export interface CalendarProps {
  className?: string
  selected?: Date
  onSelect?: (date: Date | undefined) => void
  disabled?: boolean
  placeholder?: string
}

function Calendar({
  className,
  selected,
  onSelect,
  disabled = false,
  placeholder = "Pick a date",
  ...props
}: CalendarProps) {
  const [value, setValue] = React.useState<Dayjs | null>(
    selected ? dayjs(selected) : null
  )

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue)
    if (onSelect) {
      onSelect(newValue ? newValue.toDate() : undefined)
    }
  }

  React.useEffect(() => {
    setValue(selected ? dayjs(selected) : null)
  }, [selected])

  return (
    <div className={cn("p-3", className)}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value}
          onChange={handleChange}
          disabled={disabled}
          slotProps={{
            textField: {
              placeholder: placeholder,
              fullWidth: true,
              variant: "outlined",
              size: "small"
            }
          }}
          {...props}
        />
      </LocalizationProvider>
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }
