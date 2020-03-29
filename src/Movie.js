import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// App.js에서 전달받은 props 이용
const Movie = ({ id, year, title, summary, poster, rating }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title" style={{ backgroundColor: "red" }}>
          {title}
        </h3>
        <h5 className="movie__year">{year}</h5>
        <h5 className="movie__rating">평점: {rating}/10.0</h5>
        <p className="movie__summary">{summary}</p>
      </div>
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
