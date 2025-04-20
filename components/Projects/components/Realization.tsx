import { TypeProjects } from "@/types/TypeProjects";
import Image from "next/image";

export const Realization = ({
  name,
  proofPicture,
  logo,
  description,
}: TypeProjects) => {
  return (
    <>
      <div className="pointer-events-none mt-8 flex flex-col justify-center gap-4 lg:flex-row">
        <>
          <div className="flex lg:size-3/5 size-full items-center justify-center overflow-hidden rounded-2xl border-[4px] md:border-[10px] border-bluetomidgray bg-bluetomidgray">
            <Image
              src={proofPicture}
              alt={"Projet de" + name}
              width={0}
              height={0}
              className="size-auto h-full rounded-xl border-2 border-bluetomidgray object-cover"
            />
          </div>
          <div className="mt-8 flex flex-col items-center text-center lg:items-start lg:justify-end lg:text-left">
            <div className="mb-2 w-fit gap-4 text-3xl font-semibold text-whitetomidgray">
              {logo && name ? (
                <Image src={logo} alt={name} width={96} height={0} className="h-8 w-20" />
              ) : (
                name
              )}
            </div>
            <p className="max-w-60 font-semibold text-whitetomidgray">
              {description}
            </p>
          </div>
        </>
      </div>
    </>
  );
};
