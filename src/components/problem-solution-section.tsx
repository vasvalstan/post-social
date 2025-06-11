import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Check } from "lucide-react"

const problems = [
  {
    problem: "Manual posting to each platform",
    solution: "One-click cross-platform posting"
  },
  {
    problem: "Expensive social media tools",
    solution: "Affordable pricing starting at $9/month"
  },
  {
    problem: "Complex features you don't need",
    solution: "Simple, focused tools that work"
  },
  {
    problem: "Steep learning curves",
    solution: "Intuitive interface, get started in minutes"
  }
]

export function ProblemSolutionSection() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">
            The Problem
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Posting content shouldn't be this hard
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Social media management tools are either too expensive, too complicated, or simply don't work well. 
            We built Post Bridge to solve these exact problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Problems side */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
              The Old Way 😤
            </h3>
            <div className="space-y-4">
              {problems.map((item, index) => (
                <Card key={index} className="border-red-200 bg-red-50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{item.problem}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions side */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
              The Post Bridge Way ✨
            </h3>
            <div className="space-y-4">
              {problems.map((item, index) => (
                <Card key={index} className="border-green-200 bg-green-50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item.solution}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional pain points */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-center mb-8">
            Stop wasting time on:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">⏰</span>
              </div>
              <h4 className="font-semibold mb-2">Time Management</h4>
              <p className="text-sm text-gray-600">Hours spent manually posting to each platform</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">💸</span>
              </div>
              <h4 className="font-semibold mb-2">High Costs</h4>
              <p className="text-sm text-gray-600">Expensive enterprise tools with unused features</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🤯</span>
              </div>
              <h4 className="font-semibold mb-2">Complexity</h4>
              <p className="text-sm text-gray-600">Confusing interfaces that require training</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold mb-2">Platform Jumping</h4>
              <p className="text-sm text-gray-600">Logging into multiple apps and websites</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 