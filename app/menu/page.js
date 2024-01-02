import Link from "next/link";
import PricingTab from "@/components/PricingTable";

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
          <h1 className="text-3xl sm:text-4xl  font-extrabold">Our Pricing</h1>
          <p className="my-4 text-sm font-medium">
            Our Trained Professionals will visit your home once weekly to slice,
            dice, mix and organize 3 meals a day for your family for 5 days of
            the week!
          </p>
          <Link
            href="/"
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

      <section className="p-8 md:p-16">
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Our Pricing
          </h2>
          <p class="mt-1 text-gray-600 dark:text-gray-400">Subscribe Now!</p>
        </div>
        <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
          <PricingTab
            popular={true}
            planName="Mix, heat, eat!"
            price={99}
            planDescription="For the family who values their time!"
            features={[
              " Ingredients are cut, prepared, measured, seasoned and sorted!",
              "We'll leave simple instructions for what's left",
              "Foods will be stored individually vacuum packed, portioned and labeled!",
              "Shopping lists and recipes will be provided weekly!",
              "Our goal is to save you time! A lot of it!",
            ]}
          />
          <PricingTab
            popular={false}
            planName="Par Cooked!"
            price={149}
            planDescription="For the family who needs a few more minutes in the week!"
            features={[
              "All foods will be par cooked!",
              "This means most meals will just need to be finished in the oven or on the stove",
              "Example: Lasagna in the oven for 1 hour. Slice and Eat",
            ]}
          />
          <PricingTab
            popular={false}
            planName="Heat & Eat!"
            price={249}
            planDescription="For the VERY busy family always on the run!"
            features={[
              "All meals will be fully cooked, portioned, and organized into grab and go containers.",
              "Heat and eat!",
            ]}
          />
        </div>
      </section>
    </main>
  );
}
