import { useTheme } from "next-themes";
import { motion as m } from "motion/react";

const sunburstGroupVariants = {
  hidden: { strokeOpacity: 0 },
  visible: {
    strokeOpacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const sunburstRayVariants = {
  hidden: { pathLength: 0, opacity: 0, scale: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const systemVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 360,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const sunPath =
  "M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C60 29 69.5 38 70 49.5Z";
const moonPath =
  "M49.156 28.43C40.897 36.686 44.676 50.785 55.954 53.807C61.191 55.209 66.775 53.712 70.609 49.881C70.609 66.394 52.733 76.715 38.431 68.458C24.13 60.201 24.13 39.56 38.431 31.302C41.691 29.421 45.391 28.43 49.156 28.43Z";

const AnimationPath = (theme: string) => {
  if (theme === "dark") {
    return {
      d: moonPath,
      rotate: -360,
      scale: 2,
      stroke: "#60a5fa",
      fill: "#60a5fa",
      fillOpacity: 0.35,
      strokeOpacity: 1,
      transition: { delay: 0.1 },
    };
  } else if (theme === "light") {
    return {
      d: sunPath,
      rotate: 0,
      stroke: "#ca8a04",
      fill: "#ca8a04",
      fillOpacity: 0.35,
      strokeOpacity: 1,
    };
  }
};

export function AnimatedThemeIcon() {
  const { theme } = useTheme();
  const animationPath = AnimationPath(theme!);

  return (
    <m.svg
      strokeWidth="4"
      strokeLinecap="round"
      width={24}
      height={24}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative"
    >
      <m.g
        variants={sunburstGroupVariants}
        initial="hidden"
        animate={theme === "light" ? "visible" : "hidden"}
        className="stroke-6 stroke-yellow-600"
      >
        {[
          "M50 2V11",
          "M85 15L78 22",
          "M98 50H89",
          "M85 85L78 78",
          "M50 98V89",
          "M23 78L16 84",
          "M11 50H2",
          "M23 23L16 16",
        ].map((d, i) => (
          <m.path key={i} variants={sunburstRayVariants}  d={d} />
        ))}
      </m.g>

      <m.path
        d={sunPath}
        fill="transparent"
        transition={{ duration: 1, type: "spring" }}
        initial={{ fillOpacity: 0, strokeOpacity: 0 }}
        animate={theme !== "system" ? animationPath : {}}
      />

      <m.g
        variants={systemVariants}
        initial="hidden"
        animate={theme === "system" ? "visible" : "hidden"}
        className="stroke-6 stroke-red-600"
      >
        <m.path
          d={moonPath}
          fill="transparent"
          transition={{ duration: 1, type: "spring" }}
          initial={{ fillOpacity: 0, strokeOpacity: 0 }}
          animate={
            theme === "system"
              ? {
                  rotate: -360,
                  scale: 2,
                  stroke: "#60a5fa",
                  fill: "#60a5fa",
                  fillOpacity: 0.35,
                  strokeOpacity: 1,
                }
              : {}
          }
        />
        <m.path
          d={sunPath}
          fill="transparent"
          transition={{ duration: 1, type: "spring" }}
          initial={{ fillOpacity: 0, strokeOpacity: 0 }}
          animate={
            theme === "system"
              ? {
                  rotate: 0,
                  transform: "translateX(20px) translateY(-20px) scale(0.8)",
                  stroke: "#ca8a04",
                  fill: "#ca8a04",
                  fillOpacity: 0.5,
                  strokeOpacity: 1,
                }
              : {}
          }
        />
      </m.g>
    </m.svg>
  );
}
