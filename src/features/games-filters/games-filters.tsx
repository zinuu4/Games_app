import clsx from 'clsx';
import React from 'react';

import { Select } from '@/shared/ui';

import { currencyOptions, providerOptions } from './config';

import styles from './games-filters.module.scss';

export const GamesFilters = () => (
  <section className={clsx('container', styles.container)}>
    <div className={styles.filters}>
      <Select
        className={styles.select}
        name="Валюта"
        options={currencyOptions}
      />
      <Select
        className={styles.select}
        name="Провайдер"
        options={providerOptions}
      />
    </div>
  </section>
);
