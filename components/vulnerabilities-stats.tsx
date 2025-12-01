"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, TrendingUp, Clock, CheckCircle } from "lucide-react"

const stats = [
  { label: "Total Vulnerabilities", value: "521", change: "-8%", icon: AlertTriangle, color: "text-red-400" },
  { label: "Critical Issues", value: "23", change: "+2", icon: TrendingUp, color: "text-orange-400" },
  { label: "Pending Review", value: "67", change: "-12", icon: Clock, color: "text-yellow-400" },
  { label: "Resolved This Month", value: "89", change: "+15", icon: CheckCircle, color: "text-green-400" },
]

export function VulnerabilitiesStats() {
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
                  <p className={`text-xs mt-2 ${stat.change.startsWith("-") ? "text-green-400" : "text-red-400"}`}>
                    {stat.change}
                  </p>
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
