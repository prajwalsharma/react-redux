import "./App.css";
import { Counter } from "./components/Counter";
import { DecrementCounter } from "./components/DecrementCounter";
import { IncrementCounter } from "./components/IncrementCounter";

export const App = () => (
  <>
    <h1>React + Redux</h1>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <DecrementCounter />
      <Counter />
      <IncrementCounter />
    </div>
  </>
);
