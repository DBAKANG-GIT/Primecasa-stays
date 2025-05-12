"use client"

import { useState } from "react"
import Link from "next/link"
import Button from "./atom/Button"

export default function SiteFooter() {
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log("Subscribe with email:", email, "Consent:", consent)
    setEmail("")
    setConsent(false)
  }

  return (
    <footer className="w-full bg-primary text-white">
      <div className="mx-auto px-3 lg:px-[5rem] py-12">
        {/* Grid layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Logo and description */}
        <div className="md:col-span-2 md:text-center lg:col-span-1 lg:text-left">
            <div className="mb-4 flex justify-center lg:justify-start">
                <img src="/icons/footerlogo.svg" alt="PrimeCasa Logo" className="h-12" />
            </div>
            <p className="mb-6  text-center lg:text-start max-w-md text-[#A2A2A2] mx-auto lg:mx-0">
                Lorem ipsum dolor jnskjbichcbicwdicbskcdjjhc jdhcbidjckdckdcdjcdkjc bjdhcn dcnidc icdilc nkdjcdcidciwcdbu wixo
            </p>

            <div className="mb-8 flex space-x-6 justify-center lg:justify-start">
                <Link href="https://twitter.com" aria-label="Twitter">
                    <img src="/icons/twitter.svg" alt="Twitter" className="h-6 w-6" />
                </Link>
                <Link href="https://instagram.com" aria-label="Instagram">
                    <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6" />
                </Link>
                <Link href="https://tiktok.com" aria-label="TikTok">
                    <img src="/icons/tiktok.svg" alt="TikTok" className="h-6 w-6" />
                </Link>
                <Link href="https://medium.com" aria-label="Medium">
                    <img src="/icons/meduim.svg" alt="Medium" className="h-6 w-6" />
                </Link>
            </div>
        </div>
          <div className="space-y-6 flex md:flex-row flex-col  md:ml-[20rem] lg:ml-0 justify-center items-center  lg:items-start md:gap-[8rem] lg:block  lg:border lg:border-y-0 border-[#4B5563] lg:pl-6">
            <div>
              <h3 className="mb-4 text-2xl text-center lg:text-start  lg:text-2xl  text-[#F9DABB] font-semibold">Site Map</h3>
              <ul className="space-y-2 text-center  lg:text-left">
                <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white">About us</Link></li>
                <li><Link href="/properties" className="text-gray-300 hover:text-white">Properties</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4  text-2xl  text-center lg:text-start text-[#F9DABB] lg:text-2xl font-semibold">Stay in contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"> 
                    <img src="/icons/message.svg" alt="TikTok" className="h-4 w-4" />
                  <a href="mailto:info@primecasastay.com" className="text-gray-300 hover:text-white">
                    info@primecasastay.com
                  </a>
                </li>
                <li className="flex gap-2 ">
                    <img src="/icons/call.svg" alt="TikTok" className="h-4 w-4" />
                  <a href="tel:+447852752906" className="text-gray-300 hover:text-white">
                    +44 7852 752906
                  </a>
                </li>
              </ul>
            </div>
          </div>

                  <div className="w-full flex   lg:flex flex-col items-center  md:hidden ">
                    <div className="rounded-lg max-w-md mx-auto lg:mx-0">
                      <h3 className="mb-4 text-center text-2xl  text-[#F9DABB] lg:text-2xl  lg:w-[19rem] font-semibold">Subscribe now to the newsletter</h3>
                      <form onSubmit={handleSubscribe}>
                        <div className="mb-4">
                          <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full rounded-md border border-[#9E9E9E] bg-transparent  h-[3rem] px-3 py-2 text-white placeholder:text-[#666666]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-4 flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="consent"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
  className="h-5 w-5 rounded border-[#9E9E9E] bg-transparent checked:bg-[#333366] checked:border-transparent focus:ring-2 focus:ring-[#333366] border-solid border-[1px] appearance-none"
                          />
                          <label htmlFor="consent" className="text-sm text-gray-300">
                            I consent the privacy policy
                          </label>
                        </div>
                        <Button
                          type="submit"
                          className="w-full  px-4 py-2 font-medium"
                        >
                          Subscribe
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                 
        <div className="my-8 border-t w-full border-[1px] border-[#4B5563]"></div>
 <div className="w-full md:flex  lg:hidden flex-col items-center  hidden my-8  ">
                    <div className="rounded-lg max-w-md mx-auto lg:mx-0">
                      <h3 className="mb-4 text-center text-xl  text-[#F9DABB] lg:text-2xl  lg:w-[19rem] font-semibold">Subscribe now to the newsletter</h3>
                      <form onSubmit={handleSubscribe}>
                        <div className="mb-4">
                          <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full rounded-md border border-[#9E9E9E] bg-transparent  h-[3rem] px-3 py-2 text-white placeholder:text-[#666666]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-4 hidden  lg:flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="consent"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
  className="h-5 w-5 rounded border-[#9E9E9E] bg-transparent checked:bg-[#333366] checked:border-transparent focus:ring-2 focus:ring-[#333366] border-solid border-[1px] appearance-none"
                          />
                          <label htmlFor="consent" className="text-sm text-gray-300">
                            I consent the privacy policy
                          </label>
                        </div>
                        <Button
                          type="submit"
                          className="w-full  px-4 py-2 font-medium"
                        >
                          Subscribe
                        </Button>
                      </form>
                    </div>
                  </div>
        {/* Bottom Row */}
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center text-sm text-gray-400">
          <div className="text-sm lg:text-base my-2 lg:my-0">PrimeCasa Stay © 2025. All rights reserved.</div>
          <div className="flex flex-col text-center w-full  items-center justify-center md:flex-row gap-4  space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white  text-center  ml-2 lg:ml-0">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white ml-2 lg:ml-0">Terms of Use</Link>
            <Link href="/faq" className="hover:text-white">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
