import Image from "next/image"
import Button from "../component/ui/Button"
export default function LandlordsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full bg-[#FAFAFA] py-16">
        <div className=" mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-[3rem]">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-[#C69C72]">Find your future</h2>
            <h1 className="mb-4 text-4xl font-bold text-slate-800 md:text-7xl">Landlords</h1>
            <p className="text-slate-600 text-base lg:text-xl lg:w-[40rem]">
              We offer guaranteed rent, paid every month, regardless of occupancy. With no void periods, you can rest
              easy knowing your income is secured.
            </p>
          </div>
          <div className="order-first lg:w-[43vw] md:order-last">
            <Image
              src="/images/land1.webp"
              alt="Suburban houses"
              width={600}
              height={400}
              className="h-auto w-full rounded-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Property Care Section */}
      <section className="w-full bg-[#FAFAFA] py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="order-last p-6 md:order-first">
                <Image
              src="/images/land2.webp"
                  alt="Well-maintained interior"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <h2 className="mb-4 text-2xl  lg:text-3xl  font-bold text-slate-800">Property Care & Maintenance</h2>
                <p className="mb-6 text-slate-600">
                  Our professional team ensures your property is well-maintained. Regular inspections and professional
                  cleaning keep your asset in excellent condition.
                </p>
                <div>
                  <Button className="bg-[#D5A77E] text-slate-800 hover:bg-[#C99B73]">Explore</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long Term Tenancy Section */}
      <section className="w-full bg-[#2A4A4E] py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl lg:text-3xl font-bold">Long term tenancy</h2>
              <p className="mb-6 text-gray-300">
                Here at PrimeCasa, we have a network of trusted contractors, cleaners and maintenance teams to promptly
                address any issues that arise. This ensures your property is well-maintained, and guests are happy,
                increasing the likelihood of them extending their booking or booking again in the future.
              </p>
              <div>
                <Button className="bg-[#D5A77E] text-slate-800 hover:bg-[#C99B73]">Explore</Button>
              </div>
            </div>
            <div className="order-first md:order-last">
              <Image
              src="/images/land3.webp"
                alt="Business handshake"
                width={600}
                height={400}
                className="h-auto w-full rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guaranteed Rent Section */}
      <section className="w-full bg-[#FAFAFA] py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="order-last p-6 md:order-first">
                <Image
              src="/images/land4.webp"
                  alt="Handshake"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <h2 className="mb-4 text-2xl lg:text-3xl font-bold text-slate-800">Guaranteed Rent</h2>
                <p className="mb-6 text-[#B6B6B6]">
                  Here at PrimeCasa, we have a network of trusted contractors, cleaners and maintenance teams to
                  promptly address any issues that arise. This ensures your property is well-maintained, and guests are
                  happy, increasing the likelihood of them extending their booking or booking again in the future.
                </p>
                <div>
                  <Button className="bg-[#D5A77E] text-slate-800 hover:bg-[#C99B73]">Explore</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
