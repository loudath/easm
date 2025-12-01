"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, AlertCircle } from "lucide-react"

const assets = [
  {
    id: 1,
    name: "api.example.com",
    type: "Domain",
    discovered: "2024-12-01",
    riskLevel: "Critical",
    vulnerabilities: 5,
    lastScanned: "2 hours ago",
    status: "Active",
  },
  {
    id: 2,
    name: "cdn.example.com",
    type: "Subdomain",
    discovered: "2024-11-28",
    riskLevel: "High",
    vulnerabilities: 2,
    lastScanned: "1 hour ago",
    status: "Active",
  },
  {
    id: 3,
    name: "192.168.1.100",
    type: "IP Address",
    discovered: "2024-11-25",
    riskLevel: "Medium",
    vulnerabilities: 1,
    lastScanned: "4 hours ago",
    status: "Active",
  },
  {
    id: 4,
    name: "mail.example.com",
    type: "Domain",
    discovered: "2024-11-20",
    riskLevel: "Low",
    vulnerabilities: 0,
    lastScanned: "12 hours ago",
    status: "Active",
  },
  {
    id: 5,
    name: "s3-backup.example.com",
    type: "Subdomain",
    discovered: "2024-11-15",
    riskLevel: "Critical",
    vulnerabilities: 8,
    lastScanned: "3 hours ago",
    status: "Suspicious",
  },
  {
    id: 6,
    name: "10.0.0.50",
    type: "IP Address",
    discovered: "2024-11-10",
    riskLevel: "Medium",
    vulnerabilities: 2,
    lastScanned: "6 hours ago",
    status: "Active",
  },
]

const riskColors = {
  Critical: "bg-red-500/20 text-red-300 border-red-500/30",
  High: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Medium: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Low: "bg-green-500/20 text-green-300 border-green-500/30",
}

const typeColors = {
  Domain: "bg-blue-500/20 text-blue-300",
  Subdomain: "bg-cyan-500/20 text-cyan-300",
  "IP Address": "bg-purple-500/20 text-purple-300",
  Service: "bg-pink-500/20 text-pink-300",
}

export function AssetsTable() {
  return (
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle>Asset Inventory</CardTitle>
        <CardDescription>Complete list of discovered external assets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Asset Name</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Risk Level</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Vulnerabilities</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Last Scanned</th>
                <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.id} className="border-b border-border/50 hover:bg-background/30 transition-colors">
                  <td className="py-4 px-4 font-medium text-foreground">{asset.name}</td>
                  <td className="py-4 px-4">
                    <Badge className={`text-xs ${typeColors[asset.type]}`}>{asset.type}</Badge>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className={`text-xs border ${riskColors[asset.riskLevel]}`}>{asset.riskLevel}</Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      {asset.vulnerabilities > 0 ? (
                        <>
                          <AlertCircle className="w-4 h-4 text-accent" />
                          <span className="font-semibold text-accent">{asset.vulnerabilities}</span>
                        </>
                      ) : (
                        <span className="text-green-400">Clean</span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge
                      variant="outline"
                      className={
                        asset.status === "Suspicious" ? "bg-accent/20 text-accent" : "bg-green-500/20 text-green-300"
                      }
                    >
                      {asset.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">{asset.lastScanned}</td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-primary hover:text-primary/80 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
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
