import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
serviceWorker.unregister();
// reportWebVitals();

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";

// // import "./styles.css";
// const demos = {
//   soundcloud:
//     '<iframe src="https://www.solarsystemscope.com/iframe" width="1000" height="800" style="min-width:500px; min-height: 400px; border: 2px solid #0f5c6e;"/>'

//   // plotly:
//   //   '<iframe src="https://www.solarsystemscope.com/iframe" width="500" height="400" style="min-width:500px; min-height: 400px; border: 2px solid #0f5c6e;"/>'
// };

// //codesandbox.io/s/react-iframe-demo-g3vst codePen =
// function Iframe(props) {
//   return (
//     <div
//       dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
//     />
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Lets start exploring</h1>
//       <Iframe iframe={demos["soundcloud"]} allow="autoplay" />,
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
