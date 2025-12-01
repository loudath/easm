"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const trendData = [
  { week: "Week 1", discovered: 45, resolved: 12 },
  { week: "Week 2", discovered: 52, resolved: 18 },
  { week: "Week 3", discovered: 38, resolved: 25 },
  { week: "Week 4", discovered: 61, resolved: 32 },
  { week: "Week 5", discovered: 49, resolved: 28 },
  { week: "Week 6", discovered: 42, resolved: 35 },
]

export function VulnerabilitiesTrend() {
  return (
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle>Vulnerability Trend</CardTitle>
        <CardDescription>Last 6 weeks comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" />
            <XAxis dataKey="week" stroke="hsl(var(--color-muted-foreground))" />
            <YAxis stroke="hsl(var(--color-muted-foreground))" />
            <Tooltip
              contentStyle={{ backgroundColor: "hsl(var(--color-card))", border: "1px solid hsl(var(--color-border))" }}
              labelStyle={{ color: "hsl(var(--color-foreground))" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="discovered"
              stroke="hsl(var(--color-chart-2))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--color-chart-2))" }}
              name="Discovered"
            />
            <Line
              type="monotone"
              dataKey="resolved"
              stroke="hsl(var(--color-chart-4))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--color-chart-4))" }}
              name="Resolved"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
