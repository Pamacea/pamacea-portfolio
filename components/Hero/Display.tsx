import { GlobalButton } from "./components/GlobalButton";
import { Presentation } from "./components/Presentation";

export const Display = () => {
  return (
    <div className="max-w-2xl">
      <Presentation />
      <GlobalButton />
    </div>
  );
};
