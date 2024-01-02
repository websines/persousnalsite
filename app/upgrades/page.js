import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <main className="bg-white">
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
          <h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">
            Kitchen Upgrades
          </h2>
          <p class="mt-1 text-gray-600">WE SET IT UP! WE EDUCATE YOU!</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link class="group rounded-xl overflow-hidden" href="#">
            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl object-contain"
                src="/ricecooker.jpg"
                alt="Image Description"
              />
            </div>

            <div class="mt-7 p-4 rounded">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
                Rice Cooker
              </h3>
              <p class="mt-3 text-gray-800 ">
                A great and simple carb, rice cookers get rice right, every time
                We’ll prep it and leave instructions so you have hot, fluffy,
                rice on demand all the time!
              </p>
              <p class="mt-5 text-2xl font-semibold inline-flex items-center gap-x-1 text-green-400">
                $99
              </p>
            </div>
          </Link>
          <Link class="group rounded-xl overflow-hidden  " href="#">
            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl object-contain"
                src="/storage1.jpg"
                alt="Image Description"
              />
            </div>

            <div class="mt-7 p-4 rounded">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
                PerSOUSnal Chef Kitchen Organizers
              </h3>
              <p class="mt-3 text-gray-800 ">
                Purchase one time for your kitchen so we can store and organize
                everything! You’ll feel like you’re in a chef's kitchen with
                these!
              </p>
              <p class="mt-5 text-2xl font-semibold inline-flex items-center gap-x-1 text-green-400">
                $99
              </p>
            </div>
          </Link>
          <Link class="group rounded-xl overflow-hidden  " href="#">
            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl object-contain"
                src="/bread-maker.jpg"
                alt="Image Description"
              />
            </div>

            <div class="mt-7 p-4 rounded">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
                Bread Maker
              </h3>
              <p class="mt-3 text-gray-800 ">
                Would you like to come home to the whole house smelling like a
                fresh loaf of bread? You’ll smell the difference when you walk
                in and you can’t wait to taste the difference!
              </p>
              <p class="mt-5 text-2xl font-semibold inline-flex items-center gap-x-1 text-green-400">
                $99
              </p>
            </div>
          </Link>
          <Link class="group rounded-xl overflow-hidden  " href="#">
            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl object-contain"
                src="/sous-vide.jpg"
                alt="Image Description"
              />
            </div>

            <div class="mt-7 p-4 rounded">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                Sous Vide Setup
              </h3>
              <p class="mt-3 text-gray-800 ">
                The easiest roasts you’ll ever make and never make a mistake
                Yours to keep, with this upgrade, you will never taste more
                flavorful and tender meat!
              </p>
              <p class="mt-5 text-2xl font-semibold inline-flex items-center gap-x-1 text-green-400">
                $99
              </p>
            </div>
          </Link>
          <Link class="group rounded-xl overflow-hidden  " href="#">
            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl object-contain"
                src="/vaccum-sealer.jpg"
                alt="Image Description"
              />
            </div>

            <div class="mt-7 p-4 rounded">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
                Vaccum Sealer
              </h3>
              <p class="mt-3 text-gray-800 ">
                We require all clients to have a vacuum sealer,to serve crisp
                vegetables on a friday that were prepared on monday This is also
                required for Sous Vide and we promise, this will be life
                changing!
              </p>
              <p class="mt-5 text-2xl font-semibold inline-flex items-center gap-x-1 text-green-400">
                $99
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
