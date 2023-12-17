import React, { ReactNode } from 'react';

export interface InputProps {
  className?: string;
  register: (name: string) => void;
  nameInput: string;
}
