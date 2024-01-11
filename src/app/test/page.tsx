'use client';

import { Button, Heading, Input, Label, Separator, Text } from '@/components/elements';
import { AnimateEnter, Container, FormLine } from '@/components/layout';
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

  function clenSolutionSteps() {
    setSolutionSteps([]);
    setJugXCapacity('');
    setJugYCapacity('');
    setGoalAmount('');
  }

  function solveWaterJugChallenge() {
    // Clear the solution steps
    setSolutionSteps([]);

    // Convert values to integers
    const xCapacity = parseInt(jugXCapacity);
    const yCapacity = parseInt(jugYCapacity);
    const zAmount = parseInt(goalAmount);

    // Function to add a step to the solution
    function addStep(number: number, explanation: string) {
      setSolutionSteps((prevSteps) => [...prevSteps, { number, explanation }]);
    }

    // Check for impossible solution
    function isSolutionImpossible() {
      const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
      return zAmount % gcd(xCapacity, yCapacity) !== 0;
    }

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
  }

  return (
    <Container>
      <AnimateEnter delay={0.4}>
        <header className="mb-8">
          <Heading>Water Jug Challenge</Heading>
          <Text colour="secondary">Fill the options</Text>
        </header>
      </AnimateEnter>

      <div className="space-y-3">
        <FormLine delay={0.6}>
          <Label htmlFor="jugX">Capacity of Jug X:</Label>
          <Input
            type="number"
            id="jugX"
            value={jugXCapacity}
            onChange={(e) => setJugXCapacity(e.target.value)}
          />
        </FormLine>
        <FormLine delay={0.65}>
          <Label htmlFor="jugY">Capacity of Jug Y:</Label>
          <Input
            type="number"
            id="jugY"
            value={jugYCapacity}
            onChange={(e) => setJugYCapacity(e.target.value)}
          />
        </FormLine>
        <FormLine delay={0.7}>
          <Label htmlFor="goal">Desired Amount Z:</Label>
          <Input
            type="number"
            id="goal"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
          />
        </FormLine>
      </div>

      {jugXCapacity && jugYCapacity && goalAmount && (
        <AnimateEnter delay={0.3}>
          <div className="mt-6 flex justify-between">
            <Button priority="success" onClick={solveWaterJugChallenge}>
              Solve
            </Button>

            <AnimateEnter delay={0.3}>
              <Button priority="danger" onClick={clenSolutionSteps}>
                Clean
              </Button>
            </AnimateEnter>
          </div>
        </AnimateEnter>
      )}

      {solutionSteps.length > 0 && (
        <>
          <AnimateEnter delay={0.2}>
            <Separator className="my-8" />
          </AnimateEnter>

          <AnimateEnter delay={0.4}>
            <div className="flex flex-col gap-6">
              <Heading as="h2">Solution Steps:</Heading>

              <div className="flex flex-col gap-3">
                {solutionSteps.map((step, index) => (
                  <AnimateEnter key={step.number} delay={0.6 + index * 0.5}>
                    <strong>Step {step.number}:</strong> {step.explanation}
                  </AnimateEnter>
                ))}
              </div>
            </div>
          </AnimateEnter>
        </>
      )}
    </Container>
  );
}
