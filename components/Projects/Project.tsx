"use client";

import { projectsData } from "@/data/projectsData";
import { Realization } from "./components/Realization";
import { SliderButtons } from "./components/SliderButtons";
import { useSlider } from "@/hooks/custom/useSlider";

export const Project = () => {
  const {
    translateValue,
    ClickNext,
    ClickPrev,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useSlider();

  return (
    <>
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="relative cursor-grab overflow-hidden"
    >
      <div
        className="relative flex select-none transition-transform duration-300 ease-in-out"
        style={{ transform: translateValue }}
      >
        {projectsData.map(
          ({ name, proofPicture, logo, description }, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Realization
                name={name}
                proofPicture={proofPicture}
                logo={logo}
                description={description}
              />
            </div>
            
          ),
        )}
      </div>
    </div>
      <SliderButtons onPrev={ClickPrev} onNext={ClickNext} />
    </>
  );
};
