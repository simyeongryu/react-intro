import React from "react";
import PropTypes from "prop-types";

// App이 전달한 props는 Object로 전달되기 때문에
// 비구조화가 가능하다. props 내에서 fav만 골라서 사용
const foodILike = [
  {
    name: "막창",
    image:
      "https://th2.tmon.kr/thumbs/image/a08/8d3/491/91d49b12b_700x700_95_FIT_1546070137.jpg",
    rating: 5
  },
  {
    name: "삼겹살",
    image:
      "https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200",
    rating: 4.8
  },
  {
    name: "곱창",
    image:
      "https://th1.tmon.kr/thumbs/image/83b/f24/95d/b81a7d388_700x700_95_FIT.jpg",
    rating: 4.5
  },
  {
    name: "냉면",
    image:
      "https://lh3.googleusercontent.com/proxy/v25W5ugBxMvq8Syy8fxIw6eSJFMlNLZGeGKJr1QhgNwMKoNd1IJTDGf8VVhADQT9vFtblmDqg9MyjU5G-VEvzeNjb0ULYrMOA3bb8MH2_L9MpMLyaOtEB3AVEQ",
    rating: 3.9
  }
];

const Food = ({ name, image, rating }) => {
  // JSX 안에서 변수는 {}으로 사용한다.
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>rating: {rating}/5.0</h4>
      <img src={image} alt={name}></img>
    </div>
  );
};

// Food의 props를 확인한다.
Food.propTypes = {
  name: PropTypes.string.isRequired, // string, 필수 prop
  image: PropTypes.string.isRequired, // string, 필수 prop
  rating: PropTypes.number // number, 선택 prop
};

const App = () => {
  return (
    <div>
      {foodILike.map((dish, index) => {
        return (
          <Food
            key={index}
            name={dish.name}
            image={dish.image}
            rating={dish.rating}
          />
        );
      })}
    </div>
  );
};

export default App;
