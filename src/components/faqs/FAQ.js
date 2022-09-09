import React from "react";
import { useState } from "react";

const FAQ = (props) => {
  const { question, answer } = props.data;

  const [showAns, setShowAns] = useState(false);

  function toggleAnswer() {
    setShowAns(!showAns);
  }

  return (
    <section onClick={toggleAnswer} className="faq">
      <div className="question">
        <h3> {question} </h3>
        {showAns ? (
          <i onClick={toggleAnswer} class="fa-solid fa-minus"></i>
        ) : (
          <i onClick={toggleAnswer} class="fa-solid fa-plus"></i>
        )}
      </div>
      <div className={showAns ? "answer show-answer" : "answer"}>
        <p> {answer} </p>
      </div>
    </section>
  );
};

export default FAQ;
