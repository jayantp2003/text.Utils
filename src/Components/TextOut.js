import React from "react";

export default function TextOut(props) {
  return (
    <div>
      <div className="container ">
        <h1>{props.heading1}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control text-${props.mode==="light"?"white":"dark"}`}
            id="exampleFormControlTextarea1"
            rows="8"
            value={props.text}
            style={{ background: props.mode === "light" ? "#ECEFF1" : "#CFD8DC" }}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
