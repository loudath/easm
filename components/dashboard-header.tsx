"use client"

import { Bell, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search assets, vulnerabilities..."
              className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
