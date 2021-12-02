import ReactDOM from "react-dom";
import React from "react";

function Welcome(props) {
  return <h1>Helloyee, {props.name}</h1>;
}
function ComponentTwo(props) {
  return <h1>This is {props.role}</h1>;
}
function App() {
  return (
    <div>
      <div>
        <Welcome name="Teodor Cotruta" />
        <Welcome name="TeoCot" />
      </div>
      <div>
        <ComponentTwo role="Manager" />
        <ComponentTwo role="Employee" />
      </div>
      <ComponentTwo role="Subordonate" />
      <p>
        $ npm run deploy react-v1@0.1.0 predeploy C:\dev\sean\react-v1 npm run
        build react-v1@0.1.0 build C:\dev\sean\react-v1 react-scripts build
        Creating an optimized production build... Compiled successfully. File
        sizes after gzip: 41.34 KB build\static\js\2.84b431ea.chunk.js 1.63 KB
        build\static\js\3.d177488b.chunk.js 1.17 KB
        build\static\js\runtime-main.4e3ecf3a.js 513 B
        build\static\js\main.73f72aa2.chunk.js 278 B
        build\static\css\main.6dea0f05.chunk.css The project was built assuming
        it is hosted at /react-v1/. You can control this with the homepage field
        in your package.json. The build folder is ready to be deployed. Find out
        more about deployment here: https://cra.link/deployment react-v1@0.1.0
        deploy C:\dev\sean\react-v1 gh-pages -d build Published
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
