'use client';

import clsx from 'clsx';
import React, { useState, useRef } from 'react';

import { useAppDispatch, useClickOutside } from '@/shared/lib';
import {
  setCurrencyFilter,
  setProviderFilter,
} from '@/app/providers/store-provider/config/filters-slice';
import { Currencies, Providers } from '@/shared/types';

import { Option } from '../config';
import { SelectOptions } from './options';
import { SelectTrigger } from './trigger-button';

import styles from './select.module.scss';

interface SelectorProps {
  activeFilter: string;
  label: string;
  type: 'provider' | 'currency';
  options: Option[];
  className?: string;
}

export const Select: React.FC<SelectorProps> = ({
  activeFilter,
  label,
  type,
  options,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  useClickOutside(selectRef, () => setIsOpen(false));

  const handleChange = (filter: Providers | Currencies) => {
    setIsOpen(false);

    if (type === 'provider') {
      // @ts-ignore
      dispatch(setProviderFilter(filter));
    } else if (type === 'currency') {
      // @ts-ignore
      dispatch(setCurrencyFilter(filter));
    }
  };

  return (
    <div
      className={clsx(styles.select, className)}
      ref={selectRef}
    >
      <SelectTrigger
        onClick={() => setIsOpen((prev) => !prev)}
        label={label}
        isOpen={isOpen}
        activeFilter={activeFilter}
      />
      <SelectOptions
        options={options}
        onClick={handleChange}
        isOpen={isOpen}
        activeFilter={activeFilter}
      />
    </div>
  );
};
