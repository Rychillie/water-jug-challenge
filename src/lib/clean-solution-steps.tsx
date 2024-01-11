import Step from '@/types/step';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  setSolutionSteps: Dispatch<SetStateAction<Step[]>>;
  setJugXCapacity: Dispatch<SetStateAction<string>>;
  setJugYCapacity: Dispatch<SetStateAction<string>>;
  setGoalAmount: Dispatch<SetStateAction<string>>;
}

export default function clenSolutionSteps({
  setSolutionSteps,
  setJugXCapacity,
  setJugYCapacity,
  setGoalAmount
}: IProps) {
  setSolutionSteps([]);
  setJugXCapacity('');
  setJugYCapacity('');
  setGoalAmount('');
  return;
}
