import React, { ReactNode } from 'react';

export interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
    // children: String;
    className?: string;
    disabled?: boolean;
    active?: boolean;
    // onClick: Function;
  }