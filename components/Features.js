import React from "react";
import { LuPartyPopper } from "react-icons/lu";
import { GiFamilyHouse } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";

export default function Features() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl ">
              Best In Class Services!
            </h2>

            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
            >
              <button
                type="button"
                className="hs-tab-active:bg-green-300 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-green-200 p-4 md:p-5 rounded-xl active"
                id="tabs-with-card-item-1"
                data-hs-tab="#tabs-with-card-1"
                aria-controls="tabs-with-card-1"
                role="tab"
              >
                <span className="flex">
                  <LuPartyPopper className="h-24 w-24" />
                  <span className="grow ml-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800  ">
                      Call Us For Parties!
                    </span>
                    <span className="block mt-1 text-gray-800  ">
                      Having a Dinner Party? Hire your PerSOUSnal Chef to do the
                      heavy lifting!
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="hs-tab-active:bg-green-300 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-green-200 p-4 md:p-5 rounded-xl "
                id="tabs-with-card-item-2"
                data-hs-tab="#tabs-with-card-2"
                aria-controls="tabs-with-card-2"
                role="tab"
              >
                <span className="flex">
                  <GiFamilyHouse className="h-24 w-24" />
                  <span className="grow ml-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800  ">
                      Family Gatherings!
                    </span>
                    <span className="block mt-1 text-gray-800  ">
                      Love your PerSOUSnal Chef! See the same chef weekly! Let
                      them learn you and your families preferences!
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="hs-tab-active:bg-green-300 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-green-200 p-4 md:p-5 rounded-xl "
                id="tabs-with-card-item-3"
                data-hs-tab="#tabs-with-card-3"
                aria-controls="tabs-with-card-3"
                role="tab"
              >
                <span className="flex">
                  <FaBowlFood className="h-24 w-24" />
                  <span className="grow ml-6">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 ">
                      Quality Food
                    </span>
                    <span className="block mt-1 text-gray-800  ">
                      Fresh, Hot Meals Daily. Prepared by a professional
                      Finished by you! Enjoy higher quality meals with less
                      effort!
                    </span>
                  </span>
                </span>
              </button>
            </nav>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div>
                <div
                  id="tabs-with-card-1"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-1"
                >
                  <img
                    className="shadow-xl shadow-gray-200 rounded-xl "
                    src="/img-3.jpg"
                    alt="image"
                  />
                </div>

                <div
                  id="tabs-with-card-2"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-2"
                >
                  <img
                    className="shadow-xl shadow-gray-200 rounded-xl "
                    src="/img-2.jpg"
                    alt="image"
                  />
                </div>

                <div
                  id="tabs-with-card-3"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-card-item-3"
                >
                  <img
                    className="shadow-xl shadow-gray-200 rounded-xl"
                    src="/img-1.jpg"
                    alt="image"
                  />
                </div>
              </div>
              <div className="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-green-400 bg-opacity-80 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full "></div>
        </div>
      </div>
    </div>
  );
}
