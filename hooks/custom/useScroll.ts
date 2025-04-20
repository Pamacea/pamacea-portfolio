import { useCallback, useEffect, useMemo, useState } from "react";

export const useScroll = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll("section");
    if (sections.length < 2) return;

    const sectionsArray = Array.from(sections);
    const slicedSections = sectionsArray.slice(0, -1);

    const totalHeight = slicedSections.reduce(
      (total, section) => total + (section as HTMLElement).offsetHeight,
      0,
    );

    const lastSection = sectionsArray[sectionsArray.length - 1] as HTMLElement;
    const scrollY = window.scrollY;

    const scrollableHeight =
      totalHeight + lastSection.offsetHeight - window.innerHeight;
    const scrollPercent = Math.min((scrollY / scrollableHeight) * 100, 80);

    setScrollPercentage(scrollPercent);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const transformStyle = useMemo(
    () => ({ transform: `translateX(${scrollPercentage}%)` }),
    [scrollPercentage],
  );

  return { transformStyle };
};
