import React from "react";

const Card3 = ({ data }) => {
  return (
    <div
      className="table-content col-md-3"
      style={{
        background: "none",
        flexDirection: "column",
      }}
    >
      <img src={data.pic} alt="tv" />
      <div>
        <p className="name">{data.name}</p>
        <p className="founder">{data.pos}</p>
        <p className="desc">{data.desc}</p>
      </div>
      <button className="btn">Read More</button>
    </div>
  );
};

export default Card3;
