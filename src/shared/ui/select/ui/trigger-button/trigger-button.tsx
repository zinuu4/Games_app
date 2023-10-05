import clsx from 'clsx';
import React from 'react';

// TODO: fix path
import { Icon } from '../../../icon';

import styles from './trigger-button.module.scss';

interface SelectTriggerProps {
  onClick: () => void;
  label: string | number;
  isOpen: boolean;
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({
  onClick,
  label,
  isOpen,
}) => {
  const selectedOption = { label: 'movie', value: '91' };

  return (
    <div
      onClick={onClick}
      className={styles.label}
    >
      <span className={styles.value}>{selectedOption?.label ?? label}</span>
      <span className={clsx(styles.arrow, isOpen && styles.open)}>
        <Icon
          name="chevron"
          className={styles.icon}
        />
      </span>
    </div>
  );
};
