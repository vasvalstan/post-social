import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    name: "Sarah Johnson",
    handle: "@sarahj_creates",
    avatar: "/api/placeholder/40/40",
    content: "Post Bridge has been the best investment for my content strategy. Saves me hours every week!",
    verified: true
  },
  {
    name: "Mike Chen",
    handle: "@mikec_digital",
    avatar: "/api/placeholder/40/40",
    content: "Finally, a tool that actually works across all platforms. No more manual posting!",
    verified: true
  },
  {
    name: "Emma Wilson",
    handle: "@emmaw_social",
    avatar: "/api/placeholder/40/40",
    content: "The scheduling feature is a game-changer. My engagement has never been better.",
    verified: true
  },
  {
    name: "David Rodriguez",
    handle: "@davidr_content",
    avatar: "/api/placeholder/40/40",
    content: "Love how easy it is to customize content for each platform. Highly recommend!",
    verified: true
  },
  {
    name: "Lisa Park",
    handle: "@lisap_creator",
    avatar: "/api/placeholder/40/40",
    content: "Post Bridge simplified my entire workflow. Can't imagine managing content without it.",
    verified: true
  },
  {
    name: "Alex Thompson",
    handle: "@alext_media",
    avatar: "/api/placeholder/40/40",
    content: "The time savings alone make this worth every penny. Plus the results speak for themselves!",
    verified: true
  }
]

export function TestimonialsSection() {
  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Loved by creators worldwide
        </h2>
        <p className="text-gray-600 text-lg">
          See what our users are saying about Post Bridge
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="flex items-start gap-3 mb-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <Badge variant="secondary" className="text-xs">
                        ✓
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm">{testimonial.handle}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 