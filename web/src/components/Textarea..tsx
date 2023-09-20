import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Textarea({ label, ...props }: TextareaProps) {
  return (
    <label className="block text-gray-600 mb-2">
      {label}
      <textarea
        {...props}
        className="block w-full mt-1 px-3 py-2 rounded-lg bg-gray-200 border border-gray-300 text-gray-600 focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
      />
    </label>
  );
}
