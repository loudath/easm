import { DashboardHeader } from "@/components/dashboard-header"
import { SidebarNav } from "@/components/sidebar-nav"
import { VulnerabilitiesStats } from "@/components/vulnerabilities-stats"
import { VulnerabilitiesFilters } from "@/components/vulnerabilities-filters"
import { VulnerabilitiesTable } from "@/components/vulnerabilities-table"
import { VulnerabilitiesTrend } from "@/components/vulnerabilities-trend"

export default function VulnerabilitiesPage() {
  return (
    <div className="flex h-screen bg-background">
      <SidebarNav />
      <main className="flex-1 overflow-auto">
        <DashboardHeader />
        <div className="p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Vulnerabilities</h1>
            <p className="text-muted-foreground">
              Track and manage all identified security vulnerabilities across your attack surface
            </p>
          </div>

          <VulnerabilitiesStats />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <VulnerabilitiesTrend />
            </div>
            <div>
              <VulnerabilitiesFilters />
            </div>
          </div>
          <VulnerabilitiesTable />
        </div>
      </main>
    </div>
  )
}
