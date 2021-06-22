const Poster = ({ pic }) => {
  return (
    <img
      className="img-fluid"
      src={pic}
      alt="about"
      style={{ width: "100%" }}
    />
  );
};

export default Poster;
