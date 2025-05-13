'use client'

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { termsData } from "@/util"

const TermsSection = ({ title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(false) // Set default to false, so "Show less" is the default
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false) // Ensure default state is collapsed on larger screens
    } else {
      setIsOpen(false) // Default to collapsed on mobile
    }
  }, [isMobile])

  return (
    <div className="mb-8 border-b bg-[#F7F8F9] p-6 lg:p-0 lg:bg-transparent border-gray-100 pb-11 relative">
      <div className="mb-4">
        <h3 className="text-xl lg:text-xl text-center lg:text-left font-bold lg:font-medium text-[#333333]">{title}</h3>
      </div>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[2000px]" : "max-h-12"}`}>
        {content.split("\n").map((paragraph, index) => (
          <p key={index} className="text-gray-600">{paragraph}</p>
        ))}
      </div>

      {/* For mobile */}
      {isMobile && (
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute bottom-0 right-4 flex font-bold items-center text-sm text-[#666666]"
          >
            {isOpen ? "Show less" : "Show more"} 
            <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}

      {/* For large screens */}
      <div className={`hidden lg:block lg:absolute lg:top-4 lg:right-4 ${isOpen ? "pb-6" : "pb-3"}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center font-bold text-sm text-[#666666]"
        >
          {isOpen ? (
            <ChevronUp className="ml-2 h-4 w-4 transform transition-transform" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4 transform transition-transform" />
          )}
          {isOpen ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  )
}

export default function TermsAccordion() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-center pt-[4rem] lg:pt-[7rem] text-sm text-[#9F8960]">Current as of Sep 2024</h1>
      <h2 className="mb-10 text-center text-3xl font-bold text-[#333333] md:text-4xl">Terms & Conditions</h2>

      <div className="space-y-2">
        {termsData.map((section, index) => (
          <TermsSection
            key={index}
            title={section.title}
            content={section.content}
            defaultOpen={false} // Ensure "Show less" is the default for all sections
          />
        ))}
      </div>
    </div>
  )
}
