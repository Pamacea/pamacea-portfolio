import { TypeIcon } from "@/types/TypeIcons";
import Image from "next/image";

export const Icons = ({ srcIcon, ...props }: TypeIcon & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <Image
        src={srcIcon}
        alt="Icons"
        className="h-full w-64 object-contain lg:w-64"
        width={96}
        height={0}
      />
    </div>
  );
};
