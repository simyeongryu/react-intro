import React from "react";
// App이 전달한 props는 Object로 전달되기 때문에
// 비구조화가 가능하다. props 내에서 fav만 골라서 사용
const Food = ({ fav }) => {
  // JSX 안에서 변수는 {}으로 사용한다.
  return <h3>I like {fav}</h3>;
};

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav="막창" />
      <Food fav="라면" />
      <Food fav="삼겹살" />
      <Food fav="소곱창" />
    </div>
  );
};

export default App;
