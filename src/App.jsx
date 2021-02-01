//import image from './Kavya.jpeg'
const element = (
  <div title="Kavya's info" className="container">
  <div className="content">
    <h1> Kavya Onkarappa Sunanda </h1>
    <img className="picture" src="https://avatars.githubusercontent.com/u/46484709?s=460&u=3d892da648554dbb2525be916f783d0f8eb577f3&v=4" alt="Kavya" />
      <p>
        Hi Everyone, I'm Kavya Onkarappa Sunanda.<br/>
        I'm currently pursuing Master's from San Diego State University.
      </p>
      <a id="button-1" className="button" href="https://github.com/KavyaOS" target="_blank">
        Github
        <img
        id="arrow-hover"
        src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-paper-plane-1-120.png?raw=true"
        />
      </a>
  </div>
  </div>
);
ReactDOM.render(element, document.getElementById('contents'));