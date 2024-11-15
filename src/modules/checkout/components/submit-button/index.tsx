/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */

'use client';

import { Button } from '@medusajs/ui';
import React from 'react';
import { useFormStatus } from 'react-dom';

import styles from './SubmitButton.module.css';

export function SubmitButton({
  children,
  'data-testid': dataTestId,
}: {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'transparent' | 'danger' | null
  className?: string
  'data-testid'?: string
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      size="large"
      variant="transparent"
      className={styles.button}
      type="submit"
      isLoading={pending}
      data-testid={dataTestId}
    >
      {children}
    </Button>
  );
}
