import Image from "next/image";

export default function ImageGallery() {
    return (
        <div className=" p-4">
            <div className="mx-auto max-w-4xl">
                {/* Background container */}
                <div className="relative">
                    <div className="absolute h-[89%] w-[50rem] -top-[5rem] left-[7rem] hidden lg:block -z-0 bg-[#FFE8C6]"></div>

                    {/* Top-right image */}
                    <div className="absolute top-4 z-[111] right-0 hidden lg:block">
                        <img
                            src="/images/sprinkler.png"
                            alt="Decorative top-right image"
                            className="h-auto object-cover"
                        />
                    </div>

                    {/* 2-column grid layout */}
                    <div className="grid   w-[95%] ml-[1rem] lg:ml-0  lg:w-full relative grid-cols-2 z-1 gap-2 p-2">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2 items-end">
                                <div className="overflow-hidden  w-1/2 rounded-lg ">
                                    <img
                                        src="/images/image1.png"
                                        alt="Building exterior view"
                                        className=" md:max-w-[180px] h-auto object-cover"
                                    />
                                </div>
                                <div className="overflow-hidden w-1/2  rounded-lg ">
                                    <img
                                        src="/images/image2.png"
                                        alt="Building architecture"
                                        className="md:max-w-[180px] h-auto object-cover"
                                    />
                                </div>
                            </div>
                            <div className="overflow-hidden item-end flex rounded-lg ">
                                <img
                                    src="/images/image4.png"
                                    alt="Living room with blue sofa"
                                    className=" h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-2 h-full">
                            <div className="overflow-hidden rounded-lg ">
                                <img
                                    src="/images/image3.png"
                                    alt="Luxury room interior"
                                    className="w-full h-[12rem] sm:h-[16rem] md:h-[20rem] lg:h-[30rem] object-cover"
                                />
                            </div>
                            <div className="overflow-hidden rounded-lg  flex-1">
                                <img
                                    src="/images/image5.png"
                                    alt="Modern living space"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
