import React from "react";

export default function HomepageFAQ() {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid md:grid-cols-5 gap-10">
        <div class="md:col-span-2">
          <div class="max-w-xs">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">
              Frequently
              <br />
              asked questions
            </h2>
            <p class="mt-1 hidden md:block text-gray-600 ">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>

        <div class="md:col-span-3">
          <div class="hs-accordion-group divide-y divide-gray-200 ">
            <div
              class="hs-accordion pb-3 active"
              id="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <button
                class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
              >
                What would you say...you do here?
                <svg
                  class="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  class="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <p class="text-gray-600 dark:text-gray-400">
                  We are your private sous chef! We prepare all your food to cut
                  down the time it takes for you to make a home cooked meal
                  every week! Similar to how restaurants work, in the morning a
                  sous chef comes in, slices all the vegetables, fires all the
                  soups, prepares everything for quick turn around for the
                  evening. That's what we're doing here, in your home, for you!
                  Everything left for you will be quick and simple. Here's a
                  quick rundown - You sign up, every Thursday you'll get an
                  email from us with your shopping list. Make sure you've got
                  all of that for before your Sous Chefs scheduled arrival. Sit
                  back, relax! We'll prep it all so you have quick, easy to cook
                  meals with minimal mess.
                </p>
              </div>
            </div>

            <div
              class="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <button
                class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
              >
                So we buy our own food?
                <svg
                  class="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  class="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <p class="text-gray-600 dark:text-gray-400">
                  Yes, you purchase the food from wherever you like! Use your
                  coupons, pick your brands, keep your preferences. We prep it
                  all for you. You get to retain quality control, freshness and
                  still get your favorite brands. We do the prep work with your
                  purchases off our lists!
                </p>
              </div>
            </div>

            <div
              class="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <button
                class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
              >
                Can I substitute things?
                <svg
                  class="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  class="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <p class="text-gray-600 dark:text-gray-400">
                  Yes! First, we send out the menus and shopping lists based on
                  your preferences discussed during intake so there shouldn't be
                  too much to substitute but you still can as long as you follow
                  some rules when substituting. Let's say the shopping list
                  calls for chicken for a chicken parm; another protein is
                  totally fine, even a friendly fungus (mushroom) can work
                  there! Is broccoli on the menu but everyone likes cauliflower?
                  That works! When you substitute, if you're not sure, feel free
                  to chat or do a quick google search of your substituted
                  recipe. Taking the chicken parm for example, when you google
                  search veal parm, tons of recipes come up and they're all
                  super similar to the chicken. Great sub! If we're going to try
                  raccoon parmesan, lets maybe pump the brakes there and check
                  with substitutions how that works. We need to make sure what
                  we sub still conforms to the meal. Smaller ingredients, such
                  as parsley, cilantro or some other minor things can sometimes
                  be wholly skipped without issue. At the end of the day, you're
                  eating, so we want to make what you love!
                </p>
              </div>
            </div>

            <div
              class="hs-accordion pt-6 pb-3"
              id="hs-basic-with-title-and-arrow-stretched-heading-four"
            >
              <button
                class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
              >
                What if I'm not sure about a substitution?
                <svg
                  class="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                  class="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
              >
                <p class="text-gray-600 dark:text-gray-400">
                  No worries! Just email us at substitutions@persousnalchef.com
                  or send us a chat, we'll get back to you pretty quickly if it
                  makes sense or if we have any other suggestions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
