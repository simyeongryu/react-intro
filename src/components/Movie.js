import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// App.js에서 전달받은 props 이용
const Movie = ({ id, year, title, summary, poster, rating, genres }) => {
  // 줄거리 줄임 제어
  const handleSummary = e => {
    if (e.target.innerHTML.includes("...")) {
      e.target.innerHTML = summary;
    } else {
      e.target.innerHTML = `${summary.slice(0, 140)}...`;
    }
  };
  // 변수값을 이용해서 이동하기
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          id,
          year,
          title,
          summary,
          poster,
          rating,
          genres
        }
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <h5 className="movie__rating">평점: {rating}/10.0</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary" onClick={handleSummary}>
            {summary.slice(0, 140)}...
          </p>
        </div>
      </div>
    </Link>
  );
};

// App.js 에서 받아오는 props 검사
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired // genre는 필수 prop, array고 그 요소는 string이다.
};

export default Movie;
