"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, AlertTriangle, Info } from "lucide-react"

const events = [
  {
    id: 1,
    type: "critical",
    title: "Critical Vulnerability Detected",
    description: "SQL injection found in api.example.com",
    time: "2 hours ago",
    icon: AlertCircle,
  },
  {
    id: 2,
    type: "warning",
    title: "High Risk Asset Discovered",
    description: "Subdomain s3-backup.example.com with suspicious configuration",
    time: "4 hours ago",
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: "success",
    title: "Vulnerability Resolved",
    description: "CVE-2024-1236 remediated and verified",
    time: "6 hours ago",
    icon: CheckCircle,
  },
  {
    id: 4,
    type: "info",
    title: "Scan Completed",
    description: "Full external attack surface scan completed (1,234 assets)",
    time: "8 hours ago",
    icon: Info,
  },
  {
    id: 5,
    type: "critical",
    title: "Service Exposure Detected",
    description: "Database port 5432 exposed on 192.168.1.100",
    time: "1 day ago",
    icon: AlertCircle,
  },
]

const iconColors = {
  critical: "text-red-400",
  warning: "text-yellow-400",
  success: "text-green-400",
  info: "text-blue-400",
}

const bgColors = {
  critical: "bg-red-500/10",
  warning: "bg-yellow-500/10",
  success: "bg-green-500/10",
  info: "bg-blue-500/10",
}

export function MonitoringTimeline() {
  return (
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle>Activity Timeline</CardTitle>
        <CardDescription>Recent events and alerts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => {
            const Icon = event.icon
            return (
              <div key={event.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`p-2 rounded-full ${bgColors[event.type]}`}>
                    <Icon className={`w-5 h-5 ${iconColors[event.type]}`} />
                  </div>
                  {index < events.length - 1 && <div className="w-0.5 h-12 bg-border mt-2" />}
                </div>
                <div className="flex-1 pt-1">
                  <p className="font-medium text-sm text-foreground">{event.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{event.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">{event.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
