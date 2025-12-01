"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, MessageSquare } from "lucide-react"

const vulnerabilities = [
  {
    id: 1,
    title: "SQL Injection in Login Form",
    cveId: "CVE-2024-1234",
    severity: "Critical",
    asset: "api.example.com",
    discovered: "2024-12-01",
    status: "Open",
    epss: 9.8,
  },
  {
    id: 2,
    title: "Exposed S3 Bucket with Public Access",
    cveId: "CVE-2024-1235",
    severity: "Critical",
    asset: "s3.example.com",
    discovered: "2024-11-30",
    status: "Open",
    epss: 9.5,
  },
  {
    id: 3,
    title: "Weak SSL/TLS Configuration",
    cveId: "CVE-2024-1236",
    severity: "High",
    asset: "secure.example.com",
    discovered: "2024-11-29",
    status: "In Progress",
    epss: 8.2,
  },
  {
    id: 4,
    title: "Default Credentials on Admin Panel",
    cveId: "CVE-2024-1237",
    severity: "High",
    asset: "admin.example.com",
    discovered: "2024-11-28",
    status: "In Progress",
    epss: 8.7,
  },
  {
    id: 5,
    title: "Outdated Apache Server Version",
    cveId: "CVE-2024-1238",
    severity: "Medium",
    asset: "web.example.com",
    discovered: "2024-11-27",
    status: "Resolved",
    epss: 6.5,
  },
  {
    id: 6,
    title: "Missing Rate Limiting on API",
    cveId: "CVE-2024-1239",
    severity: "Medium",
    asset: "api.example.com",
    discovered: "2024-11-26",
    status: "Open",
    epss: 7.2,
  },
]

const severityColors = {
  Critical: "bg-red-500/20 text-red-300 border-red-500/30",
  High: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Medium: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Low: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
}

const statusBadges = {
  Open: "bg-red-500/20 text-red-300",
  "In Progress": "bg-yellow-500/20 text-yellow-300",
  Resolved: "bg-green-500/20 text-green-300",
}

export function VulnerabilitiesTable() {
  return (
    <Card className="bg-card/50 border-border">
      <CardHeader>
        <CardTitle>Vulnerability Details</CardTitle>
        <CardDescription>Full list of discovered vulnerabilities with remediation tracking</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Vulnerability</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">CVE ID</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Severity</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Asset</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">EPSS Score</th>
                <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vulnerabilities.map((vuln) => (
                <tr key={vuln.id} className="border-b border-border/50 hover:bg-background/30 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-foreground">{vuln.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{vuln.discovered}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground">{vuln.cveId}</td>
                  <td className="py-4 px-4">
                    <Badge className={`text-xs border ${severityColors[vuln.severity]}`}>{vuln.severity}</Badge>
                  </td>
                  <td className="py-4 px-4 text-muted-foreground text-xs">{vuln.asset}</td>
                  <td className="py-4 px-4">
                    <Badge className={`text-xs ${statusBadges[vuln.status]}`}>{vuln.status}</Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      <span
                        className={`font-semibold ${vuln.epss > 8 ? "text-red-400" : vuln.epss > 6 ? "text-yellow-400" : "text-green-400"}`}
                      >
                        {vuln.epss}
                      </span>
                      <span className="text-xs text-muted-foreground">/10</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
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
