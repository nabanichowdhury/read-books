import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Review.css";

const Review = (props) => {
  const { name, review } = props.review;
  return (
    <div className="review">
      <h3>Name:{name}</h3>
      <p>{review}</p>
      <div>
        <p>Ratings:5 stars</p>
        <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Review;
