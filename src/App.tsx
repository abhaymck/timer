import "./styles.css";
import { useState } from "react";
import { Timer } from "./components/Timer";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="layout">
      <div className="timer">
        <label>
          <input
            type="checkbox"
            checked={show}
            onChange={() => setShow((s) => !s)}
          />{" "}
          Show Timer
        </label>
      </div>
      {show && <Timer />}
    </div>
  );
}
