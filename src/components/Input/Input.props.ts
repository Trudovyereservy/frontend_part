import { RegisterOptions } from "react-hook-form";

export interface InputProps {
  className?: string;
  // register: (name: string, value: any) => void;
  register: any;
  nameInput: string;
  // pattern: string;
  pattern: {
    value: RegExp;
    message: string;
  };
  rest?: RegisterOptions;
}
