// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";


const Card = ({ heading, description }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <h2 className="card-heading">{heading}</h2>
        <p className="card-desc">{description}</p>
      </div>
    </div>
  );
};

export default Card;
