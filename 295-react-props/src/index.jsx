import React from "react";
import ReactDOM from "react-dom";
import Flies from "./components/Flies";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Flies name = "Beyonce" img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" num = "+123 456 789" mail = "b@beyonce.com"/>
    <Flies name = "Jack Bauer" img = "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" num = "+987 654 321" mail = "jack@nowhere.com"/>

    <Flies name = "Chuck Norris" img = "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" num = "+918 372 574" mail = "gmail@chucknorris.com"/>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
