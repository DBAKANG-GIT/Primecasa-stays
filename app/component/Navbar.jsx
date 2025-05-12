'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white z-[111111111111]  shadow-sm fixed w-full ">
      <nav className="flex  items-center justify-between px-6 md:px-14 py-2">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/icons/Logo.svg" // Replace with actual logo path
            alt="Prime Casa"
            width={120}
            height={40}
            className='w-[90px] h-[40px] lg:w-[120px] lg:h-[40px]'
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1 space-x-8 text-primary  font-base">
          <li>
            <Link href="/" className="hover:opacity-80">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:opacity-80">About Us</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:opacity-80">Contact Us</Link>
          </li>
          <li>
            <Link
              href="/book"
              className="bg-secondary  flex items-center  justify-center text-white    text-base px-3 py-2 rounded-md hover:opacity-90 transition"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-black"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col px-6 pt-6">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image
            src="/icons/Logo.svg" // Replace with actual logo path
                alt="Prime Casa"
                width={80}
                height={30}
              />
            </Link>
            <button onClick={() => setOpen(false)}>
              <X size={26} className="text-black" />
            </button>
          </div>

          <ul className="mt-8 space-y-6 text-[#2C4850] font-medium text-lg">
            <li>
              <Link href="/" onClick={() => setOpen(false)} className="block">Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setOpen(false)} className="block">About Us</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setOpen(false)} className="block">Contact Us</Link>
            </li>
          </ul>

          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="mt-8 bg-[#C69C72] text-white text-center py-3 rounded-md text-base font-semibold"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  )
}
