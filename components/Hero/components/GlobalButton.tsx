import { Button } from "@/components/ui/button";

export const GlobalButton = () => {
  return (
    <>
      <div className="mb-8 flex justify-center gap-10">
        <Button typeButton="github" />
        <Button variant="secondary" typeButton="contact" />
      </div>
    </>
  );
};
