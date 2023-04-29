import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const Faq = ({ id, question, answer }) => {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const descContainerRef = useRef(null);
  const descRef = useRef(null);

  // come back and add functionality to close the previously opend faq when clicked(to open) on other faq

  useEffect(() => {
    const descHeight = descRef.current.getBoundingClientRect().height;
    if (isFaqOpen) {
      descContainerRef.current.style.height = `${descHeight}px`;
    } else {
      descContainerRef.current.style.height = "0px";
    }
  }, [isFaqOpen]);
  return (
    <article className="faq">
      <header className="faq__header" onClick={() => setIsFaqOpen(!isFaqOpen)}>
        <p className="faq__title">{question}</p>
        <button type="button" className="faq__btn">
          {isFaqOpen ? <AiOutlineClose /> : <AiOutlinePlus />}
        </button>
      </header>
      <div className="faq__desc-container" ref={descContainerRef}>
        <p className="faq__desc" ref={descRef}>
          {answer}
        </p>
      </div>
    </article>
  );
};

export default Faq;
