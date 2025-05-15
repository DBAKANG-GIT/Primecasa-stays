"use client"


import { useState } from "react"
import Link from "next/link"
import CustomDatePicker from "../component/ui/datepicker"
import { Calendar, Facebook, Instagram, Twitter } from "lucide-react"
import Button from "@/app/component/ui/Button"
export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    message: "",
    privacyPolicy: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({ ...prev, privacyPolicy: checked }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
    alert("Message sent! We'll get back to you soon.")
  }

  return (
    <main className="mx-auto max-w-7xl px-2 py-[6rem]">
      <div className="mb-2">
        <p className="text-lg  text-black">Get Started</p>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black md:text-5xl">Get in touch with us.</h1>
        <h2 className="mt-2 text-4xl font-bold text-slate-900 md:text-5xl">We&apos;re here to assist you.</h2>
        <p className="mt-4 text-lg text-[#6D6D6D">Any question or remarks? Just write us a message!</p>
      </div>

      <div className="mb-8 flex space-x-4">
        <Link
          href="https://facebook.com"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
        >
          <Facebook size={20} className="text-black" />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link
          href="https://instagram.com"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
        >
          <Instagram size={20} className="text-black" />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link
          href="https://twitter.com"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
        >
          <Twitter size={20} className="text-black" />
          <span className="sr-only">Twitter</span>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="mt-[6rem]">
        <div className="mb-8 grid lg:gap-y-[4rem] lg:gap-x-[6rem] grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-2 block text-sm font-bold text-[#344054]">
              First name <span className="text-black">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              required
              className="w-full  border border-t-0 border-[#D0D5DD] border-x-0  px-4 py-2 focus:outline-none focus:ring-0 focus:border-[#D0D5DD]"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="lastName" className="mb-2 block text-sm font-bold text-[#344054]">
              Last name <span className="text-black">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              required
              className="w-full  border border-[#D0D5DD]   border-t-0 border-x-0  px-4 py-2 focus:outline-none focus:ring-0 focus:border-[#D0D5DD]"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-bold text-[#344054]">
              Email <span className="text-black">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@address.com"
              required
              className="w-full  border border-[#D0D5DD] border-t-0  border-x-0  px-4 py-2 focus:outline-none focus:ring-0 focus:border-[#D0D5DD]"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-bold text-[#344054]">
              Phone Number <span className="text-black">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="8949478278283909"
              required
              className="w-full  border border-[#D0D5DD] border-t-0 border-x-0 px-4 py-2 focus:border-none focus:outline-none focus:ring-1 focus:ring-white"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="checkInDate" className="mb-2 block text-sm font-bold text-[#344054]">
              Check In Date
            </label>
            <div className="relative">
              <CustomDatePicker
                type="date"
                id="checkInDate"
                name="checkInDate"
                placeholder="01 Feb, 2024"
                value={formData.checkInDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="checkOutDate" className="mb-2 block text-sm font-bold text-[#344054]">
              Check Out Date
            </label>
            <div className="relative">
              <CustomDatePicker
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                placeholder="01 Feb, 2024"
                value={formData.checkOutDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="mb-2 block text-sm font-bold text-[#344054]">
              Message <span className="text-black">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full  border border-[#D0D5DD] border-x-0 border-t-0  px-4 py-2 focus:outline-none focus:ring-0 focus:border-[#D0D5DD]"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="mb-8 flex items-center space-x-2">
    <input
  type="checkbox"
  id="privacyPolicy"
  checked={formData.privacyPolicy}
  onChange={(e) => handleCheckboxChange(e.target.checked)}
  className="h-5 w-5 border border-slate-300 bg-white text-[#333366] focus:ring-2 focus:ring-[#333366] rounded"
/>

          <label htmlFor="privacyPolicy" className="text-sm text-slate-600">
            You agree to our friendly{" "}
            <Link href="/privacy" className="text-slate-900 underline">
              privacy policy
            </Link>
            .
          </label>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-[#D5A77E] shadow-lg px-6 py-3 text-slate-800 hover:bg-[#C99B73]"
            disabled={!formData.privacyPolicy}
          >
            Leave us a message
          </Button>
        </div>
      </form>
    </main>
  )
}
