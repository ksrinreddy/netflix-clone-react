import React, { useState } from "react";
import faqs from "../assets/data/faqs";
import Faq from "./Faq";
import SignUpForm from "./SignUpForm";

const Faqs = () => {
  const [questions, setQuestions] = useState(faqs);
  return (
    <section className="faqs">
      <h2 className="faqs__title">frequently asked questions</h2>
      <div className="faqs__container">
        {questions.map((faq) => {
          return <Faq key={faq.id} {...faq} questions={questions} />;
        })}
      </div>
      <SignUpForm />
    </section>
  );
};

export default Faqs;
