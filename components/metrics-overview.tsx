"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp, ArrowDown, AlertCircle, Package, TrendingUp, Shield } from "lucide-react"

const metrics = [
  {
    title: "Total Assets",
    value: "2,847",
    change: "+12%",
    trend: "up",
    icon: Package,
    description: "Discovered external assets",
  },
  {
    title: "Critical Vulnerabilities",
    value: "23",
    change: "-5%",
    trend: "down",
    icon: AlertCircle,
    description: "Requires immediate attention",
  },
  {
    title: "Attack Surface Score",
    value: "6.8/10",
    change: "+0.3",
    trend: "up",
    icon: TrendingUp,
    description: "Overall security posture",
  },
  {
    title: "Monitored Domains",
    value: "156",
    change: "+4",
    trend: "up",
    icon: Shield,
    description: "Active monitoring targets",
  },
]

export function MetricsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        const TrendIcon = metric.trend === "up" ? ArrowUp : ArrowDown
        const trendColor =
          metric.trend === "up" && metric.title === "Critical Vulnerabilities"
            ? "text-green-500"
            : metric.trend === "up"
              ? "text-accent"
              : "text-green-500"

        return (
          <Card key={metric.title} className="bg-card/50 border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <Icon className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
              <div className={`flex items-center gap-1 mt-3 ${trendColor}`}>
                <TrendIcon className="w-4 h-4" />
                <span className="text-xs font-semibold">{metric.change}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
