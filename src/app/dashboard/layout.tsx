import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 ml-60">
          {children}
        </main>
      </div>
    </div>
  )
} 