import { useState } from "react";

const Accordion = ({ title, children, isFaq }) => {
  const [isOpen, setOpen] = useState(false);

  const handleMouseDown = function(e) {
    if (["Enter", " "].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      setOpen(!isOpen);
    }
  }
  return (
    <div className="accordion-wrapper">
      <div
        tabIndex={0}
        className={`accordion-title ${isOpen ? "open" : ""} ${
          isFaq ? "flex-it pxglow" : ""
        }`}
        onClick={() => setOpen(!isOpen)}
        onKeyDown={handleMouseDown}
      >
        <p>{title}</p>
        {isFaq ? (
          <span>{isOpen ? "-" : "+"}</span>
        ) : isOpen ? (
          <p className="plus">-</p>
        ) : (
          <p className="plus">+</p>
        )}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
