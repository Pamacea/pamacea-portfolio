import { reviewsData } from "@/data/reviewsData";
import { Review } from "./components/Review";

export const Reviews = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto gap-12">
      <div className="space-y-4">
        {reviewsData.map((TypeReview, index) => (
          <div
            key={index}
            className={`p-4 ${
              index % 2 === 0 ? "self-start text-left" : "self-end text-right"
            }`}
          >
            <Review
              name={TypeReview.name}
              profile={TypeReview.profile}
              message={TypeReview.message}
              logo={TypeReview.logo}
              isRight={index % 2 === 0 ? true : false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
