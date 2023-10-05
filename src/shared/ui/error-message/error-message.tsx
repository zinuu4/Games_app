import React from 'react';

import { Button } from '@/shared/ui';

import styles from './error-message.module.scss';

interface ErrorMessageProps {
  title: string;
  onClick?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title,
  onClick,
}) => (
  <div className={styles.wrapper}>
    <span className={styles.title}>{title}</span>
    <Button
      onClick={onClick}
      title="Повторить"
    />
  </div>
);
