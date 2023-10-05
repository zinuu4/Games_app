import clsx from 'clsx';
import React from 'react';

import { ReactTagProps } from '@/shared/types';

import styles from './button.module.scss';

interface ButtonProps extends ReactTagProps<'button'> {
  title: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  className,
  ...props
}) => (
  <button
    className={clsx(styles.button, 'btn-reset', className)}
    {...props}
  >
    {title}
  </button>
);
