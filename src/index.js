import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import "./index.css";
import App from "./App";
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} setMovieRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      defaultRating={3}
      messages={["Terrible", "Bad", "Okay", "Good", "Awesome"]}
    />
    <StarRating size={24} color="red" className="test" />
    <Test /> */}
  </React.StrictMode>
);
