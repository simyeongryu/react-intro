import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    try {
      // 비구조화 chaing
      const {
        data: {
          data: { movies }
        }
      } = await axios.get(
        // api 문서에서 사용가능한 변수를 찾아 사용할 수 있다.
        // rating을 기준으로 정렬
        "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
      );

      // axios에서 가져온 movies를 state의 movies 배열에 집어넣는다.
      this.setState({ movies, isLoading: false });
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  rating={movie.rating}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
