import React from "react";
import { IoTime } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";

export default function Services() {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-green-400 bg-opacity-80">
      <div class="grid md:grid-cols-2 gap-12">
        <div class="lg:w-3/4">
          <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
            Professional Chefs at your service
          </h2>
          <p class="mt-3 text-gray-800 dark:text-gray-400">
            Every Thursday you'll receive a shopping list from us. Make sure you
            have everything 24 hours prior to your scheduled visit! We arrive,
            our Chefs Sous it up, and you're left with a clean, organized
            kitchen loaded with ready to finish and serve meals!
          </p>
          <p class="mt-5">
            <a
              class="inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500"
              href="/menu"
            >
              See our pricings!
              <svg
                class="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
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
            </a>
          </p>
        </div>

        <div class="space-y-6 lg:space-y-10">
          <div class="flex">
            <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
              <FaBowlFood />
            </span>
            <div class="ms-5 sm:ms-8">
              <h3 class="text-base sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Great Food
              </h3>
              <p class="mt-1 text-gray-600 dark:text-gray-400">
                Fresh, Hot Meals Daily. Prepared by a professional Finished by
                you! Enjoy higher quality meals with less effort!
              </p>
            </div>
          </div>

          <div class="flex">
            <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
              <IoTime />
            </span>
            <div class="ms-5 sm:ms-8">
              <h3 class="text-base sm:text-2xl font-semibold text-gray-800">
                Save Time
              </h3>
              <p class="mt-1 text-gray-600 dark:text-gray-400">
                Time is your most valuable resource! Save 10 hours per week. We
                prepare - You Relax. Meals are Mix, heat, eat! Everything
                premeasured designed for a 1-2 pan meal!
              </p>
            </div>
          </div>

          <div class="flex">
            <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700">
              <svg
                class="flex-shrink-0 w-5 h-5"
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
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
            </span>
            <div class="ms-5 sm:ms-8">
              <h3 class="text-base sm:text-2xl font-semibold text-gray-800">
                Simple and affordable
              </h3>
              <p class="mt-1 text-gray-600 dark:text-gray-400">
                Buy your favorite brands! Pick your own quality and freshness!
                Use your coupons and save! Don't settle for bulk packaged food
                from delivery companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
