import React from "react";
const Card = ({ img, name, position }) => {
  return (
    <div class="grid-item card">
      <img
        src={img}
        alt="Avatar"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div class="container">
        <h4>
          <b>{name}</b>
        </h4>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default Card;
