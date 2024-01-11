'use client';

import { Button, Heading, Input, Label, Separator, Text } from '@/components/elements';
import { AnimateEnter, Container, FormLine } from '@/components/layout';
import { clenSolutionSteps, solveWaterJugChallenge } from '@/lib';
import type Step from '@/types/step';
import { useState } from 'react';

export default function Home() {
  const [jugXCapacity, setJugXCapacity] = useState('');
  const [jugYCapacity, setJugYCapacity] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [solutionSteps, setSolutionSteps] = useState<Step[]>([]);

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
            <Button
              priority="success"
              onClick={() =>
                solveWaterJugChallenge({
                  jugXCapacity,
                  jugYCapacity,
                  goalAmount,
                  setSolutionSteps,
                  solutionSteps
                })
              }
            >
              Solve
            </Button>

            <AnimateEnter delay={0.3}>
              <Button
                priority="danger"
                onClick={() =>
                  clenSolutionSteps({
                    setSolutionSteps,
                    setJugXCapacity,
                    setJugYCapacity,
                    setGoalAmount
                  })
                }
              >
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
