import { DashboardHeader } from "@/components/dashboard-header"
import { SidebarNav } from "@/components/sidebar-nav"
import { MonitoringStats } from "@/components/monitoring-stats"
import { AlertRules } from "@/components/alert-rules"
import { AlertLog } from "@/components/alert-log"
import { MonitoringTimeline } from "@/components/monitoring-timeline"

export default function MonitoringPage() {
  return (
    <div className="flex h-screen bg-background">
      <SidebarNav />
      <main className="flex-1 overflow-auto">
        <DashboardHeader />
        <div className="p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Monitoring & Alerts</h1>
            <p className="text-muted-foreground">
              Real-time monitoring of your attack surface with intelligent alerting
            </p>
          </div>

          <MonitoringStats />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <MonitoringTimeline />
            </div>
            <div>
              <AlertRules />
            </div>
          </div>
          <AlertLog />
        </div>
      </main>
    </div>
  )
}
