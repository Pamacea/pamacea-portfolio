import { ChevronLeft, ChevronRight } from "lucide-react";

export const SliderButtons = ({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) => {
  return (
    <div className="z-50 mt-2 md:mt-2 lg:mt-4 flex flex-row justify-center  gap-32 md:gap-60 sm:mr-0 lg:mr-64 ">
      <button
        onClick={onPrev}
        className="group rounded-full border-2 border-bluetowhite bg-transparent p-2 hover:bg-bluetowhite-foreground"
      >
        <ChevronLeft
          size={16}
          className="text-whitetomidgray group-hover:text-reversed"
        />
      </button>
      <button
        onClick={onNext}
        className="group rounded-full border-2 border-bluetowhite bg-transparent p-2 hover:bg-bluetowhite-foreground"
      >
        <ChevronRight
          size={16}
          className="text-whitetomidgray group-hover:text-reversed "
        />
      </button>
    </div>
  );
};
