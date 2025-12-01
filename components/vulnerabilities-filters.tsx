"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const filterOptions = [
  { label: "Critical", value: 23, color: "bg-red-500/20 text-red-300" },
  { label: "High", value: 67, color: "bg-orange-500/20 text-orange-300" },
  { label: "Medium", value: 142, color: "bg-yellow-500/20 text-yellow-300" },
  { label: "Low", value: 289, color: "bg-cyan-500/20 text-cyan-300" },
]

const statusFilters = [
  { label: "Open", value: 345 },
  { label: "In Progress", value: 98 },
  { label: "Resolved", value: 78 },
]

export function VulnerabilitiesFilters() {
  return (
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle className="text-base">Filter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Severity</h4>
          <div className="space-y-2">
            {filterOptions.map((option) => (
              <button
                key={option.label}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-background/50 transition-colors"
              >
                <span className="text-sm text-muted-foreground">{option.label}</span>
                <Badge className={`text-xs ${option.color}`}>{option.value}</Badge>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Status</h4>
          <div className="space-y-2">
            {statusFilters.map((status) => (
              <button
                key={status.label}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-background/50 transition-colors"
              >
                <span className="text-sm text-muted-foreground">{status.label}</span>
                <Badge variant="outline">{status.value}</Badge>
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
