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
          <h1 className="text-3xl sm:text-4xl  font-extrabold">FAQs</h1>
          <p className="my-4 text-sm font-medium">
            Our team are best in class and responsible for maximizing account
            goals and efficiently executing vital daily account tasks.
          </p>
          <Link
            href="/services"
            className="my-4 px-6 py-2 sm:py-4 font-semibold flex flex-row space-x-2 border-b-2 border-cyan-300 max-w-[80%] hover:scale-90 duration-300 ease-in-out"
          >
            View our Services
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

      <div class="relative">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
          <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
              Simple, transparent pricing
            </h2>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
              Increase your teams productivity. Get things done in rapid time.
            </p>
          </div>

          <div class="relative after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:w-full after:h-48 after:bg-gradient-to-t after:from-white after:via-white/70 dark:after:from-slate-900 dark:after:via-slate-900/95">
            <div class="hidden lg:block sticky top-0 start-0 py-2 bg-white dark:bg-slate-900">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-2">
                  <div class="h-full"></div>
                </div>

                <div class="col-span-1">
                  <div class="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
                    <div>
                      <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
                        Free
                      </span>
                      <p class="text-xs text-gray-500">Free forever</p>
                    </div>
                    <div class="mt-2">
                      <a
                        class="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-span-1">
                  <div class="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
                    <div>
                      <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
                        Startup
                      </span>
                      <p class="text-xs text-gray-500">
                        $39 per month billed annually
                      </p>
                    </div>
                    <div class="mt-2">
                      <a
                        class="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-span-1">
                  <div class="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
                    <div>
                      <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
                        Team
                      </span>
                      <p class="text-xs text-gray-500">
                        $89 per month billed annually
                      </p>
                    </div>
                    <div class="mt-2">
                      <a
                        class="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-span-1">
                  <div class="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
                    <div>
                      <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
                        Enterprise
                      </span>
                      <p class="text-xs text-gray-500">
                        $149 per month billed annually
                      </p>
                    </div>
                    <div class="mt-2">
                      <a
                        class="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-4 lg:space-y-0">
              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 lg:py-3">
                  <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    General
                  </span>
                </li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Number of seats
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <span class="text-sm text-gray-800 dark:text-gray-200">
                      1
                    </span>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <span class="text-sm text-gray-800 dark:text-gray-200">
                      Up to 3
                    </span>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <span class="text-sm text-gray-800 dark:text-gray-200">
                      Up to 10
                    </span>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <span class="text-sm text-gray-800 dark:text-gray-200">
                      Unlimited
                    </span>
                  </div>
                </li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Storage
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <span class="text-sm text-gray-800 dark:text-gray-200">
                      15 GB
                    </span>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <span class="text-sm text-gray-800 dark:text-gray-200">
                      1 TB
                    </span>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <span class="text-sm text-gray-800 dark:text-gray-200">
                      15 TB
                    </span>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <span class="text-sm text-gray-800 dark:text-gray-200">
                      Unlimited
                    </span>
                  </div>
                </li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Email sharing
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Any time, anywhere access
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>
              </ul>
            </div>

            <div class="mt-6 space-y-4 lg:space-y-0">
              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 lg:py-3">
                  <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Financial data
                  </span>
                </li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Open/High/Low/Close
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Price-volume difference indicator
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>
              </ul>
            </div>

            <div class="mt-6 space-y-4 lg:space-y-0">
              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 lg:py-3">
                  <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    On-chain data
                  </span>
                </li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Network growth
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Average token age consumed
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Exchange flow
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Total ERC20 exchange funds flow
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Transaction volume
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Total circulation (beta)
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Velocity of tokens (beta)
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    ETH gas used
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>
              </ul>
            </div>

            <div class="mt-6 space-y-4 lg:space-y-0">
              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 lg:py-3">
                  <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Social data
                  </span>
                </li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

                <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Dev activity
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Topic search
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>
              </ul>

              <ul class="grid lg:grid-cols-6 lg:gap-6">
                <li class="lg:col-span-2 pb-1.5 lg:py-3">
                  <span class="text-sm text-gray-800 dark:text-gray-200">
                    Relative social dominance
                  </span>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Free
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Startup
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Team
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-gray-400 dark:text-gray-600"
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
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                </li>

                <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                  <div class="grid grid-cols-6 lg:block">
                    <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                      Enterprise
                    </span>
                    <svg
                      class="flex-shrink-0 lg:mx-auto h-5 w-5 text-blue-600 dark:text-blue-500"
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
                  </div>
                </li>
              </ul>
            </div>

            <div
              id="view-all-features-button"
              class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="view-all-features"
            >
              <div class="mt-6 relative z-20 space-y-4 lg:space-y-0">
                <ul class="grid lg:grid-cols-6 lg:gap-6">
                  <li class="lg:col-span-2 lg:py-3">
                    <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Additional features
                    </span>
                  </li>

                  <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

                  <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

                  <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>

                  <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                </ul>

                <ul class="grid lg:grid-cols-6 lg:gap-6">
                  <li class="lg:col-span-2 pb-1.5 lg:py-3">
                    <span class="text-sm text-gray-800 dark:text-gray-200">
                      Dedicated account manager
                    </span>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Free
                      </span>
                      <svg
                        class="w-4 h-4 lg:mx-auto text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                        />
                      </svg>
                    </div>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Startup
                      </span>
                      <svg
                        class="w-4 h-4 lg:mx-auto text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                        />
                      </svg>
                    </div>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Team
                      </span>
                      <svg
                        class="w-5 h-5 lg:mx-auto text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </div>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                      </span>
                      <svg
                        class="w-5 h-5 lg:mx-auto text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </div>
                  </li>
                </ul>

                <ul class="grid lg:grid-cols-6 lg:gap-6">
                  <li class="lg:col-span-2 pb-1.5 lg:py-3">
                    <span class="text-sm text-gray-800 dark:text-gray-200">
                      24/7 support
                    </span>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Free
                      </span>
                      <svg
                        class="w-4 h-4 lg:mx-auto text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                        />
                      </svg>
                    </div>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Startup
                      </span>
                      <svg
                        class="w-5 h-5 lg:mx-auto text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </div>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Team
                      </span>
                      <svg
                        class="w-5 h-5 lg:mx-auto text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </div>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                      </span>
                      <svg
                        class="w-5 h-5 lg:mx-auto text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </div>
                  </li>
                </ul>

                <ul class="grid lg:grid-cols-6 lg:gap-6">
                  <li class="lg:col-span-2 pb-1.5 lg:py-3">
                    <span class="text-sm text-gray-800 dark:text-gray-200">
                      Rewards
                    </span>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Free
                      </span>
                      <svg
                        class="w-4 h-4 lg:mx-auto text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                        />
                      </svg>
                    </div>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Startup
                      </span>
                      <svg
                        class="w-4 h-4 lg:mx-auto text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                        />
                      </svg>
                    </div>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Team
                      </span>
                      <svg
                        class="w-4 h-4 lg:mx-auto text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                        />
                      </svg>
                    </div>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                      </span>
                      <svg
                        class="w-5 h-5 lg:mx-auto text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </div>
                  </li>
                </ul>

                <ul class="grid lg:grid-cols-6 lg:gap-6">
                  <li class="lg:col-span-2 pb-1.5 lg:py-3">
                    <span class="text-sm text-gray-800 dark:text-gray-200">
                      Business API
                    </span>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Free
                      </span>
                      <svg
                        class="w-4 h-4 lg:mx-auto text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                        />
                      </svg>
                    </div>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Startup
                      </span>
                      <svg
                        class="w-4 h-4 lg:mx-auto text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                        />
                      </svg>
                    </div>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Team
                      </span>
                      <svg
                        class="w-4 h-4 lg:mx-auto text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                        />
                      </svg>
                    </div>
                  </li>

                  <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
                    <div class="grid grid-cols-6 lg:block">
                      <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                        Enterprise
                      </span>
                      <svg
                        class="w-5 h-5 lg:mx-auto text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mt-8 text-center">
            <button
              type="button"
              id="view-all-features"
              class="hs-collapse-toggle hs-collapse-open:rounded-full hs-collapse-open:px-3 group py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#view-all-features-button"
            >
              <span class="hs-collapse-open:hidden">View all features</span>
              <svg
                class="hidden hs-collapse-open:block group-hover:rotate-180 transition duration-300 flex-shrink-0 w-4 h-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
