# React Intro: Making Simple Movie App

# #0.1 Requirements

`node.js`, `npm`, `npx`, `git`을 설치해야 한다.

1. `node.js`, `npm` 설치

`brew`를 이용해서 `node.js`를 설치하면 `npm`은 동시에 설치된다. 

설치 후 아래 명령어로 설치가 되었는지 확인한다.

```shell
$ node -v
$ npm -v
```

2. `npx` 설치

`npm` 을 이용해서 `npx`을 전역에 설치한다.

전역으로 설치하기 위해서는 `sudo` 명령어가 필요하다.

```shell
$ sudo npm i npx -g
```

# #1.0 Creating your first React App

`creat-react-app` 명령어를 이용해서 react app을 만든다.

babel과 webpack 등 초기 설정을 알아서 해준다.

```shell
$ npx creat-react-app 폴더이름
```

react 프로젝트 폴더가 만들어지면

`package.json` 안에 `eject`, `test` 명령어를 삭제한다. 이 프로젝트에는 불필요하다.

# #1.1 Creating a Github Repository

깃 저장소 정보 초기화

```shell
$ git init
```

깃허브로 이동한 후 새 저장소를 만들고

```shell
$ git remote add origin [저장소 주소]
```

위 명령어를 이용해서 현재 프로젝트 폴더와 저장소를 연결한다.

이후 commit, push가 되는지 확인한다.

# #1.2 How does React work?

node_modules,- 패키지들이 저장됨
public
src

기초부터 배우기 위해 여러 개를 지운다.

`src` 안에서

```
index.js
App.js
```
를 제외하고 모두 삭제

`src/index.js` 안에서 아래 내용 삭제

```js
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import './index.css';
```

`src/App.js` 안에서 아래 내용 삭제

```js
import logo from './logo.svg';
import './App.css';

<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
```
우리가 컴포넌트들을 만들어서 App.js에 넣으면,

src의 index.js는 App.js를 받아서 public/index.html의 `<div id="root">`에 전달한다.

React는 그 값을 브라우저가 이해할 수 있는  Virtual DOM으로 만들고, 화면에 출력한다. 

# #2.0 Creating your first React Component

React를 구성하는 모든 것.

Component는 HTML을 반환하는 함수

## JSX

React에서만 사용가능한 문법. HTML과 JS의 혼종

src 폴더 내에 새로운 js 파일을 만들고 아래의 내용을 작성한다. 아래의 내용을 컴포넌트를 만들 때마다 반드시 작성해야 한다.

```js
import React from "react";
```

index.js는 오직 단 한 개의 component만을 rendering 해야 한다. 그 component가 App.js

즉 우리가 만드는 component 들은 모두 App.js에 넣어야 한다.

# #2.1 Reusable Components with JSX + Props

재사용 가능한 component를 만들고 수없이 반복해서 사용할 수 있다.

App.js 에서 다른 component를 사용할 때, 어떤 값들을 지정해서 해당 component에 전달할 수 있다. props(properties)라고 한다.

```js
import React from "react";

const Food = props => {
  console.log(props);
  /** 아래 내용 출력
    fav="kimchi"
    something={true}
    lalalal={["hello", 1, 2, 3, 4, true]} 
    */
  return <h3>Potato</h3>;
};

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food
        fav="kimchi"
        something={true}
        lalalal={["hello", 1, 2, 3, 4, true]}
      />
    </div>
  );
};

export default App;
```

Component는 JSX를 반환하는 함수이며 대문자로 시작해서 naming한다.

JSX는 HTML+JS다. 

부모 component는 자신 cpnt에서 props를 통해 data를 전달한다.

```js
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
```

# #2.2 Dynamic Component Generation

웹사이트에 동적 데이터를 추가하자. 내가 수동으로 작성해야 하는 데이터 말고.

`map()` 메소드를 이용해서 object에 담긴 값들을 쉽게 렌더링할 수 있다.

JSX 안에서 JS를 사용하고 싶다면 `{}`를 사용한다.

App.js
```js
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

```

# #2.3 .map Recap

React 에서 list내 요소들은 각각의 고유한 key 값을 갖고 있어야 한다. 

즉, props에 key값을 줘야 한다. react 내부에서 사용하기 위한 값이다.

# #2.4 Protection with PropTypes

> 참고 : https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html

`prop-types` 설치 

내가 전달받은 props가 내가 원하는 props인지 확인해주는 모듈

```shell
$ npm i prop-types
```

```js
// Food component의 props를 확인한다.
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
// 메소드 이름은 반드시 `propTypes 여야 한다.`
Food.propTypes = {
  name: PropTypes.string.isRequired, // string, 필수 prop
  image: PropTypes.string.isRequired, // string, 필수 prop
  rating: PropTypes.number // number, 선택 prop
};
```