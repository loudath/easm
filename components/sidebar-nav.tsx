"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield, Network, AlertTriangle, Eye, Settings, Radio } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Dashboard", icon: Shield },
  { href: "/assets", label: "Assets", icon: Network },
  { href: "/vulnerabilities", label: "Vulnerabilities", icon: AlertTriangle },
  { href: "/monitoring", label: "Monitoring", icon: Radio },
  { href: "/reconnaissance", label: "Reconnaissance", icon: Eye },
  { href: "/settings", label: "Settings", icon: Settings },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-screen">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">SurfaceGuard</h1>
            <p className="text-xs text-sidebar-accent-foreground">EASM Platform</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="bg-sidebar-primary/10 rounded-lg p-3">
          <p className="text-xs text-sidebar-foreground font-semibold mb-1">System Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-sidebar-accent-foreground">All Services Online</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
