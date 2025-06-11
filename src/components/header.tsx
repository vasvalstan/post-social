import { Button } from "@/components/ui/button"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PB</span>
            </div>
            <span className="text-xl font-bold">Post Bridge</span>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Authentication - Clerk Components */}
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" className="hidden sm:inline-flex">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Start Free Trial
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Dashboard
              </Button>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10"
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  )
} 