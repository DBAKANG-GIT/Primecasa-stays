"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const TermsSection = ({ title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
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
      setIsOpen(true)
    } else {
      setIsOpen(defaultOpen)
    }
  }, [isMobile, defaultOpen])

return (
    <div className="mb-8 border-b bg-[#F7F8F9] p-6 lg:p-0 lg:bg-transparent border-gray-100 pb-11 relative">
        <div className="mb-4">
            <h3 className=" text-xl  lg:text-xl text-center lg:text-left font-bold lg:font-medium text-[#333333]">{title}</h3>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[2000px]" : "max-h-12"}`}>
            <p className="text-gray-600">{content}</p>
        </div>

        {isMobile && (
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute bottom-0 right-4 flex  font-bold items-center text-sm  text-[#666666]"
            >
                {isOpen ? "Show less" : "Show more"}{" "}
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
        )}
    </div>
)
}

export default function TermsAccordion() {
  const termsData = [
    {
      title: "General information regarding the terms of use of our services",
      content:
        "Lorem ipsum dolor sit amet consectetur. Magna tristique augue cursus justo lectus in turpis imperdiet. Vulputulla in dui urna. Enim magna ullamcorper felis molestie vitae neque tortor. Posuere tortor ultrices euismod dui tincidunt pharetra venenatis quam non.",
    },
    {
      title: "Our partners",
      content:
        "Consequat urna nullam aliquam quisque gravida elementum. Mauris etiam nullam lorem a lectus velit quis est vel. Fermentum ullamcorper faucibus fermentum lorem aliquam. Faucibus ultrices nec semper id. Pretium fringilla vel diam proin.",
    },
    {
      title: "Electronic communication",
      content:
        "Lorem ipsum dolor sit amet consectetur. Eget quam vel tellus donec nunc pharetra id velit. Quis porttitor tellus tellus fames. Augue egestas mattis molestie eget molestie libero. Et est magna id etiam libero.",
    },
    {
      title: "ALR obligations",
      content:
        "Lorem ipsum dolor sit amet consectetur. Condimentum eu eu vehicula vitae pulvinar lorem pellentesque et cras. Id eget morbi varius sit facilisi habitant quam nulla elementum.",
    },
    {
      title: "Limitation and exclusion of liability",
      content:
        "Lorem ipsum dolor sit amet consectetur lacus at tempor massa imperdiet et volutpat etiam nisi quam. Tempus leo vel vulputate massa congue dictum quam oras.",
    },
    {
      title: "Damage / security deposits",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra platea diam neque tellus ac eu malesuada etiam faucibus. Morbi velit nunc nibh etiam dignissim et tempus scelerisque.",
    },
    {
      title: "Passports, personal documents and visa requirements",
      content:
        "Lorem ipsum dolor sit amet consectetur. Nibh fermentum dolor morbi donec nunc fermentum. Orci porttitor sapien vel tempor rutrum viverra pretium molestie.",
    },
    {
      title: "Customs and foreign exchange regulations",
      content:
        "Lorem ipsum dolor sit amet consectetur. Facilisis penatibus amet fames sem. In lacus odio eros feugiat enim tellus lacus sem.",
    },
    {
      title: "Travel insurance",
      content:
        "Lorem ipsum dolor sit amet consectetur. Quam arcu amet vestibulum etiam tortor quam fermentum blandit nunc. Nisi tellus bibendum nunc justo.",
    },
    {
      title: "Medical conditions and travel, health insurance",
      content:
        "Lorem ipsum dolor sit amet consectetur. Et aliquam tellus porttitor sapien. A semper elementum quis ac gravida neque purus nibh.",
    },
    {
      title: "Notice on the manner of submitting written complaint of the customer",
      content:
        "Lorem ipsum dolor sit amet consectetur. Libero odio viverra proin et sem est ut. Bibendum aliquam maecenas ornare sit imperdiet senean sed.",
    },
    {
      title: "Final regulations",
      content:
        "Lorem ipsum dolor sit amet consectetur. Neque diam mauris urna adipiscing vitae. Nulla imperdiet consequat massa ut at tortor non augue.",
    },
  ]

  return (
    <div className="mx-auto max-w-7xl  lg:mt-[3rem] px-4 py-8">
      <h1 className="mb-2 text-center pt-[4rem] lg:pt-[7rem] text-sm text-[#9F8960]">Current as of Sep 2024</h1>
      <h2 className="mb-10 text-center text-3xl font-bold text-[#333333] md:text-4xl">Terms & Conditions</h2>

      <div className="space-y-2">
        {termsData.map((section, index) => (
          <TermsSection
            key={index}
            title={section.title}
            content={section.content}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </div>
  )
}
