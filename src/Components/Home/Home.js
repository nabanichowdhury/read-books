import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReview();

  return (
    <div>
      <div className="home-container">
        <div>
          <h1>Read Book And Make Your Life</h1>
          <p>
            What is the importance of reading books? reading books Reading is
            good for you because it improves your focus, memory, empathy, and
            communication skills. It can reduce stress, improve your mental
            health, and help you live longer. Reading also allows you to learn
            new things to help you succeed in your work and relationships
          </p>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFmC6zAmCY3m9ctOb_v44tuFb8gcjZIyEQYQ&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <h1>Customers reviews</h1>
      <div className="load-reviews">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
      <Link to="/reviews">
        <button className="review-button">
          <h1>Show all reviews</h1>
        </button>
      </Link>
    </div>
  );
};

export default Home;
