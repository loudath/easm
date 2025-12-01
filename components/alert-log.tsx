"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Archive, MoreVertical } from "lucide-react"

const alerts = [
  {
    id: 1,
    trigger: "Critical Severity Threshold",
    message: "SQL Injection vulnerability found in api.example.com/login endpoint",
    timestamp: "2024-12-01 14:32:18",
    channel: "Email, Slack",
    status: "Delivered",
  },
  {
    id: 2,
    trigger: "New Asset Detected",
    message: "New subdomain discovered: internal-api.example.com",
    timestamp: "2024-12-01 12:15:45",
    channel: "Email",
    status: "Delivered",
  },
  {
    id: 3,
    trigger: "Certificate Expiry Warning",
    message: "SSL certificate for example.com expires in 28 days",
    timestamp: "2024-12-01 10:00:22",
    channel: "Email, Webhook",
    status: "Delivered",
  },
  {
    id: 4,
    trigger: "Service Change",
    message: "Apache version changed on web.example.com",
    timestamp: "2024-11-30 23:45:10",
    channel: "Email",
    status: "Delivered",
  },
  {
    id: 5,
    trigger: "High Risk Asset",
    message: "s3-backup.example.com shows signs of misconfiguration",
    timestamp: "2024-11-30 18:22:55",
    channel: "Email, Slack, Webhook",
    status: "Delivered",
  },
]

export function AlertLog() {
  return (
    <Card className="bg-card/50 border-border">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle>Alert Log</CardTitle>
          <CardDescription>Complete history of all triggered alerts</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Archive className="w-4 h-4" />
          Archive Old
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Trigger Rule</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Message</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Timestamp</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Channel</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Status</th>
                <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert) => (
                <tr key={alert.id} className="border-b border-border/50 hover:bg-background/30 transition-colors">
                  <td className="py-4 px-4">
                    <Badge variant="outline" className="text-xs">
                      {alert.trigger}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground text-xs max-w-xs">{alert.message}</td>
                  <td className="py-4 px-4 text-muted-foreground text-xs">{alert.timestamp}</td>
                  <td className="py-4 px-4 text-xs">
                    <div className="flex items-center gap-1 flex-wrap">
                      {alert.channel.split(", ").map((ch) => (
                        <Badge key={ch} className="text-xs bg-secondary/20 text-secondary-foreground">
                          {ch}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className="text-xs bg-green-500/20 text-green-300">{alert.status}</Badge>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
