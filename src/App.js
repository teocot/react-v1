import ReactDOM from "react-dom";
import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function ComponentTwo(props) {
  return <h1>This is {props.role}</h1>;
}
function App() {
  return (
    <div>
      <div>
        <Welcome name="Sara" />
        <Welcome name="Teo" />
      </div>
      <div>
        <ComponentTwo role="Manager" />
        <ComponentTwo role="Employee" />
      </div>
      <ComponentTwo role="Subordonate" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
