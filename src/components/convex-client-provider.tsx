"use client"

import { ReactNode } from "react"
import { ConvexReactClient } from "convex/react"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { useAuth } from "@clerk/nextjs"

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL

// Only create convex client if URL is available
const convex = convexUrl ? new ConvexReactClient(convexUrl) : null

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
  // If no Convex URL is provided, just render children without Convex provider
  if (!convex) {
    return <>{children}</>
  }

  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  )
} 