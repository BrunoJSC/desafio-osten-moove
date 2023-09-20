import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <label className="block text-gray-600 mb-2">
      {label}
      <input
        {...props}
        className="block w-full mt-1 px-3 py-2 rounded-lg bg-gray-200 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
      />
    </label>
  );
}
