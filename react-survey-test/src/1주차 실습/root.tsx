import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function Greeting() {
  return (
    <div className="greeting">
      <h1>Hello, World!</h1>
      <p>Welcome to the React Survey Test.</p>
    </div>
  );
}

function App() {
  const element = document.getElementById("root");
  const element1 = document.getElementById("root1");
  const element2 = document.getElementById("root2");

  if (!element) {
    return;
  }

  const root1 = ReactDOM.createRoot(element);
  const root2 = ReactDOM.createRoot(element1);
  const root3 = ReactDOM.createRoot(element2);

  root1.render(<Greeting />);
  root2.render(<Greeting />);
  root3.render(<Greeting />);
}

export default App;
