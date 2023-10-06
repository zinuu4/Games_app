'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { GameCard } from '@/entities/game/ui/game-card';
import { Games } from '@/entities/game/types';
import { useGameService } from '@/shared/services';
import { Button, ErrorMessage, Loader } from '@/shared/ui';
import { useAppSelector } from '@/shared/lib';

import { filterByCurrency, filterByProvider } from './lib/filter-games';

import styles from './games-list.module.scss';

export const GamesList = () => {
  const [games, setGames] = useState<Games>({});
  const [newItemLoading, setNewItemLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [gamesEnded, setGamesEnded] = useState(false);

  const { currency, provider } = useAppSelector((state) => state.filters);

  const { getGames, loading, error, clearError } = useGameService();

  const onScroll = () => {
    if (gamesEnded) {
      return;
    }
    if (
      // prettier-ignore
      window.innerHeight + window.pageYOffset
      >= document.body.offsetHeight - 1
    ) {
      setNewItemLoading(true);
    }
  };

  const onGamesListLoaded = (newGamesList: Games) => {
    if (Object.keys(newGamesList).length < 12) {
      setGamesEnded(true);
    }

    setGames((gamesList) => ({ ...gamesList, ...newGamesList }));
    setNewItemLoading(false);
    clearError();
    setOffset((prevOffset) => prevOffset + 12);
  };

  const onRequest = () => {
    setNewItemLoading(true);

    getGames({ offset, limit: 12 }).then(onGamesListLoaded);
  };

  useEffect(() => {
    onRequest();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (newItemLoading) {
      onRequest();
    }
  }, [newItemLoading]);

  const errorMessage = error ? (
    <ErrorMessage
      title={error.message}
      onClick={onRequest}
    />
  ) : null;
  const loadingMessage = loading || newItemLoading ? <Loader /> : null;

  const filteredGames = filterByCurrency(
    filterByProvider(games, provider),
    currency,
  );

  // prettier-ignore
  const isNoGames = !Object.keys(filteredGames).length
    && !Object.keys(games).length
    && !loading;

  // prettier-ignore
  const isButtonDisabled = gamesEnded
    || newItemLoading
    || loading
    || error?.status === 500
    || isNoGames;

  return (
    <section className={clsx('container', styles.container)}>
      <div className={styles.list}>
        {Object.keys(filteredGames).map((gameKey) => {
          const game = games[gameKey];

          return (
            <GameCard
              key={gameKey}
              identifier={gameKey}
              title={game.title}
            />
          );
        })}
      </div>
      {isNoGames && (
        <ErrorMessage
          title="Игры не найдены"
          onClick={onRequest}
        />
      )}
      {errorMessage}
      {loadingMessage}
      <Button
        className={clsx(styles.button, {
          [styles.disabled]: isButtonDisabled,
        })}
        title="Показать еще"
        onClick={onRequest}
        disabled={isButtonDisabled}
      />
    </section>
  );
};
