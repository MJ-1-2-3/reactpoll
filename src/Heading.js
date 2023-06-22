
import React from "react";

function Heading() {
  const headingStyle = {
    color: "black",
    fontSize: "50px",
    fontWeight: "bold",
    textAlign: "left",
    width: "auto",
    height: "100px",
    backgroundColor: "gray",
  };

  return (
    <div className="Heading">
      <h1 style={headingStyle}>FlyweightPolls </h1>
    </div>
  );
}

export default Heading;
