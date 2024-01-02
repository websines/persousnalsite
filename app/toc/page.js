import Link from "next/link";

export default function page() {
  return (
    <main className="bg-white text-black">
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
          <h1 className="text-3xl sm:text-4xl  font-extrabold">
            Terms of Service
          </h1>
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
            Terms of Service
          </h2>
          <span className="m-4 text-base font-semibold">
            Persousnal Chef LLC agrees to provide a professional to prepare and
            provide up to 15 meals on a weekly basis for the agreed upon fee.
            PerSOUSnal chef does have requirements for clients.
          </span>
          <ul className="mt-8 space-y-2">
            <li>
              1) Clients must own and keep in working order an automatic
              dishwasher. Upon arrival each week staff will be verifying that
              the dishwasher is empty and ready for use. Please have detergent
              available. Upon leaving our chef will be running the dishwasher to
              clean up everything they used! We recommend powder as opposed to
              gel or pods.
            </li>{" "}
            <li>
              2) Clients must provide their own dishes and cutlery. Our chefs
              will do most of the work with a chefs knife and will clean knives
              by hand. Please ensure there are adequate knives ready.
            </li>{" "}
            <li>
              3) Animals are out of the kitchen and quartered off to prevent
              interference. We love animals, but we do hate accidents and pets
              and food tend to cause them!
            </li>{" "}
            <li>
              4) Someone over the age of 18 must be present for all scheduled
              visits. Please provide at least 24 hours notice if you need to
              cancel or reschedule. Unfortunately charges are not refundable but
              we can try to accommodate you later in the week. Unfortunately
              there are no guarantees for availability later during the week
            </li>
            <li>
              {" "}
              5) Please ensure your kitchen is clean before we arrive. We are
              not a cleaning service but we are happy to recommend one if this
              helps! We will leave the kitchen in better condition than we found
              it but we are not responsible for cleaning your kitchen.
            </li>
            <li>
              {" "}
              6) Please ensure there is extra space in the fridge before we
              arrive. Preparing and organizing, ironically, takes up more space
              than just raw groceries. While we recommend our storage units,
              they still do take up space and we need to ensure everything is in
              the right temperature and space!
            </li>
            <li>
              {" "}
              7) Persousnal Chef LLC reserves the right to make changes and
              additions to the terms of service at any time.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
