import React from "react";
const Card = ({ title, description, author }) => {
  return (
    <div
    // className="grid-item card"
    >
      {/* <img
        src={image}
        alt="Avatar"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      /> */}
      <div className="container">
        <h4>
          <b>{title}</b>
        </h4>
        <p>{description}</p>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default Card;
