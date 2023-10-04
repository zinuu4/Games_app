'use client';

import clsx from 'clsx';
import React, { useState, useRef } from 'react';

import { useClickOutside } from '@/shared/lib';

import { Option } from '../config';
import { SelectOptions } from './options';
import { SelectTrigger } from './trigger-button';

import styles from './select.module.scss';

interface SelectorProps {
  name: string;
  options: Option[];
  className?: string;
}

export const Select: React.FC<SelectorProps> = ({
  name,
  options,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(selectRef, () => setIsOpen(false));

  const handleChange = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={clsx(styles.select, className)}
      ref={selectRef}
    >
      <SelectTrigger
        onClick={() => setIsOpen((prev) => !prev)}
        label={name ?? ''}
        isOpen={isOpen}
      />
      <SelectOptions
        options={options}
        onClick={handleChange}
        isOpen={isOpen}
      />
    </div>
  );
};
