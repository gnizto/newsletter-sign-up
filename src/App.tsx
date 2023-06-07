import { useState } from "react";
import "./App.css";
import TestComponent from "./components/Test";

function App() {
  const [textWritten, setTextWritten] = useState("");
  console.log(textWritten);

  return (
    <>
      <input onChange={(event) => setTextWritten(event.target.value)}></input>
      <TestComponent text={textWritten} />
    </>
  );
}

export default App;
