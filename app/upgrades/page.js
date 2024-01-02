import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <>
      <section className="w-full h-96 flex flex-row items-end justify-end sm:justify-start p-4 sm:py-12 sm:px-32 relative">
        <video
          src="/video-main.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <div className="bg-white p-6 text-black w-full sm:h-full h-auto sm:w-[30%]">
          <h1 className="text-3xl sm:text-4xl  font-extrabold">Upgrades</h1>
          <p className="my-4 text-sm font-medium">
            Our Trained Professionals will visit your home once weekly to slice,
            dice, mix and organize 3 meals a day for your family for 5 days of
            the week!
          </p>
          <Link
            href="/menu"
            className="my-4 px-6 py-2 sm:py-4 font-semibold flex flex-row space-x-2 border-b-2 border-cyan-300 max-w-[80%] hover:scale-90 duration-300 ease-in-out"
          >
            View our Menu
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </span>
          </Link>
        </div>
      </section>
      <section className="p-8 md:p-16">
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Kitchen Upgrades
          </h2>
          <p class="mt-1 text-gray-600 dark:text-gray-400">
            WE SET IT UP! WE EDUCATE YOU!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-16">
          <Link
            class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
            href="#"
          >
            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl object-contain"
                src="/ricecooker.jpg"
                alt="Image Description"
              />
            </div>

            <div class="mt-7 p-4 rounded">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Rice Cooker
              </h3>
              <p class="mt-3 text-gray-800 dark:text-gray-200">
                Purchase one time for your kitchen so we can store and organize
                everything! You’ll feel like you’re in a chef's kitchen with
                these!
              </p>
              <p class="mt-5 text-2xl font-semibold inline-flex items-center gap-x-1 text-green-400">
                $99
              </p>
            </div>
          </Link>
          <Link
            class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
            href="#"
          >
            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl object-contain"
                src="/ricecooker.jpg"
                alt="Image Description"
              />
            </div>

            <div class="mt-7 p-4 rounded">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Rice Cooker
              </h3>
              <p class="mt-3 text-gray-800 dark:text-gray-200">
                Purchase one time for your kitchen so we can store and organize
                everything! You’ll feel like you’re in a chef's kitchen with
                these!
              </p>
              <p class="mt-5 text-2xl font-semibold inline-flex items-center gap-x-1 text-green-400">
                $99
              </p>
            </div>
          </Link>
          <Link
            class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
            href="#"
          >
            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl object-contain"
                src="/ricecooker.jpg"
                alt="Image Description"
              />
            </div>

            <div class="mt-7 p-4 rounded">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Rice Cooker
              </h3>
              <p class="mt-3 text-gray-800 dark:text-gray-200">
                Purchase one time for your kitchen so we can store and organize
                everything! You’ll feel like you’re in a chef's kitchen with
                these!
              </p>
              <p class="mt-5 text-2xl font-semibold inline-flex items-center gap-x-1 text-green-400">
                $99
              </p>
            </div>
          </Link>
          <Link
            class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
            href="#"
          >
            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl object-contain"
                src="/ricecooker.jpg"
                alt="Image Description"
              />
            </div>

            <div class="mt-7 p-4 rounded">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Rice Cooker
              </h3>
              <p class="mt-3 text-gray-800 dark:text-gray-200">
                Purchase one time for your kitchen so we can store and organize
                everything! You’ll feel like you’re in a chef's kitchen with
                these!
              </p>
              <p class="mt-5 text-2xl font-semibold inline-flex items-center gap-x-1 text-green-400">
                $99
              </p>
            </div>
          </Link>
          <Link
            class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
            href="#"
          >
            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl object-contain"
                src="/ricecooker.jpg"
                alt="Image Description"
              />
            </div>

            <div class="mt-7 p-4 rounded">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                Rice Cooker
              </h3>
              <p class="mt-3 text-gray-800 dark:text-gray-200">
                Purchase one time for your kitchen so we can store and organize
                everything! You’ll feel like you’re in a chef's kitchen with
                these!
              </p>
              <p class="mt-5 text-2xl font-semibold inline-flex items-center gap-x-1 text-green-400">
                $99
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
