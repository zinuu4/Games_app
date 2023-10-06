import clsx from 'clsx';
import React from 'react';

import { Icon } from '@/shared/ui';
import { Currencies, Providers } from '@/shared/types';

import { Option } from '../../config';

import styles from './options.module.scss';

interface SelectOptionsProps {
  activeFilter: string;
  options: Option[];
  onClick: (filter: Providers | Currencies) => void;
  isOpen: boolean;
}

export const SelectOptions: React.FC<SelectOptionsProps> = ({
  activeFilter,
  options,
  onClick,
  isOpen,
}) => (
  <div className={clsx(styles.options, isOpen && styles.open)}>
    {options.map((option) => {
      const isSelected = option.value === activeFilter;
      const nothingSelected = false;

      return (
        <div
          onClick={() => onClick(option.value)}
          key={option.value}
          className={clsx(
            styles.option,
            // prettier-ignore
            (isSelected || (nothingSelected && option.value === ''))
              && styles.selected,
          )}
        >
          {option.label}
          {(isSelected || (nothingSelected && option.value === '')) && (
            <Icon
              name="check"
              className={styles.check}
            />
          )}
        </div>
      );
    })}
  </div>
);
