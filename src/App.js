import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  // 여기서 data를 fetch 하고 그게 완료되면 movie를 render한다.(component update)
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, book: true });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    console.log(this.state);
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
