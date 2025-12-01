import { DashboardHeader } from "@/components/dashboard-header"
import { SidebarNav } from "@/components/sidebar-nav"
import { AssetsTable } from "@/components/assets-table"
import { AssetsFilters } from "@/components/assets-filters"
import { AssetsStats } from "@/components/assets-stats"

export default function AssetsPage() {
  return (
    <div className="flex h-screen bg-background">
      <SidebarNav />
      <main className="flex-1 overflow-auto">
        <DashboardHeader />
        <div className="p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">External Assets</h1>
            <p className="text-muted-foreground">Discover and monitor all assets detected on your attack surface</p>
          </div>

          <AssetsStats />
          <AssetsFilters />
          <AssetsTable />
        </div>
      </main>
    </div>
  )
}
