import React from "react";
import PropTypes from "prop-types";

// App.js에서 전달받은 props 이용
const Movie = ({ id, year, title, summary, poster, rating }) => {
  return (
    <div>
      <h5>{title}</h5>
    </div>
  );
};

// App.js 에서 받아오는 props 검사
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default Movie;
