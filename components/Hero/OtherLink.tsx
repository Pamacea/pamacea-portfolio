import { Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { LinkHeader } from "./components/LinkHeader";

export const OtherLink = () => {
  return (
    <>
      <div className="relative p-5 max-w-sm md:max-w-full md:p-0">
        <LinkHeader />
        <div className="overflow-hidden rounded-2xl md:mx-8  border-2 border-bluetomidgray">
          <div className="flex w-[300px] h-[500px] flex-col gap-8 p-6 justify-center items-center">
              <Link href="https://www.instagram.com/pama.eaa/">
            <Button variant="annexes" className=" p-4">
              <Instagram size={64} />  
              </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/yanis-dessaint-3b995b251/">
              <Button variant="annexes" className="p-4">
              <Linkedin size={64} />  
              </Button>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};
