import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, error, id, ...props }, ref) {
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={`px-4 py-2.5 rounded-lg border ${
            error ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
          } bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent`}
          {...props}
        />
        {error && (
          <span className="text-sm text-red-600 dark:text-red-400" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  },
);
