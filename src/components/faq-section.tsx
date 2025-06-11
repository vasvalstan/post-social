"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Which social platforms does Post Bridge support?",
    answer: "Post Bridge supports all major social media platforms including Twitter/X, Instagram, LinkedIn, Facebook, TikTok, YouTube, Bluesky, Threads, and Pinterest. We're constantly adding support for new platforms."
  },
  {
    question: "How many social accounts can I connect?",
    answer: "The number of accounts depends on your plan. Starter allows 3 accounts, Creator allows 10 accounts, and Pro includes unlimited accounts. You can upgrade anytime if you need more."
  },
  {
    question: "Can I customize content for each platform?",
    answer: "Absolutely! Post Bridge allows you to customize your content for each platform's unique requirements, including different image sizes, character limits, hashtags, and formatting."
  },
  {
    question: "Will using Post Bridge affect my reach?",
    answer: "No, Post Bridge posts directly through official APIs and doesn't use any techniques that could negatively impact your reach. Many users actually see improved engagement due to optimal timing."
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "You can cancel anytime with no cancellation fees. Your account will remain active until the end of your billing period, and you'll retain access to all your scheduled posts."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! All plans come with a 7-day free trial. No credit card required to start your trial."
  },
  {
    question: "Can I schedule video content?",
    answer: "Yes, Post Bridge supports video content for all platforms that accept videos. Our Content Studio also includes viral video templates to help you create engaging content."
  },
  {
    question: "Is there an API available?",
    answer: "Yes, we offer API access for Pro plan users who want to integrate Post Bridge with their existing tools and workflows."
  }
]

export function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-600 text-lg">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index)
            
            return (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                  >
                    <h3 className="font-semibold text-lg pr-4">
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
} 