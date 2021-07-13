import { useState } from 'react';

// imutabilidade - variável nunca vai ser alterada para add algo, e sim criar uma nova variável recebendo o que já tinha + o novo valor

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div style={{ marginLeft: 40 }}>
      <h2>{counter}</h2>

      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
};
