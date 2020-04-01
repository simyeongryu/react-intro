import React from "react";
import "./MovieDetail.css";
class MovieDetail extends React.Component {
  componentDidMount = () => {
    const { location, history } = this.props;

    // state의 값이 undefined 라면 home으로 redirect
    if (!location.state) {
      // props.history.push() === redirect
      history.push("/");
    }
  };

  render = () => {
    const { location } = this.props;
    console.log(location);
    // location.state 값이 있으면 정상값 return
    // 없으면 null 리턴 후 componentDidMount에 의해 home 으로 redirect.
    if (location.state) {
      return (
        <div className="movie-detail">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="movie__data-detail">
            <h3 className="movie__title-detail">{location.state.title}</h3>
            <h5 className="movie__year-detail">{location.state.year}</h5>
            <h5 className="movie__rating-detail">
              평점: {location.state.rating}/10.0
            </h5>
            <ul className="movie__genres-detail">
              {location.state.genres.map((genre, index) => (
                <li key={index} className="genres__genre-detail">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie__summary-detail">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
}

export default MovieDetail;
