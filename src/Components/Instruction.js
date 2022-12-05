import React from 'react'

export default function Instruction(props) {
  return (
    <div className={`container my-3  text-${props.mode==="light"?"dark":"white"}`} style={{ background: props.mode === "light" ? "#CFD8DC" : "#455A64" }}>
        <h1>WELCOME</h1>
        <h3>Few Basic Instructions are mentioned below please go through them and get started with your work.</h3>
      <ul>
        <li>Write the text for which you want some result.</li>
        <li>You will be able to see the preview after you have entered something into the text box.</li>
        <li>Once you have entered the text into the space below then you will be able to see the words count and will be able to perform many operations.</li>
        <li>Happy Working . . . . . . . .</li>
      </ul>
    </div>
  )
}
