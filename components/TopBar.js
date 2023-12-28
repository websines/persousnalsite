"use client";

import Link from "next/link";

const TopBar = () => {
  return (
    <div
      className={`flex w-full p-2 bg-black items-center justify-center dark:bg-gray-50`}
    >
      <div className="sm:w-[80%] w-full flex flex-row px-8 py-[4px] items-center justify-between">
        <div className="flex flex-row text-gray-300 dark:text-black justify-start items-center px-4 text-xs w-full sm:w-1/2 space-x-4">
          <Link
            href="/faq"
            className="font-semibold hover:text-cyan-300  duration-300"
          >
            FAQs <span className="px-2 text-stone-400 dark:text-black">|</span>
          </Link>
          <Link
            href="/upgrades"
            className="font-semibold hover:text-cyan-300 dark:text-black duration-300"
          >
            Services
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          {/* <Switch id="theme-switcher" />
          <Label
            htmlFor="theme-switcher"
            className="text-white dark:text-black"
          >
            Dark Mode
          </Label> */}
          <p className="text-white text-xs font-semibold">
            Announcements and Stuff
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
