"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Globe, Network, Server, Shield } from "lucide-react"

const stats = [
  { label: "Total Assets", value: "2,847", icon: Globe, color: "text-blue-400" },
  { label: "New This Week", value: "124", icon: Network, color: "text-cyan-400" },
  { label: "High Risk", value: "18", icon: Server, color: "text-orange-400" },
  { label: "Verified Safe", value: "2,156", icon: Shield, color: "text-green-400" },
]

export function AssetsStats() {
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
