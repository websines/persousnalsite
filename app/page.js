import Features from "@/components/Features";
import HomepageFAQ from "@/components/HomepageFAQ";
import PricingSection from "@/components/PricingSection";
import Services from "@/components/Services";
import UpgradesSection from "@/components/UpgradesSection";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-white">
      <section id="slide-1" className="w-full min-h-screen relative">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video-main.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center mx-auto sm:w-[60%] p-16 h-full">
          <p className="mt-12 sm:text-xl text-md text-center text-white font-semibold">
            Private sous chefs visit and prepare all your food every week!
          </p>
          <h1 className="text-white my-4 font-semibold text-center text-3xl sm:text-6xl">
            PerSOUSnal Chef. <br />
            Have Your Own Private Chef In Your Home!
          </h1>
          <p className="mt-6 font-medium text-white text-xs text-center">
            Have A Private Sous Chef in your Home Every Week
          </p>
          <Link
            href="/menu"
            className="sm:m-2 mt-4 px-12 py-4 sm:px-20 sm:py-6 bg-green-500 text-white font-medium text-lg hover:bg-white hover:text-black duration-300 ease-in-out"
          >
            Get Started!
          </Link>

          <Link
            href="#slide-2"
            className="invisible sm:visible sm:block w-16 h-16 rounded-full border-2 border-white relative mt-8 mx-4 hover:bg-black hover:border-white hover:text-white"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 absolute top-[20px] left-[18px] text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </Link>
        </div>
      </section>
      <div className="p-8 md:p-16">
        <Services />
      </div>
      <div className="p-8 md:p-16" id="#slide-2">
        <Features />
      </div>
      <div className="p-8 md:p-16 flex flex-col justify-center items-center">
        <HomepageFAQ />
        <div>
          <Link
            href="/faq"
            className="hover:bg-green-500 px-4 py-3 rounded transition duration-150 hover:text-white font-semibold bg-gray-300"
          >
            More Questions?
          </Link>
        </div>
      </div>
      <div className="p-8 md:p-16">
        <PricingSection />
      </div>
      <div className="p-8 md:p-16">
        <UpgradesSection />
      </div>
    </main>
  );
}
