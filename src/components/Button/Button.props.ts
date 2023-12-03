import React, { ReactNode } from 'react';

export interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    active?: boolean;
  }