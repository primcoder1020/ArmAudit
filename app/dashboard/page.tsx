"use client"

import { redirect } from "next/navigation"

export default function DashboardPage() {
  // Redirect to executive-insight as the default dashboard page
  redirect("/dashboard/executive-insight")
}
