"use client"

import { Card, CardContent } from "@/components/ui/card"
import { RadioTower as RadioWaves, Bell, Clock, Zap } from "lucide-react"

const stats = [
  { label: "Monitors Active", value: "156", icon: RadioWaves, color: "text-blue-400", status: "All healthy" },
  { label: "Alerts This Week", value: "47", icon: Bell, color: "text-red-400", status: "12 critical" },
  { label: "Avg Response Time", value: "4.2s", icon: Clock, color: "text-green-400", status: "Optimized" },
  { label: "Uptime", value: "99.98%", icon: Zap, color: "text-yellow-400", status: "Excellent" },
]

export function MonitoringStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="bg-card/50 border-border">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-2">{stat.status}</p>
                </div>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
