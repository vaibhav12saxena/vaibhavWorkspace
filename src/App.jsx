import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ fontSize: 24 }}>
        While I’m busy coding this site, why not take a break and <br />
        say hi to my friend’s puppy, <b>Cheeku :)</b>?{" "}
      </div>
      <div style={{ margin: "20px" }}>
        <img
          style={{ borderRadius: "16px" }}
          src="./cheeku.jpeg"
          height={500}
          alt="Cheeku"
        />
      </div>
    </>
  );
}

export default App;
