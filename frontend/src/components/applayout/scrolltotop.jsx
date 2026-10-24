import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Start every page at the top when the route changes
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
