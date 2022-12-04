import { type } from "os";
import React, { ChangeEvent } from "react";

export interface IInputProps {
  placeholder: string;
  type: string;
  title: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function Input({ placeholder, type, title, value, onChange }: IInputProps) {
  return (
    <div className="w-full">
      <h2>{title}</h2>
      <input
        value={value}
        onChange={(e) => onChange(e)}
        type={type}
        className="w-full h-10 bg-slate-200 rounded px-2"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
