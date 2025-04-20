import { TypeReview } from "@/types/TypeReview";
import Image from "next/image";

export const UserMessage = (TypeReview: TypeReview) => {
  return (
    <div className="flex flex-col">
      <h3 className="mx-6 mb-2 text-xl font-semibold text-whitetomidgray">
        {TypeReview.logo && TypeReview.name ? (
          <Image
            src={TypeReview.logo}
            alt={TypeReview.name}
            width={64}
            height={64}
            className="h-8 w-20"
          />
        ) : (
          TypeReview.name
        )}
      </h3>
      <p
        className={`max-w-80 rounded-xl border border-white bg-bluetomidgray p-4 text-left font-semibold text-white ${TypeReview.isRight === true ? "rounded-xl rounded-bl-none drop-shadow-[3px_2px_1px_rgba(0,0,0,0.25)]" : "rounded-xl rounded-br-none drop-shadow-[-2px_3px_1px_rgba(0,0,0,0.25)]"}`}
      >
        {TypeReview.message}
      </p>
    </div>
  );
};
