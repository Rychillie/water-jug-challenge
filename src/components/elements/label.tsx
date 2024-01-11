import { LabelHTMLAttributes } from 'react';

export default function Label({ children }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className="text-base font-medium text-neutral-700">{children}</label>;
}
