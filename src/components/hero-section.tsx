import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Check } from "lucide-react"
import {
  SignUpButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import Link from "next/link"

// Social platform icons - you might want to replace these with actual brand icons
const SocialIcon = ({ name, className }: { name: string; className?: string }) => (
  <div className={`w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold ${className}`}>
    {name.charAt(0)}
  </div>
)

export function HeroSection() {
  return (
    <section className="px-4 py-16 text-center max-w-6xl mx-auto">
      {/* Social platform icons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <SocialIcon name="X" className="bg-black text-white" />
        <SocialIcon name="I" className="bg-gradient-to-br from-purple-600 to-pink-500 text-white" />
        <SocialIcon name="L" className="bg-blue-600 text-white" />
        <SocialIcon name="F" className="bg-blue-700 text-white" />
        <SocialIcon name="T" className="bg-red-500 text-white" />
        <SocialIcon name="Y" className="bg-red-600 text-white" />
        <SocialIcon name="B" className="bg-blue-400 text-white" />
        <SocialIcon name="T" className="bg-gray-800 text-white" />
        <SocialIcon name="P" className="bg-red-600 text-white" />
      </div>

      {/* Main headline */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Schedule your content everywhere in{" "}
        <span className="text-blue-600">seconds</span>
      </h1>

      {/* Value propositions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
        {[
          "Post to all major platforms in one click",
          "Schedule content for the perfect posting time",
          "Customize content for each platform",
          "Generate viral videos using studio templates"
        ].map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-left">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mb-8">
        <SignedOut>
          <SignUpButton mode="modal">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              Start scheduling for free
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <Link href="/dashboard/create">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              Go to Dashboard
            </Button>
          </Link>
        </SignedIn>
      </div>

      {/* Social proof */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Avatar key={i} className="w-8 h-8 border-2 border-white">
              <AvatarImage src={`/api/placeholder/32/32`} />
              <AvatarFallback>U{i}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-sm text-gray-600">Loved by 2,500 creators</span>
      </div>

      {/* Featured badges */}
      <div className="flex justify-center gap-4 flex-wrap">
        <Badge variant="outline" className="px-3 py-1">
          Featured on Starter Story
        </Badge>
        <Badge variant="outline" className="px-3 py-1">
          Tiny Launch
        </Badge>
        <Badge variant="outline" className="px-3 py-1">
          Product Hunt
        </Badge>
      </div>
    </section>
  )
} 