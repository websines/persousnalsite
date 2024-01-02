import Link from "next/link";
import { FaBowlFood } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { FaMoneyCheckAlt } from "react-icons/fa";

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
          <h1 className="text-3xl sm:text-4xl  font-extrabold">About Us</h1>
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
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div class="lg:col-span-1">
            <h2 class="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
              What is <span className="text-green-400">PerSOUSnal Chef?</span>
            </h2>
            <p class="mt-2 md:mt-4 text-gray-500">
              Our Trained Professionals will visit your home once weekly to
              slice, dice, mix and organize 3 meals a day for your family for 5
              days of the week! Buy your favorite brands! Pick your own quality
              and freshness! Use your coupons and save! Don't settle for bulk
              packaged food from delivery companies.
            </p>
          </div>

          <div class="lg:col-span-2">
            <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
              <div class="flex gap-x-5">
                <IoTime className="text-green-400 h-12 w-12" />
                <div class="grow">
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                    Save Time
                  </h3>
                  <p class="mt-1 text-gray-600 dark:text-gray-400">
                    Time is your most valuable resource! Save 10 hours per week.
                    We prepare - You Relax.
                  </p>
                </div>
              </div>
              <div class="flex gap-x-5">
                <svg
                  class="flex-shrink-0 mt-1 w-6 h-6 text-green-400 dark:text-blue-500"
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
                <div class="grow">
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                    Simple and affordable
                  </h3>
                  <p class="mt-1 text-gray-600 dark:text-gray-400">
                    You buy, we prepare
                  </p>
                </div>
              </div>
              <div class="flex gap-x-5">
                <FaBowlFood className="h-8 w-8 text-green-400" />
                <div class="grow">
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                    Great Quality
                  </h3>
                  <p class="mt-1 text-gray-600 dark:text-gray-400">
                    Fresh, Hot Meals Daily. By Professionals.
                  </p>
                </div>
              </div>
              <div class="flex gap-x-5">
                <FaMoneyCheckAlt className="text-green-400 h-12 w-12" />
                <div class="grow">
                  <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                    Save Money
                  </h3>
                  <p class="mt-1 text-gray-600 dark:text-gray-400">
                    Buy your favorite brands! Pick your own quality and
                    freshness! Use your coupons and save!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="mt-5 lg:mt-16 flex flex-row items-center justify-center">
          <div class="lg:col-span-1">
            <h2 class="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
              Why <span className="text-green-400">PerSOUSnal Chef?</span>
            </h2>
            <p class="mt-2 md:mt-4 text-gray-500">
              Everyone likes eating. You know what people hate? Cleaning. And
              believe it or not, everyone likes cooking too! Cooking can be
              overwhelming. A lot of ingredients. A lot of preparing. If you
              didn't get your recipes matched perfectly, there can be a lot of
              waste. We solve all of that. We believe cooking should be as fun
              and rewarding as eating. So we take on all the worst parts of
              cooking, the prep and cleaning, so you get the best parts. This is
              how restaurants run! Our chefs come right from the restaurants. A
              high end restaurant opens their doors at 6AM and has chefs in the
              kitchen prepping for that evenings seating. How do you think they
              turn out a 24 oz perfectly cooked porterhouse in 15 minutes? They
              did 80% of the work that morning. The veggies were chopped and
              seasoned that morning. The steak was thrown in a sous vide in the
              afternoon. The potatoes were par baked that morning. PerSOUSnal
              chef brings all that restaurant quality right into your home.
              Simply, Easily, Affordably. We want to make cooking as fun and
              easy as eating. So give us a try. No contracts, no commitments.
              Let us take care of your family.
            </p>
          </div>
        </div>
      </div>

      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div class="mt-5 sm:mt-10 lg:mt-0">
            <div class="space-y-6 sm:space-y-8">
              <div class="space-y-2 md:space-y-4">
                <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                  You Shop, We Chop
                </h2>
                <p class="text-gray-500">
                  Our Trained Professionals will visit your home once weekly to
                  slice, dice, mix and organize 3 meals a day for your family
                  for 5 days of the week!
                </p>
              </div>
              <ul role="list" class="space-y-2 sm:space-y-4">
                <li class="flex space-x-3">
                  <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-green-400 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      class="flex-shrink-0 h-3.5 w-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span class="text-sm sm:text-base text-gray-500">
                    <span class="font-bold">Quality</span> Food
                  </span>
                </li>

                <li class="flex space-x-3">
                  <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-green-400 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      class="flex-shrink-0 h-3.5 w-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span class="text-sm sm:text-base text-gray-500">
                    Save <span class="font-bold">Time</span>
                  </span>
                </li>

                <li class="flex space-x-3">
                  <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-green-400 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      class="flex-shrink-0 h-3.5 w-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span class="text-sm sm:text-base text-gray-500">
                    Call For Parties
                  </span>
                </li>
                <li class="flex space-x-3">
                  <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-green-400 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      class="flex-shrink-0 h-3.5 w-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  <span class="text-sm sm:text-base text-gray-500">
                    Have more time with your family!
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              className="rounded h-[450px] w-[900px] object-contain"
              src="/img-1.jpg"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
