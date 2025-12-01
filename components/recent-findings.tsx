"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar } from "lucide-react"

const findings = [
  {
    id: 1,
    title: "SQL Injection Vulnerability",
    domain: "api.example.com",
    severity: "Critical",
    discovered: "2 hours ago",
    status: "Active",
  },
  {
    id: 2,
    title: "Exposed S3 Bucket",
    domain: "s3.example.com",
    severity: "Critical",
    discovered: "5 hours ago",
    status: "Active",
  },
  {
    id: 3,
    title: "Weak SSL Configuration",
    domain: "secure.example.com",
    severity: "High",
    discovered: "12 hours ago",
    status: "Active",
  },
  {
    id: 4,
    title: "Default Credentials",
    domain: "admin.example.com",
    severity: "High",
    discovered: "1 day ago",
    status: "Investigating",
  },
  {
    id: 5,
    title: "Outdated Framework",
    domain: "app.example.com",
    severity: "Medium",
    discovered: "2 days ago",
    status: "Resolved",
  },
]

const severityColors = {
  Critical: "bg-chart-1 text-white",
  High: "bg-chart-2 text-white",
  Medium: "bg-chart-3 text-black",
  Low: "bg-chart-4 text-black",
}

const statusColors = {
  Active: "bg-red-500/20 text-red-300",
  Investigating: "bg-yellow-500/20 text-yellow-300",
  Resolved: "bg-green-500/20 text-green-300",
}

export function RecentFindings() {
  return (
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle>Recent Findings</CardTitle>
        <CardDescription>Latest vulnerabilities discovered across your attack surface</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {findings.map((finding) => (
            <div
              key={finding.id}
              className="flex items-start justify-between p-4 rounded-lg bg-background/50 hover:bg-background transition-colors border border-border/50"
            >
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-foreground text-sm">{finding.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {finding.domain}
                  </Badge>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {finding.discovered}
                  </div>
                  <Badge className={`text-xs ${statusColors[finding.status]}`}>{finding.status}</Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className={`text-xs ${severityColors[finding.severity]}`}>{finding.severity}</Badge>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
