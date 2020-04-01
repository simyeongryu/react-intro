import React from "react";

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
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  };
}

export default MovieDetail;
