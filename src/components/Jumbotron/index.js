import React from "react";

import "./style.css"

const divStyle = {
 
  backgroundImage: 'url(jumbotron.jpeg)',
};

function Jumbotron() {
  return (
    <div className="jumbotron" style={divStyle}>
      <h1 className="text-center pb-2">Clicky Game!</h1>
      <p className="text-center">
      Can you remember which images you have clicked? Try our Clicky Memory Game. You can only click each image one time to earn a point. 
      </p>
    </div>
  );
}

export default Jumbotron;
