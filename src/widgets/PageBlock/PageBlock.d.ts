import type React from 'react';

export interface PageBlockProps {
  title: string;
  layout?: '2-left-1-right' | '1-left-2-right' | '50-50' | '4';
  content: React.ReactNode[];
  titleHeadingType?: 'h1';
}
