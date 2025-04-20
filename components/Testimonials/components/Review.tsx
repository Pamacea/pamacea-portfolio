import { TypeReview } from "@/types/TypeReview";
import { UserMessage } from "./UserMessage";
import { UserProfile } from "./UserProfile";

export const Review = (TypeReview: TypeReview) => {
  return TypeReview.isRight ? (
    <div className="flex gap-4 justify-start items-end">
      <UserProfile profile={TypeReview.profile} />
      <UserMessage name={TypeReview.name} message={TypeReview.message} isRight={TypeReview.isRight} logo={TypeReview.logo}/>
    </div>
  ) : (
    <div className="flex gap-4 justify-end items-end">
      <UserMessage name={TypeReview.name} message={TypeReview.message} isRight={TypeReview.isRight} logo={TypeReview.logo}/>
      <UserProfile profile={TypeReview.profile}/>
    </div>
  );
};
