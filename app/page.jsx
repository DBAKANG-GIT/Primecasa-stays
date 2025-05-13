'use client'
import Image from "next/image";
import Button from "./component/ui/Button";
import ImageGallery from "./component/imageGallery";
import FAQSection from "./component/ui/faq";
import { useState } from "react";
import Link from "next/link";
export default function Homes() {
    const [isRedirecting, setIsRedirecting] = useState(false);

const handleClick = () => {
  setIsRedirecting(true);

  // Open in new tab immediately

  // Optionally show a confirmation or redirecting state
  setTimeout(() => {
      window.open(
    'https://www.luxstayventures.com/book/brighton-bliss',
    '_blank',
    'noopener,noreferrer'
  );

    setIsRedirecting(false); // Reset or navigate away if needed
  }, 5000);
};


  return (
    <main className="min-h-screen  flex flex-col justify-center w-full overflow-hidden bg-white">
      {/* Background pattern */}
     <header>
      {/* <div assName="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -left-[10%] -top-[10%] h-[120%] w-[120%]">
          <Image
            src="/icons/wave.png"
            alt=""
            width={500}
            height={1000}
            className="h-1/2 w-full object-cover"
            priority
          />
        </div>
      </div> */}

      <div   style={{ backgroundImage: "url('/images/spiral.webp')" }} // Replace with your background
       className="z-10 mx-auto max-w-[86rem] px-4  pt-[8rem] lg:py-2 sm:px-6 lg:px-3">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-12">
          {/* Left content - Text and button */}
          <div className="max-w-lg  text-center lg:text-left flex-shrink-0">
            <h1 className="text-3xl   lg:mt-[10rem] font-[600] leading-tight text-primary md:text-5xl  lg:text-6xl">
              Luxury, cosy accommodations
            </h1>
            <h1 className="text-3xl font-[600] leading-tight text-[#303030] md:text-5xl lg:text-6xl mt-2">
              tailored for your needs.
            </h1>
            <div className="mt-8  w-full  ">
              <a
  href="https://www.luxstayventures.com/book/brighton-bliss"
  target="_blank"
  rel="noopener noreferrer">
              <Button className="shadow-lg w-full md:w-1/3 lg:w-1/3  px-12 lg:px-8 py-2 lg:py-3 font-medium text-slate-800 transition-colors hover:bg-amber-400">
                Book now 
              </Button>
              </a>
            </div>
          </div>

          {/* Right content - ImageGallery */}
          <div className="flex-grow  lg:mt-[5rem]">
            <ImageGallery />
          </div>
        </div>
      </div>

      </header>
      <section className="w-full mt-[5rem] flex flex-col items-center justify-center ">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-16 text-4xl font-bold leading-tight text-slate-800 md:text-5xl">
            Perfect for short-term stays with hotel-comparable services.
          </h2>

          <div className="grid grid-cols-1  place-items-center gap-8 md:grid-cols-2">
            {/* Free WIFI */}
            <div className="flex items-center gap-2">
              <div className="relative h-12 w-12 ">
                <Image
                  src="/icons/wifi.svg"
                  alt="Free WIFI"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <span className="text-lg text-slate-700">Free WIFI</span>
            </div>

            {/* Kitchen Appliances */}
            <div className="flex items-center gap-4">
               <div className="relative h-12 w-12 ">
                <Image
                  src="/icons/appliances.svg"
                  alt="Free WIFI"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <span className="text-lg text-slate-700">Kitchen Appliances Provided</span>
            </div>

            {/* Cleaning Team */}
            <div className="flex items-center gap-4">
          
                         <div className="relative h-12 w-12 ">
    <Image
                  src="/icons/bucket.svg"
                  alt="Free WIFI"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <span className="text-lg text-slate-700">Dedicated Cleaning Team</span>
            </div>

            {/* Clean Bed Sheets */}
            <div className="flex items-center gap-4">
              
                             <div className="relative h-12 w-12 ">
 <Image
                  src="/icons/bed.png"
                  alt="Free WIFI"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <span className="text-lg text-slate-700">Clean Bed Sheets and Linen</span>
            </div>
          </div>

          {/* Fully Furnished - Center in its own row */}
          <div className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-4">
           
                          <div className="relative h-12 w-12 ">
 <Image
                  src="/icons/couch.svg"
                  alt="Free WIFI"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
            <span className="text-lg text-slate-700">Fully Furnished Spaces</span>
          </div>

         <div className="mt-12 text-center">
   

      {/* Fullscreen Blocking Overlay */}
      <div className="mt-12 text-center">
      <Button
        onClick={handleClick}
        className="bg-amber-400 px-8 py-2 text-base font-medium text-slate-800  rounded"
      >
        Explore
      </Button>

      {isRedirecting && (
        <div className="fixed inset-0 z-50 bg-[#000000d9] backdrop-blur-sm flex flex-col items-center justify-center text-white">
          <p className="text-xl mb-6">Redirecting to our sister page...</p>
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:0s]"></span>
            <span className="w-3 h-3 bg-secondary rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
          </div>
        </div>
      )}
    </div>
    </div>
        </div>
      </div>
    </section>


    {/* why us */}

    <section className="w-full mt-[5rem] flex flex-col items-center justify-center ">
      <button className="border-[#C7BBA8] border-[1px] font-[500] hidden lg:flex justify-center items-center gap-2 px-4 py-2 rounded-md ">
 <div className="relative h-5 w-5 ">
                <Image
                  src="/icons/faq.svg"
                  alt="Free WIFI"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
Features
      </button>
        <div className="w-full bg-white  mt-[5rem] py-8">
      <div className=" mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-slate-800 md:text-5xl">Why Us?</h2>

        <div className="flex  flex-col-reverse px-[3rem] gap-8 lg:flex-row">
          {/* Left side - Image */}
          <div className="w-full  flex-col-reverse  flex items-center md:h-[20%] justify-center h-full lg:w-[43%] ">
              <Image
                src="/images/why-us.png"
                alt="Luxury accommodation interior"
                width={500}
                height={400}
                className="lg:h-[28rem] h-[12rem] md:-[20rem]  md:w-[25rem]  md:mt-4 w-full   lg:w-[25rem] rounded-lg  object-cover"
              />
          </div>

          {/* Right side - Services */}
          <div className="w-full  my-4  lg:mr-[5rem] items-stretch lg:w-7/12">
            <div className="grid grid-cols-1 gap-y-[4rem] gap-8  md:grid-cols-2 place-items-center lg:grid-cols-2">
              {/* Short Stays */}
              <div className="flex flex-col justify-center lg:items-start items-center  space-y-4">
                <div className="flex h-12 w-12   rounded-xl items-center justify-center  bg-[#F15A2B]">
                  <Image
                  src="/icons/whhy1.svg"
                  alt="why1"
                  width={500}
                  height={500} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Short Stays</h3>
                <p className="text-slate-600 text-center text-base lg:text-left">
                  Experience comfort and convenience for both short and long stays with our exceptional serviced
                  accommodations.
                </p>
              </div>

              {/* Business Stays */}
              <div className="flex flex-col  justify-center lg:items-start items-center space-y-4">
                <div className="flex  h-12 w-12   rounded-xl  items-center justify-center  bg-[#F0BB1F]">
 <Image
                  src="/icons/whhy2.svg"
                  alt="why1"
                  width={500}
                  height={500} className="h-6 w-6 text-white" />
                              </div>
                <h3 className="text-xl font-semibold text-slate-800">Business Stays</h3>
                <p className="text-slate-600 text-center lg:text-left">
                  Enhance your business stays with our premium serviced accommodations, designed for work and
                  relaxation.
                </p>
              </div>

              {/* Leisure Stays */}
              <div className="flex flex-col justify-center lg:items-start items-center  space-y-4">
                <div className="flex  h-12 w-12   rounded-xl  items-center justify-center 1 bg-[#31010F]">
 <Image
                  src="/icons/whhy3.png"
                  alt="why1"
                  width={500}
                  height={500} className="h-6 w-6 text-white" />
                              </div>
                <h3 className="text-xl font-semibold text-slate-800">Leisure Stays</h3>
                <p className="text-slate-600 text-center lg:text-left">
              Unwind and recharge in style. Our serviced accommodations offer the perfect setting for holidays, weekend getaways, or relaxing escapes.”     </p>
              </div>

              {/* Relocation Stays */}
              <div className="flex flex-col  justify-center lg:items-start items-center  space-y-4">
                <div className="flex  h-12 w-12   rounded-xl  items-center justify-center  bg-[#006380]">
 <Image
                  src="/icons/whhy4.png"
                  alt="why1"
                  width={500}
                  height={500} className="h-6 w-6 text-white" />
                              </div>
                <h3 className="text-xl font-semibold text-slate-800">Relocation Stays</h3>
                <p className="text-slate-600 text-center lg:text-left">
                  Simplify your relocation with our top-notch serviced accommodations, designed for a smooth transition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </section>

    {/* faq */}
    <section className="w-full mt-[5rem] hidden  flex-col items-center justify-center ">
      <button className="border-[#C7BBA8] hidden  border-[1px] font-[500] lg:flex justify-center items-center gap-2 px-4 py-2 rounded-md ">
        <div className="relative h-5 w-5 ">
          <Image
            src="/icons/faq.svg"
            alt="Free WIFI"
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </div>
        FAQ
      </button>

      <FAQSection/>
      </section>


       <section className="w-full bg-[#2A4A4E] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">For landlords who want more from their investment.</h2>
          <p className="mb-12 text-lg text-[#BBBBBB]">
            Discover ways to increase your home's value and get listed. No Spam.
          </p>

          <div className="mb-12 overflow-hidden rounded-lg">
            <Image
              src="/images/house.webp"
              alt="Modern apartment buildings with balconies"
              width={1000}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

<Link href="/landlords">
          <Button className=" px-9 py-3 text-lg font-medium  ">
            Explore
          </Button>
          </Link>

        </div>
      </div>
      
    </section>

    <div
            className="h-[200px] bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: "url('/images/spiral.webp')" }} // Replace with your background
          >
            <div className="flex flex-col items-center  justify-center space-y-4">
              <p className="text-[#6B6B6B] lg:text-lg md:text-xl text-base  text-center font-medium">
                Estate Agents & Property Consultants
              </p>
              <div className="flex  flex-col  lg:flex-row gap-5 lg:gap-[4rem] space-x-4">
                <img src="/icons/icologo.svg" alt="ICO Logo" className="h-10 w-auto" />
                <img src="/icons/PRS.svg" alt="PRS Logo" className="h-10 w-auto" />
              </div>
            </div>
          </div>


    </main>
  );
}
