import clsx from 'clsx';
import React from 'react';

import { Icon } from '@/shared/ui';

import styles from './trigger-button.module.scss';

interface SelectTriggerProps {
  activeFilter: string;
  onClick: () => void;
  label: string | number;
  isOpen: boolean;
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({
  activeFilter,
  onClick,
  label,
  isOpen,
}) => (
  <div
    onClick={onClick}
    className={styles.label}
  >
    <span className={styles.value}>{activeFilter || label}</span>
    <span className={clsx(styles.arrow, isOpen && styles.open)}>
      <Icon
        name="chevron"
        className={styles.icon}
      />
    </span>
  </div>
);
