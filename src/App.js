import React from "react";
// App이 전달한 props는 Object로 전달되기 때문에
// 비구조화가 가능하다. props 내에서 fav만 골라서 사용
const Food = ({ name, image }) => {
  // JSX 안에서 변수는 {}으로 사용한다.
  return (
    <div>
      <h3>I like {name}</h3>
      <img src={image}></img>
    </div>
  );
};

const foodILike = [
  {
    name: "막창",
    image:
      "https://th2.tmon.kr/thumbs/image/a08/8d3/491/91d49b12b_700x700_95_FIT_1546070137.jpg"
  },
  {
    name: "삼겹살",
    image:
      "https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200"
  },
  {
    name: "곱창",
    image:
      "https://th1.tmon.kr/thumbs/image/83b/f24/95d/b81a7d388_700x700_95_FIT.jpg"
  },
  {
    name: "냉면",
    image:
      "https://lh3.googleusercontent.com/proxy/v25W5ugBxMvq8Syy8fxIw6eSJFMlNLZGeGKJr1QhgNwMKoNd1IJTDGf8VVhADQT9vFtblmDqg9MyjU5G-VEvzeNjb0ULYrMOA3bb8MH2_L9MpMLyaOtEB3AVEQ"
  }
];

const App = () => {
  return (
    <div className="App">
      {foodILike.map(food => (
        <Food name={food.name} image={food.image} />
      ))}
    </div>
  );
};

export default App;
