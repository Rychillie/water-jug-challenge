import c from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  priority?: 'default' | 'success' | 'danger';
}

export default function Button({ children, priority = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={c(
        'rounded-md border px-4 py-1.5 transition-all font-medium',
        priority === 'success'
          ? 'hover:bg-green-100 hover:text-green-700 border-green-200 bg-green-50 text-green-600'
          : priority === 'danger'
            ? 'border-red-200 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700'
            : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-700'
      )}
      {...props}
    >
      {children}
    </button>
  );
}
