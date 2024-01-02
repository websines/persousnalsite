"use client";

import PricingTab from "./PricingTable";

export default function PricingSection() {
  return (
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
  );
}
