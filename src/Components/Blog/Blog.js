import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <h1>Q1.What is Semantic Tag ?</h1>
      <p>
        Ans:Semantic tags are those tags by which we can understand the actual
        meaning of that part of html.Taking example: We can say body tag header
        tah footer tag .We can make others understand what we want to express by
        those tags .
      </p>
      <h1>Q2.What is inline block element?</h1>
      <p>
        Ans:In Html those elements takes the whole line where it is written is a
        block elements.Like: div p etc and those elements takes only the space
        where it is written is called inline element.example : span. In css we
        can change the display of any element by setting
        display:inline,display:block or display:inline-block.Incase of inline
        block element we can adjust the margin and padding like a block element
        and like a inline element the next element will be beside the previous
        element.{" "}
      </p>
    </div>
  );
};

export default Blog;
