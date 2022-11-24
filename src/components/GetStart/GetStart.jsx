import React from "react";
import { Link } from "react-router-dom";
import "./GetStart.css"

const GetStart = () => {
  return (
    <div className="container">
        <div>
      <h1 className="home-title">ChatUP</h1>
      <h3>Overcome Imposter Syndrome</h3>
      </div>
      <div className="chat-img-wrapper">
      <img className="chat-img" src="https://drive.google.com/uc?export=view&id=1bj8KLCB59_Q9GfEOBjjE0G0U30YJvjUE" alt="begin chat" />
      </div>
      <div>
      <button className="start-btn">
        <Link className="start-link" to="/intro"> Get Start</Link>
      </button>
      </div>
    </div>
  );
};

export default GetStart;
