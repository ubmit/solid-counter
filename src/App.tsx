import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <h1>Counter</h1>
      <span>Count: {count()}</span>
      <br />
      <button onClick={() => setCount(count() + 1)}>Click me</button>
    </>
  );
};

export default App;
