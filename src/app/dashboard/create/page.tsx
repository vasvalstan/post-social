import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  FileTextIcon, 
  ImageIcon, 
  VideoIcon,
  InfoIcon
} from "lucide-react"

// Social platform icons component
const SocialPlatformIcons = ({ platforms }: { platforms: string[] }) => {
  const platformIcons: Record<string, string> = {
    facebook: "F",
    x: "X", 
    linkedin: "Li",
    threads: "T",
    twitter: "Tw",
    instagram: "Ig",
    pinterest: "P",
    tiktok: "Tk",
    youtube: "Yt"
  }

  return (
    <div className="flex gap-2 mt-4">
      {platforms.map((platform) => (
        <div 
          key={platform}
          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium text-gray-600"
        >
          {platformIcons[platform] || platform.charAt(0).toUpperCase()}
        </div>
      ))}
    </div>
  )
}

const postTypes = [
  {
    title: "Text Post",
    icon: FileTextIcon,
    platforms: ["facebook", "x", "linkedin", "threads", "twitter"]
  },
  {
    title: "Image Post", 
    icon: ImageIcon,
    platforms: ["facebook", "x", "linkedin", "threads", "twitter", "instagram", "pinterest", "tiktok"]
  },
  {
    title: "Video Post",
    icon: VideoIcon,
    platforms: ["facebook", "linkedin", "threads", "twitter", "instagram", "pinterest", "tiktok", "youtube"]
  }
]

export default function CreatePostPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Create a new post</h1>
      </div>

      {/* Post Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {postTypes.map((postType) => {
          const Icon = postType.icon
          return (
            <Card 
              key={postType.title}
              className="cursor-pointer hover:shadow-md transition-shadow border-2 border-dashed border-gray-200 hover:border-gray-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {postType.title}
                </h3>
                <SocialPlatformIcons platforms={postType.platforms} />
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Connect Accounts Banner */}
      <div className="bg-blue-50 rounded-lg p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InfoIcon className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-900">
            Connect your social media accounts
          </span>
        </div>
        <Link href="/dashboard/connections">
          <Button className="bg-green-600 hover:bg-green-700">
            Connect Accounts
          </Button>
        </Link>
      </div>
    </div>
  )
} 