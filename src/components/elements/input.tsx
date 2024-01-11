import { InputHTMLAttributes } from 'react';

export default function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="flex flex-1 rounded-xl border px-2 py-1.5 text-base" {...props} />;
}
