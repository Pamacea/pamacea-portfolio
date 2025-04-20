import { TypeReview } from "@/types/TypeReview";
import { User } from "lucide-react";
import Image from "next/image";

export const UserProfile = (TypeReview: TypeReview) => {
  return (
    <div className="h-32 w-32 overflow-hidden rounded-2xl border-[6px] border-bluetowhite">
      {TypeReview.profile ? (
        <Image
          className="pointer-events-none h-full w-full object-cover"
          src={TypeReview.profile}
          alt="Profile.image"
          width={512}
          height={512}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <User
            strokeWidth={1}
            className="pointer-events-none size-1/2 text-staticblack dark:text-white"
          />
        </div>
      )}
    </div>
  );
};
