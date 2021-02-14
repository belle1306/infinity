import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

const demos = {
  solar:
    '<iframe src="https://www.solarsystemscope.com/iframe" item-align="center" width="1300" height="700" style="min-width:500px; min-height: 400px; border: 2px solid #0f5c6e;"/>'
  // soundcloud:
  //   '<iframe src="https://www.solarsystemscope.com/iframe" width="1300" height="800" style="min-width:500px; min-height: 400px; border: 2px solid #0f5c6e;"/>'

};

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

function solarscope() {
  return (
    <div className="stars">
      {/* <h1>Lets start exploring</h1> */}
      {/* <Iframe iframe={demos["solar"]} allow="autoplay" />, */}
      <h3>Let's start exploring</h3>
      <h6>* Credit to Solar System Scope</h6>
      <Iframe iframe={demos["solar"]} allow="autoplay" />,
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default solarscope;