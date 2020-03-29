import React from "react";

// class 형 컴포넌트를 만들때 반드시 상속받아야한다.
class App extends React.Component {
  // component가 생성될 때 실행
  constructor() {
    super();
    console.log("constructor: component starts");
  }

  state = {
    count: 0
  };

  add = () => {
    // state의 값을 변경시키는 가장 좋은 방법. callback을 이용.
    this.setState(current => ({ count: current.count + 1 }));
  };

  minus = () => {
    // 이렇게 작성하면 우리의 값이 state의 값에 의존하기 때문에 별로 좋지 않다??
    // 나중에 여러 문제가 발생한다.
    this.setState(current => ({ count: current.count - 1 }));
  };
  // component가 브라우저에 나타날때, 즉, render() 호출 이후 실행
  componentDidMount() {
    console.log("component rendered");
  }
  // setState가 호출되고, reder() 호출 이후 실행
  componentDidUpdate() {
    console.log("component Updated");
  }
  // page 이동이 발생하여 해당 컴포넌트가 종료될 때 실행
  componentWillUnmount() {
    console.log("Good bye");
  }

  render() {
    console.log("rendering");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        {/** onClick: react의 addEventListner("click") */}
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
