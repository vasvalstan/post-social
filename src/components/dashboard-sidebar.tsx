"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { UserButton, useUser } from "@clerk/nextjs"
import { 
  PlusIcon, 
  FileTextIcon, 
  ImageIcon, 
  VideoIcon,
  CalendarIcon,
  FileIcon,
  ClockIcon,
  CheckIcon,
  DraftingCompassIcon,
  UserIcon
} from "lucide-react"

const navigation = [
  {
    name: "Create",
    items: [
      { name: "Create post", href: "/dashboard/create", icon: PlusIcon, active: true },
      { name: "New post", href: "/dashboard/create", icon: FileTextIcon, current: true },
      { name: "Studio", href: "/dashboard/studio", icon: ImageIcon },
      { name: "Multi post", href: "/dashboard/multi-post", icon: VideoIcon },
    ]
  },
  {
    name: "Posts", 
    items: [
      { name: "Calendar", href: "/dashboard/calendar", icon: CalendarIcon },
      { name: "All", href: "/dashboard/posts", icon: FileIcon },
      { name: "Scheduled", href: "/dashboard/scheduled", icon: ClockIcon },
      { name: "Posted", href: "/dashboard/posted", icon: CheckIcon },
      { name: "Drafts", href: "/dashboard/drafts", icon: DraftingCompassIcon },
    ]
  },
  {
    name: "Configuration",
    items: [
      { name: "Accounts", href: "/dashboard/connections", icon: UserIcon },
    ]
  }
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const { user } = useUser()

  return (
    <div className="fixed inset-y-0 left-0 w-60 bg-white border-r border-gray-200">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center gap-2 p-6 border-b border-gray-200">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PB</span>
          </div>
          <span className="text-xl font-bold">post bridge</span>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6 space-y-8">
          {navigation.map((section) => (
            <div key={section.name}>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                {section.name}
              </h3>
              <nav className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href || item.current
                  const Icon = item.icon
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors
                        ${isActive 
                          ? 'bg-green-100 text-green-700' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
            </div>
          ))}
        </div>

        {/* User Account */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10"
                }
              }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                Account
              </p>
              <Badge variant="secondary" className="text-xs">
                Starter Plan
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 