'use client';

import clsx from 'clsx';
import React from 'react';

import { Select } from '@/shared/ui';
import { useAppSelector } from '@/shared/lib';

import { currencyOptions, providerOptions } from './config';

import styles from './games-filters.module.scss';

export const GamesFilters = () => {
  const { currency, provider } = useAppSelector((state) => state.filters);

  return (
    <section className={clsx('container', styles.container)}>
      <div className={styles.filters}>
        <Select
          activeFilter={currency}
          className={styles.select}
          label="Валюта"
          type="currency"
          options={currencyOptions}
        />
        <Select
          activeFilter={provider}
          className={styles.select}
          label="Провайдер"
          type="provider"
          options={providerOptions}
        />
      </div>
    </section>
  );
};
