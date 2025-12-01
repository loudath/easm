"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { Plus } from "lucide-react"

const alertRules = [
  {
    id: 1,
    name: "Critical Vulnerability Found",
    condition: "Severity = Critical",
    enabled: true,
    notifyChannels: ["Email", "Slack"],
  },
  {
    id: 2,
    name: "New Subdomain Detected",
    condition: "Asset Type = Subdomain",
    enabled: true,
    notifyChannels: ["Email"],
  },
  {
    id: 3,
    name: "SSL Certificate Expiring",
    condition: "Days until expiry < 30",
    enabled: true,
    notifyChannels: ["Email", "Webhook"],
  },
  {
    id: 4,
    name: "Service Change Detected",
    condition: "Service fingerprint != previous",
    enabled: false,
    notifyChannels: ["Slack"],
  },
]

export function AlertRules() {
  return (
    <Card className="bg-card/50 border-border">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-base">Alert Rules</CardTitle>
          <CardDescription className="text-xs">Customize monitoring rules</CardDescription>
        </div>
        <Button size="sm" variant="outline" className="gap-1 bg-transparent">
          <Plus className="w-4 h-4" />
          Add
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {alertRules.map((rule) => (
          <div
            key={rule.id}
            className="p-3 rounded-lg bg-background/50 space-y-2 hover:bg-background/80 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="font-medium text-sm text-foreground">{rule.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{rule.condition}</p>
              </div>
              <Toggle
                pressed={rule.enabled}
                className="h-6 w-10 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              />
            </div>
            <div className="flex items-center gap-1 flex-wrap">
              {rule.notifyChannels.map((channel) => (
                <Badge key={channel} variant="secondary" className="text-xs">
                  {channel}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
