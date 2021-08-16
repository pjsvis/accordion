import React, { useEffect, useState, useRef } from "react";
import Rating from "@material-ui/lab/Rating";

function Acc({ id, active, onToggle, text }) {
  console.log(active);
  const [value, setValue] = React.useState(2);

  const content = useRef(null);

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("160px");
  const [setRotate, setRotateState] = useState("icon");

  useEffect(() => {
    setHeightState(active ? `${content.current.scrollHeight}px` : "160px");
    setRotateState(active ? "icon" : "icon rotate");
  }, [active]);

  function toggleAccordion() {
    onToggle(id);
    // setActiveState(setActive === "" ? "active" : "");
    // setHeightState(
    //   setActive === "active" ? "160px" : `${content.current.scrollHeight}px`
    // );
    // setRotateState(setActive === "active" ? "icon" : "icon rotate");
  }

  return (
    <div className="accordian" id={id}>
      <div className="accordianHeading">
        <div
          className="container"
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
        >
          {/* <img src={Icon1} className="postimg" /> */}

          <div className="title">Title of #{id}</div>
          <div className="namedate">asdfasdf | 10th April 2021</div>
          <div classname="content">
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div className="accordianContent">
        <div className="foot">
          <Rating defaultValue={0} precision={1} />
          <button className="button" onClick={toggleAccordion}>
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Acc;
