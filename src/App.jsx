import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        While I’m busy coding this site, why not take a break and say hi to my
        friend’s pupper?{" "}
      </div>
      <img src="./cheeku.jpeg" height={500} alt="Cheeku" />
    </>
  );
}

export default App;
