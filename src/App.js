import React from "react";
import PropTypes from "prop-types";

// class 형 컴포넌트를 만들때 반드시 상속받아야한다.
class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };

  render = () => {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        {/** onClick: react의 addEventListner("click") */}
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  };
}

export default App;
