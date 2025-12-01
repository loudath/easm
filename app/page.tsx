import { DashboardHeader } from "@/components/dashboard-header"
import { SidebarNav } from "@/components/sidebar-nav"
import { MetricsOverview } from "@/components/metrics-overview"
import { VulnerabilityChart } from "@/components/vulnerability-chart"
import { RecentFindings } from "@/components/recent-findings"
import { AssetsMonitor } from "@/components/assets-monitor"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background">
      <SidebarNav />
      <main className="flex-1 overflow-auto">
        <DashboardHeader />
        <div className="p-8 space-y-8">
          <MetricsOverview />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <VulnerabilityChart />
            </div>
            <div>
              <AssetsMonitor />
            </div>
          </div>
          <RecentFindings />
        </div>
      </main>
    </div>
  )
}
