import Image from "next/image";

import { CgSoftwareUpload } from "react-icons/cg";
import { FiArrowRight } from "react-icons/fi";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";
import { LuChevronsUpDown } from "react-icons/lu";

const days = [
  { label: "Monday", time: "8:00 - 17:00" },
  { label: "Tuesday", time: "8:00 - 17:00" },
  { label: "Wednesday", time: "8:00 - 17:00" },
  { label: "Thursday", time: "8:00 - 17:00" },
  { label: "Friday", time: "8:00 - 17:00" },
  { label: "Saturday", time: "Closed" },
  { label: "Sunday", time: "Closed" },
];

export default function Page() {
  return (
    <div className="max-w-screen-2xl h-full mx-auto overflow-y-auto flex gap-2 text-gray-700 no-scrollbar">
      <section className="w-[30%] relative hidden lg:block overflow-hidden">
        <div className="absolute inset-0 z-50 bg-black/60 w-full h-full" />

        <div className=" bg-gray-100 w-full sticky z-10 flex items-center gap-x-12 px-6 py-8">
          <h1 className="text-4xl tracking-wide">maiaa</h1>

          <div
            className="w-full
           flex items-center justify-between rounded-l-full border-l border-y py-2 pl-6"
          >
            <p className="text-base">Copenhagen</p>
            <p className="rounded-l-full border-l border-y py-2 pl-3">
              Thu Nov
            </p>
          </div>
        </div>

        <div className=" w-full h-screen space-y-16 bg-[url('https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat bg-center">
          <div className="absolute top-[850px] w-full space-y-20 px-8 py-16 bg-white">
            <div className="space-y-2">
              <h2 className="text-4xl font-semibold truncate">
                Nice to meeting room in Vesterbro
              </h2>
              <p className="text-xl">Vesterbro, Copenhagen</p>
            </div>

            <div className="w-full flex justify-between">
              <div className="space-y-8">
                <GridItem largeText="Size" smallText="128 m²" />

                <GridItem largeText="Capacity" smallText="28" />
                <GridItem
                  largeText="Style"
                  smallText="Vibrant and lively, Bohemian, Charming"
                />
              </div>

              <div className="space-y-8 border-l pl-4 ">
                <GridItem largeText="Pricing" smallText="Per person" />
                <GridItem
                  largeText="Half day (4..."
                  smallText="Minimum charge"
                />
                <GridItem
                  largeText="Full day (8 hours"
                  smallText="Minimum charge"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" w-[70%] h-full flex-1 sm:space-y-4 pt-12">
        <div className="w-full flex items-center justify-between px-4 max-sm:hidden">
          <button className="border text-sm text-gray-500 p-1 rounded-full font-semibold hover:text-gray-400 transition-all duration-300">
            <IoIosClose className="size-7" />
          </button>

          <CustomBtn />
        </div>

        <div className="w-full border-b pb-4 sm:hidden">
          <div className="relative px-4">
            <input
              type="text"
              placeholder="maiaa.com"
              className="w-full h-10 bg-gray-200 px-6 rounded-full focus:outline-none placeholder:text-gray-500 placeholder:text-center placeholder:font-semibold"
            />
            <button className="absolute right-10 top-0 bottom-0 text-gray-400 hover:text-gray-500 transition-all duration-300">
              <CgSoftwareUpload className="size-6" />
            </button>
          </div>
        </div>

        <div className="px-8 sm:px-12 md:px-16 pt-8 space-y-8">
          {/* BOOKING PLAN */}
          <div className="w-full">
            <div className="flex items-center justify-between pb-8">
              <h2 className="text-xl sm:text-2xl font-bold">
                Plan your booking
              </h2>

              <CustomBtn className="sm:hidden gap-2.5" btnClass="w-5" />
            </div>

            <div
              className="w-full flex flex-col
            gap-4 sm:flex-row sm:items-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Product Image"
                className="sm:w-48 sm:h-32 rounded-xl object-cover"
              />

              <div className="w-full space-y-6">
                <div className="flex flex-col gap-3 sm:flex-row items-start sm:justify-between tracking-wide font-bold">
                  <div className="space-y-1">
                    <p className="text-lg">Nice meeting room</p>
                    <p className="text-sm text-gray-400 font-semibold">
                      Vesterbro, Copenhagen
                    </p>
                  </div>
                  <p className="text-base">2.000,00 DKK</p>
                </div>

                <div className="bg-slate-100 rounded-full p-2 flex items-center gap-2">
                  <Image
                    src="/user-icon.png"
                    width={10}
                    height={10}
                    alt="Product Image"
                    className="size-8 rounded-full"
                  />
                  <p className="text-base text-gray-500 font-semibold">
                    Hosted by Jane Austin
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* EVENT DETAILS */}
          <div className="w-full space-y-8">
            <h3 className="text-xl font-bold">Event details</h3>

            <div className="w-full flex flex-col gap-6 text-gray-600">
              <div className="w-full flex flex-col gap-2 border-b border-gray-200 pb-3">
                <p className="text-sm text-gray-400">When</p>
                <div className="w-full flex items-center justify-between font-semibold tracking-wider">
                  <p>Thursday May 8, 2025</p>
                  <p className="text-blue-500 max-sm:text-sm">Change</p>
                </div>
              </div>

              <div className="w-full flex flex-col gap-y-8 border-b border-gray-200 pb-3">
                <div className="space-x-4 text-sm font-semibold">
                  <span className="border-2 rounded-full px-3 py-2">
                    +1 day
                  </span>
                  <span className="border-2 rounded-full px-3 py-2">
                    +2 days
                  </span>
                  <span className="border-2 rounded-full px-3 py-2">
                    +3 days
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="w-fit text-sm text-gray-400">Guests</p>

                  <div className="w-full flex items-baseline justify-between font-medium">
                    <p className="text-base text-gray-600 font-semibold">2</p>
                    <div className="space-x-2">
                      <button className="text-lg font-semibold bg-slate-100 rounded-full p-1">
                        <HiMiniMinus className="size-5 text-gray-500" />
                      </button>
                      <button className="text-lg font-semibold bg-slate-100 rounded-full p-1">
                        <HiMiniPlus className="size-5 text-gray-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-6 border-b border-gray-200 pb-2">
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400">Start time</p>
                    <p className="font-semibold">09:00</p>
                  </div>

                  <LuChevronsUpDown className="size-5 text-gray-600" />
                </div>

                <div className="flex items-end justify-between">
                  <div className="space-y-2 w-full">
                    <p className="text-xs text-gray-400">End time</p>

                    <p className="w-full text-sm text-gray-500 font-semibold">
                      Select end time
                    </p>
                  </div>

                  <LuChevronsUpDown className="size-6 text-gray-600" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-full sm:w-1/2">
                  <div className="grid grid-cols-2 items-start gap-x-6">
                    <div className="flex items-center gap-2 mb-4">
                      <p className="text-sm font-semibold tracking-wider">
                        {" "}
                        Availability
                      </p>{" "}
                      <HiChevronUp className="size-5 max-sm:hidden" />
                      <HiChevronDown className="size-5 sm:hidden" />
                    </div>

                    <div className="sm:hidden text-xs sm:text-sm flex items-center gap-3">
                      <p>Thursday </p>
                      <p>8:00 - 17:00</p>
                    </div>
                  </div>

                  {days.map((day) => {
                    const { label, time } = day;

                    return (
                      <div
                        key={day.label}
                        className={`w-full hidden sm:flex items-center justify-between py-1 ${
                          day.label === "Thursday"
                            ? "text-gray-600 font-semibold"
                            : "text-gray-500"
                        }`}
                      >
                        <p className="text-sm">{label}</p>
                        <p className="text-sm">{time}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="w-full flex items-end justify-between gap-6 border-b border-gray-200 pb-2">
                  <div className="space-y-2 text-gray-400">
                    <p className="text-sm">Event type</p>

                    <p className="font-medium text-base">Select event type</p>
                  </div>

                  <LuChevronsUpDown className="size-5 font-semibold text-gray-600" />
                </div>
              </div>

              <div className="w-full text-gray-400 pb-2 pt-6">
                <p className="text-base border-b border-gray-200 pb-2">
                  Comments or requests for the event
                </p>
                <p className="text-gray-500 font-semibold text-sm pt-2">
                  Share what you want out of your experience
                </p>
              </div>
            </div>
          </div>

          {/* ADDITIONAL INFORMATION */}
          <div className="space-y-12 pb-4">
            <h3 className="text-xl font-bold">Additional information</h3>

            <div className="space-y-8">
              <div className="w-full border-b border-gray-200 pb-2 text-base">
                <div className="w-full sm:w-2/3 flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:justify-between text-gray-400">
                  <p className="max-sm:w-full border-b pb-2  sm:border-none ">
                    Company
                  </p>
                  <p>Contact number</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-500 hover:text-gray-400 transition-all duration-300">
                <input
                  type="checkbox"
                  id="check"
                  className="size-6 appearance-none rounded-md  border-2 checked:bg-blue-500 cursor-pointer"
                />{" "}
                <label
                  htmlFor="check"
                  className="text-sm sm:text-base font-semibold"
                >
                  I am booking on behalf of someone else
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-between border-t border-gray-200 py-4 px-4 max-sm:mt-28 text-base">
          <button className="border text-gray-500 py-3 px-5 rounded-3xl font-semibold hover:text-gray-400 transition-all duration-300">
            Cancel request
          </button>
          <button className="flex items-center gap-2 bg-black/90 text-white/90 py-3 px-5 rounded-3xl font-semibold hover:bg-black/80 hover:text-white/70 transition-all duration-300">
            Next <FiArrowRight className="size-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

interface GridItemsProps {
  largeText: string;
  smallText: string;
  className?: string;
}

function GridItem({ largeText, smallText, className }: GridItemsProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <p className="text-2xl font-semibold truncate">{largeText}</p>
      <p className="text-xl">{smallText}</p>
    </div>
  );
}

function CustomBtn({
  className,
  btnClass,
}: {
  className?: string;
  btnClass?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {[...Array(3)].map((_, index) => (
        <button
          key={index}
          className={`${btnClass} h-1 w-8 rounded-full ${
            index === 0 ? "bg-gray-500" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

// https://staging.maiaa.app/
