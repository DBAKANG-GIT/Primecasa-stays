import Image from "next/image"
import Button from "../component/ui/Button"
import Link from "next/link"
export default function AboutPage() {
  return (
    <>
    <main className="mx-auto max-w-6xl md:min-h-screen  mt-3px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-primary mt-[3rem]  md:text-5xl">About Us</h1>
      </div>

      <div className="mb-8  px-3 overflow-hidden rounded-lg">
        <Image
          src="/images/about.svg"
          alt="Modern luxury lobby with wooden slat walls and comfortable seating"
          width={1000}
          height={500}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      <div className="mb-16 flex justify-center">
        <div className="bg-slate-200 px-8 py-4 text-center text-lg text-slate-700">
          We strive to offer you best possible homes to stay.
        </div>
      </div>

      <section className="mb-16 px-3">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-800 md:text-4xl">Why serviced apartments?</h2>

        <div className="mx-auto max-w-4xl space-y-6 text-center text-slate-700">
          <p>
            Serviced apartments are a great alternative to staying in a hotel. It is an ideal for business travelers,
            groups of friends, families and couples looking for independence and flexibility.
          </p>

          <p>
            Apart from more space, they give you a great base to enjoy the local life with all the amenities of the
            neighborhood on your doorstep.
          </p>

          <p>
            The serviced part of serviced apartments means that your apartment is fully serviced, in that it's ready to
            move into and start living! All the utilities are switched on and included in the rate, bedroom and bathroom
            linen is provided, the kitchen is fully equipped and ready to start cooking, the cushions are plumped, it's
            sparkling clean and everything is in full working order.
          </p>

          <p>
            During your stay, the housekeeping team will come in once a week and clean all the rooms, change the bedroom
            and bathroom linen and of course, if there are any maintenance issues during your stay just let us know and
            we will get them fixed as soon as possible.
          </p>
        </div>
      </section>
    
    </main>
        <section className="w-screen bg-[#2A4A4E] py-16 text-white">
            <div className=" mx-auto px-4">
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
      
             
             <Link href="/landlords" >  <Button className=" px-9 py-3 text-lg font-medium  ">
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
          </>
  )
}
