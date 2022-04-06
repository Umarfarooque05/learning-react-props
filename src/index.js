import React from "react";
import ReactDOM from "react-dom";

// props helps to not to repeat the code

function Cards(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Cards
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Cards name="jack beuer" tel="64984654" />
    <Cards name="umar" tel="654515" />
  </div>,
  document.getElementById("root")
);
