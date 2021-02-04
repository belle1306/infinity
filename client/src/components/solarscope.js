import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

const demos = {
<<<<<<< HEAD
  solar:
    '<iframe src="https://www.solarsystemscope.com/iframe" item-align="center" width="1300" height="590" style="min-width:500px; min-height: 400px; border: 2px solid #0f5c6e;"/>'
=======
  soundcloud:
    '<iframe src="https://www.solarsystemscope.com/iframe" width="1300" height="800" style="min-width:500px; min-height: 400px; border: 2px solid #0f5c6e;"/>'
>>>>>>> 7e5cf2a4a6f868866c2300aa525cba7bcb9c6638

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
    <div className="App">
<<<<<<< HEAD
      {/* <h1>Lets start exploring</h1> */}
      <Iframe iframe={demos["solar"]} allow="autoplay" />,
=======
      <h2>Lets start exploring</h2>
      <Iframe iframe={demos["soundcloud"]} allow="autoplay" />,
>>>>>>> 7e5cf2a4a6f868866c2300aa525cba7bcb9c6638
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default solarscope;