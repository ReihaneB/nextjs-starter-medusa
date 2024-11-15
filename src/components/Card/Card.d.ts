import React from 'react';

export interface CardProps {
  title?: string;
  children?: React.ReactNode;
  backgroundColor?: 'light' | 'dark';
  contentStyle?: string;
}
