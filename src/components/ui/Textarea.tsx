import { forwardRef } from 'react';
import type { TextareaHTMLAttributes } from 'react';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ label, error, id, ...props }, ref) {
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          className={`px-4 py-2.5 rounded-lg border ${
            error ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'
          } bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-vertical`}
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
