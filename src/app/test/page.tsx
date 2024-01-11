'use client';

import { useState } from 'react';

type Step = {
  number: number;
  explanation: string;
};

export default function Home() {
  const [jugXCapacity, setJugXCapacity] = useState('');
  const [jugYCapacity, setJugYCapacity] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [solutionSteps, setSolutionSteps] = useState<Step[]>([]);

  const solveWaterJugChallenge = () => {
    // Clear the solution steps
    setSolutionSteps([]);

    // Convert values to integers
    const xCapacity = parseInt(jugXCapacity);
    const yCapacity = parseInt(jugYCapacity);
    const zAmount = parseInt(goalAmount);

    // Function to add a step to the solution
    const addStep = (number: number, explanation: string) => {
      setSolutionSteps((prevSteps) => [...prevSteps, { number, explanation }]);
    };

    // Check for impossible solution
    const isSolutionImpossible = () => {
      const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
      return zAmount % gcd(xCapacity, yCapacity) !== 0;
    };

    if (isSolutionImpossible()) {
      addStep(1, 'No solution possible.');
    } else {
      // Example: basic solution
      addStep(1, 'Fill Jug X');
      addStep(2, 'Transfer from X to Y');
      addStep(3, 'Empty Jug Y');
      addStep(4, 'Transfer from X to Y');

      // You should implement the actual logic here
    }

    // Example output to check the logic
    // eslint-disable-next-line no-console
    return console.log(solutionSteps);
  };

  return (
    <div>
      <h1>Water Jug Challenge</h1>
      <div>
        <label htmlFor="jugX">Capacity of Jug X:</label>
        <input
          type="number"
          id="jugX"
          value={jugXCapacity}
          onChange={(e) => setJugXCapacity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="jugY">Capacity of Jug Y:</label>
        <input
          type="number"
          id="jugY"
          value={jugYCapacity}
          onChange={(e) => setJugYCapacity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="goal">Desired Amount Z:</label>
        <input
          type="number"
          id="goal"
          value={goalAmount}
          onChange={(e) => setGoalAmount(e.target.value)}
        />
      </div>
      <button onClick={solveWaterJugChallenge}>Solve</button>

      {solutionSteps.length > 0 && (
        <div>
          <h2>Solution Steps:</h2>
          <ol>
            {solutionSteps.map((step) => (
              <li key={step.number}>
                <strong>Step {step.number}:</strong> {step.explanation}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
