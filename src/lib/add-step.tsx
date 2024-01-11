import Step from '@/types/step';
import { Dispatch, SetStateAction } from 'react';

type SolutionStep = {
  number: number;
  explanation: string;
  setSolutionSteps: Dispatch<SetStateAction<Step[]>>;
};

// Function to add a step to the solution
export default function addStep({ number, explanation, setSolutionSteps }: SolutionStep) {
  setSolutionSteps((prevSteps) => [...prevSteps, { number, explanation }]);
}
