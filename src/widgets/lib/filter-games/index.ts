/* eslint-disable no-param-reassign */
import { Currencies, Games, Providers } from '@/shared/types';

interface FilterByProviderProps {
  data: Games;
  provider: Providers;
}

export function filterByProvider({ data, provider }: FilterByProviderProps) {
  if (provider === '') {
    return data;
  }

  return Object.keys(data).reduce((filteredData: Games, gameKey) => {
    const game = data[gameKey];

    if (game.provider === provider) {
      filteredData[gameKey] = game;
    }

    return filteredData;
  }, {});
}

interface FilterByCurrencyProps {
  data: Games;
  currency: Currencies;
}

export function filterByCurrency({ data, currency }: FilterByCurrencyProps) {
  if (currency === '') {
    return data;
  }

  return Object.keys(data).reduce((filteredData: Games, gameKey) => {
    const game = data[gameKey];
    const { real } = game;

    if (real && real[currency]) {
      filteredData[gameKey] = game;
    }

    return filteredData;
  }, {});
}
