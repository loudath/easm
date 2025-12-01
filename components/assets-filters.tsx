"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AssetsFilters() {
  const [search, setSearch] = useState("")

  return (
    <Card className="bg-card/50 border-border">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by domain, IP, or certificate..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-input border-border"
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <button className="px-3 py-1 rounded-full text-xs bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
            All Assets
          </button>
          <button className="px-3 py-1 rounded-full text-xs bg-background hover:bg-background/80 text-muted-foreground border border-border transition-colors">
            Domains
          </button>
          <button className="px-3 py-1 rounded-full text-xs bg-background hover:bg-background/80 text-muted-foreground border border-border transition-colors">
            Subdomains
          </button>
          <button className="px-3 py-1 rounded-full text-xs bg-background hover:bg-background/80 text-muted-foreground border border-border transition-colors">
            IP Addresses
          </button>
          <button className="px-3 py-1 rounded-full text-xs bg-background hover:bg-background/80 text-muted-foreground border border-border transition-colors">
            Services
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
