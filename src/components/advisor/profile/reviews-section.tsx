import { ReviewCard } from "./review-card";

interface Review {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  return (
    <section className="space-y-6">
      <h2 className="font-semibold">Reviews ({reviews.length})</h2>
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          title={review.title}
          content={review.content}
          author={review.author}
          date={review.date}
        />
      ))}
    </section>
  );
};
