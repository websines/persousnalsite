"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const FacebookPixelEvents = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("FACEBOOK_PIXEL_ID");
        ReactPixel.pageView();
      });
  }, [pathname, searchParams]);

  return null;
};
