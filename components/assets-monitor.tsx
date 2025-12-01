"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const assetTypes = [
  { type: "Domains", count: 156, trend: "+8" },
  { type: "Subdomains", count: 1243, trend: "+34" },
  { type: "IP Addresses", count: 892, trend: "+12" },
  { type: "SSL Certs", count: 234, trend: "+2" },
  { type: "Open Ports", count: 1847, trend: "-23" },
  { type: "Services", count: 567, trend: "+5" },
]

export function AssetsMonitor() {
  return (
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle>Asset Inventory</CardTitle>
        <CardDescription>Active assets detected</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {assetTypes.map((asset) => (
          <div
            key={asset.type}
            className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background transition-colors"
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{asset.type}</p>
              <p className="text-xs text-muted-foreground">{(asset?.count ?? 0).toLocaleString()} detected</p>
            </div>
            <Badge variant="secondary" className="text-xs">
              {asset.trend}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

