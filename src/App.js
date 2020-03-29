import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  // 여기서 data를 fetch 하고 그게 완료되면 movie를 render한다.(component update)
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    console.log(this.state);
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
