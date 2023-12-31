import Link from "next/link";
import React from "react";

export default function UpgradesSection() {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Upgrades Available
        </h2>
        <p class="mt-1 text-gray-600 dark:text-gray-400">
          Upgrade your Kitchen
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="/upgrades"
        >
          <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              class="w-full h-full absolute top-0 start-0 object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src="/storage1.jpg"
              alt="Image Description"
            />
            <span class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
              Latest
            </span>
          </div>

          <div class="mt-7">
            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
              PerSOUSnal Chef Kitchen Organizers
            </h3>
            <p class="mt-3 text-gray-800 dark:text-gray-200">
              Purchase one time for your kitchen so we can store and organize
              everything! You’ll feel like you’re in a chef's kitchen with
              these!
            </p>
            <p class="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
              View Details
              <svg
                class="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </Link>

        <Link
          class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="/upgrades"
        >
          <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              className="w-full h-full absolute top-0 start-0 group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl object-contain"
              src="/ricecooker.jpg"
              alt="Image Description"
            />
          </div>

          <div class="mt-7">
            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
              Rice Cooker
            </h3>
            <p class="mt-3 text-gray-800 dark:text-gray-200">
              A great and simple carb, rice cookers get rice right, every time
              We’ll prep it and leave instructions so you have hot, fluffy, rice
              on demand all the time!
            </p>
            <p class="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
              View Details
              <svg
                class="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </Link>
        <Link
          class="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="/upgrades"
        >
          <div class="flex-auto p-4 md:p-6">
            <h3 class="text-xl text-white/[.9] group-hover:text-white">
              <span class="font-bold">Quality</span> Equipments for your Kitchen
            </h3>
          </div>
          <div class="pt-0 p-4 md:p-6">
            <div class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
              See More Upgrades
              <svg
                class="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
