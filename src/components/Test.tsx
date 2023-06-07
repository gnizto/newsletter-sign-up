import { useState } from "react";

interface TestComponentProps {
  text: string;
}

const TestComponent = ({ text }: TestComponentProps): JSX.Element => {
  const [hasRender, setRender] = useState(false);
  console.log("Render");

  return hasRender ? (
    <div className="card">
      <button onClick={() => setRender(!hasRender)}>Go back?</button>
      <p>This should be shown {text}</p>
    </div>
  ) : (
    <div className="card">
      <button onClick={() => setRender(!hasRender)}>Click me</button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default TestComponent;
