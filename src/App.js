import './App.css';
import React, { useState } from 'react';

function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const conversion = weight / (height * height);
    setBmi(conversion.toFixed(1));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Calculating body mass index</h3>
      <div>
        <label>Height</label>
        <input type="number" value={height} onChange={e => setHeight(e.target.value)}/>
      </div>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
        <output>{bmi}</output>
      </div>
      <button>Calculate</button>
    </form>
  );
}

export default App;
