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

