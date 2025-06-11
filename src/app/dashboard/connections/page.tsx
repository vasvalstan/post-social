import { Button } from "@/components/ui/button"
import { 
  CameraIcon,
  PlayIcon,
  MusicIcon,
  AtSignIcon
} from "lucide-react"

// Custom icons for social platforms using simple shapes/letters
const InstagramIcon = () => (
  <div className="w-6 h-6 border-2 border-current rounded-lg flex items-center justify-center">
    <div className="w-2 h-2 border border-current rounded-full"></div>
  </div>
)

const TwitterIcon = () => (
  <div className="w-6 h-6 flex items-center justify-center">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </div>
)

const YouTubeIcon = () => (
  <div className="w-6 h-6 bg-current rounded flex items-center justify-center">
    <PlayIcon className="w-3 h-3 text-white ml-0.5" />
  </div>
)

const TikTokIcon = () => (
  <div className="w-6 h-6 flex items-center justify-center">
    <MusicIcon className="w-5 h-5" />
  </div>
)

const FacebookIcon = () => (
  <div className="w-6 h-6 bg-current rounded flex items-center justify-center text-white font-bold text-sm">
    f
  </div>
)

const LinkedInIcon = () => (
  <div className="w-6 h-6 bg-current rounded flex items-center justify-center text-white font-bold text-xs">
    in
  </div>
)

const BlueSkyIcon = () => (
  <div className="w-6 h-6 flex items-center justify-center">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v-.07zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  </div>
)

const ThreadsIcon = () => (
  <div className="w-6 h-6 flex items-center justify-center">
    <AtSignIcon className="w-5 h-5" />
  </div>
)

const PinterestIcon = () => (
  <div className="w-6 h-6 bg-current rounded-full flex items-center justify-center text-white font-bold text-sm">
    P
  </div>
)

const socialPlatforms = [
  { name: "Instagram", icon: InstagramIcon, color: "text-pink-600" },
  { name: "Twitter", icon: TwitterIcon, color: "text-blue-500" },
  { name: "Youtube", icon: YouTubeIcon, color: "text-red-600" },
  { name: "Tiktok", icon: TikTokIcon, color: "text-black" },
  { name: "Facebook", icon: FacebookIcon, color: "text-blue-600" },
  { name: "Linkedin", icon: LinkedInIcon, color: "text-blue-700" },
  { name: "Bluesky", icon: BlueSkyIcon, color: "text-blue-500" },
  { name: "Threads", icon: ThreadsIcon, color: "text-black" },
  { name: "Pinterest", icon: PinterestIcon, color: "text-red-600" },
]

export default function ConnectionsPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Connected Accounts</h1>
      </div>

      {/* Social Platform Connection Buttons */}
      <div className="space-y-4 max-w-md">
        {socialPlatforms.map((platform) => {
          const Icon = platform.icon
          return (
            <Button
              key={platform.name}
              variant="outline"
              className="w-full justify-start h-12 bg-gray-800 hover:bg-gray-700 text-white border-gray-700 hover:border-gray-600"
            >
              <div className={`mr-3 ${platform.color}`}>
                <Icon />
              </div>
              Connect {platform.name}
            </Button>
          )
        })}
      </div>
    </div>
  )
} 