import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    price: 9,
    description: "Perfect for individual creators getting started",
    features: [
      { name: "3 social accounts", included: true },
      { name: "30 posts per month", included: true },
      { name: "Basic scheduling", included: true },
      { name: "Email support", included: true },
      { name: "Analytics dashboard", included: false },
      { name: "Team collaboration", included: false },
      { name: "Advanced templates", included: false },
      { name: "Priority support", included: false }
    ],
    popular: false,
    cta: "Start Free Trial"
  },
  {
    name: "Creator",
    price: 18,
    description: "Ideal for growing creators and small businesses",
    features: [
      { name: "10 social accounts", included: true },
      { name: "100 posts per month", included: true },
      { name: "Advanced scheduling", included: true },
      { name: "Priority email support", included: true },
      { name: "Analytics dashboard", included: true },
      { name: "Content templates", included: true },
      { name: "Team collaboration", included: false },
      { name: "Priority support", included: false }
    ],
    popular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Pro",
    price: 27,
    description: "For agencies and teams who need everything",
    features: [
      { name: "Unlimited social accounts", included: true },
      { name: "Unlimited posts", included: true },
      { name: "Advanced scheduling", included: true },
      { name: "Priority support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "All content templates", included: true },
      { name: "Team collaboration", included: true },
      { name: "White-label options", included: true }
    ],
    popular: false,
    cta: "Start Free Trial"
  }
]

export function PricingSection() {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include a 7-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 border-2 shadow-xl' : 'shadow-lg'} hover:shadow-xl transition-shadow`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <Button 
                  className={`w-full mb-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                  size="lg"
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center space-y-4">
          <p className="text-gray-600">
            All plans include a 7-day free trial. No credit card required.
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ No setup fees</span>
            <span>✓ 24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  )
} 