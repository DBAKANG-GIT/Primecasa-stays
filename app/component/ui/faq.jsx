"use client"
import React, { useState } from "react"

const faqs = [
  {
    question: "What types of accommodations do you offer?",
    answer:
      "We offer a variety of fully furnished luxury accommodations including apartments, condos, and houses. All our properties come with hotel-comparable amenities and are available for short-term, business, leisure, and relocation stays.",
  },
  {
    question: "What is included in the serviced accommodations?",
    answer:
      "Our serviced accommodations include free WiFi, fully equipped kitchens, clean bed linens and towels, dedicated cleaning services, utilities, and 24/7 customer support. We ensure everything you need for a comfortable stay is provided.",
  },
  {
    question: "What is the minimum stay requirement?",
    answer:
      "Our minimum stay requirement varies by property and season, but typically ranges from 2 nights to 7 nights. For specific information about a property you're interested in, please check the listing details or contact our customer service team.",
  },
  {
    question: "Do you offer discounts for longer stays?",
    answer:
      "Yes, we offer tiered pricing with discounts for longer stays. Weekly stays typically receive a 10–15% discount compared to nightly rates, while monthly stays can receive discounts of 20–30% or more. Contact us for custom quotes on extended stays.",
  },
  {
    question: "How does the check-in and check-out process work?",
    answer:
      "We offer flexible check-in options including self check-in with digital locks, key lockboxes, or in-person greeting depending on the property and your preference. Standard check-in time is 3:00 PM and check-out is 11:00 AM, but we can often accommodate special requests with advance notice.",
  },
  {
    question: "What if I need to cancel or modify my reservation?",
    answer:
      "Our cancellation policy varies by property and length of stay. Generally, cancellations made 7+ days before check-in receive a full refund minus processing fees. Cancellations within 7 days may receive partial refunds. Please refer to your specific booking terms or contact us to discuss your situation.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-16 ">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-4xl font-bold text-slate-800 md:text-5xl">Got a question?</h2>
          <p className="mb-12 text-center text-lg text-slate-600">
            Find questions and answers related to the design system, purchase, updates, and support.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg  bg-[#33333308] px-6 py-6 transition duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between text-left text-lg font-medium text-[#333333e7] focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="text-xl">
                    {openIndex === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                      </svg>
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-screen mt-2" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-[#5f5f5fcc]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
