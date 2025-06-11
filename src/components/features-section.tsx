import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Zap, Settings, Video, Clock, Target } from "lucide-react"

const features = [
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: "Cross-Platform Posting",
    description: "Post to all major social platforms with a single click. No more logging into multiple accounts.",
    benefits: ["One-click posting", "All major platforms", "Consistent branding"]
  },
  {
    icon: <Calendar className="w-8 h-8 text-green-600" />,
    title: "Smart Scheduling", 
    description: "Schedule your content for optimal engagement times across different platforms and time zones.",
    benefits: ["Optimal timing", "Multiple time zones", "Auto-scheduling"]
  },
  {
    icon: <Settings className="w-8 h-8 text-purple-600" />,
    title: "Content Customization",
    description: "Tailor your content for each platform's unique requirements and audience preferences.",
    benefits: ["Platform optimization", "Custom formatting", "Audience targeting"]
  },
  {
    icon: <Video className="w-8 h-8 text-red-600" />,
    title: "Content Studio",
    description: "Create viral videos using proven templates with our plug-and-play editor.",
    benefits: ["Viral templates", "Easy editing", "Proven results"]
  },
  {
    icon: <Clock className="w-8 h-8 text-orange-600" />,
    title: "Time Savings",
    description: "Save hours every week with automated posting and streamlined content management.",
    benefits: ["3+ hours weekly", "Automated workflow", "Bulk operations"]
  },
  {
    icon: <Target className="w-8 h-8 text-indigo-600" />,
    title: "Analytics & Insights",
    description: "Track performance across platforms and optimize your content strategy with detailed analytics.",
    benefits: ["Cross-platform analytics", "Performance insights", "Strategy optimization"]
  }
]

export function FeaturesSection() {
  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to scale your content
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Post Bridge provides all the tools you need to create, schedule, and manage your social media content efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="pb-4">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Time saved with Post Bridge</h3>
            <p className="text-gray-600">Real metrics from our users</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">3h 4m</div>
              <div className="text-gray-600">Saved weekly</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">13 days</div>
              <div className="text-gray-600">Saved yearly</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">2,500+</div>
              <div className="text-gray-600">Happy creators</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 