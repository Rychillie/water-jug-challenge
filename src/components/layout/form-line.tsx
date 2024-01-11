import { ReactNode } from 'react';
import { AnimateEnter } from '.';

interface Props {
  children: ReactNode;
  delay?: number;
}

export default function FormLine({ children, delay = 0 }: Props) {
  return (
    <AnimateEnter delay={delay}>
      <div className="flex w-full flex-col space-y-1.5 sm:flex-row sm:items-center sm:space-x-1.5 sm:space-y-0">
        {children}
      </div>
    </AnimateEnter>
  );
}
