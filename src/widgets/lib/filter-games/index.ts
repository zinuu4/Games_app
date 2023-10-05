// @ts-nocheck
/* eslint-disable no-param-reassign */

// TODO: fix ts errors

import { Games } from '@/entities/game/types';

export function filterByProvider(data: Games, provider: string) {
  if (provider === '') {
    return data;
  }

  return Object.keys(data).reduce((filteredData, gameKey) => {
    const game = data[gameKey];

    if (game.provider === provider) {
      filteredData[gameKey] = game;
    }

    return filteredData;
  }, {});
}

export function filterByCurrency(data: Games, currency: string) {
  if (currency === '') {
    return data;
  }

  return Object.keys(data).reduce((filteredData, gameKey) => {
    const game = data[gameKey];
    const { real } = game;

    if (real && real[currency]) {
      filteredData[gameKey] = game;
    }

    return filteredData;
  }, {});
}
