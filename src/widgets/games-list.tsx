'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { GameCard } from '@/entities/game/ui/game-card';
import { getGames } from '@/shared/services/get-games';
import { Games } from '@/entities/game/types';
import { Button, ErrorMessage, Loader } from '@/shared/ui';
import { useAppSelector } from '@/shared/lib';

import styles from './games-list.module.scss';
import { filterByCurrency, filterByProvider } from './lib/filter-games';

export const GamesList = () => {
  const [games, setGames] = useState<Games>({});
  const [newItemLoading, setNewItemLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [gamesEnded, setGamesEnded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { currency, provider } = useAppSelector((state) => state.filters);

  const onScroll = () => {
    if (gamesEnded) {
      return;
    }
    if (
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
    setLoading(false);
    setOffset((prevOffset) => prevOffset + 12);
  };

  const onRequest = () => {
    setError(false);
    setLoading(true);
    setNewItemLoading(true);

    getGames({ offset, limit: 12 })
      .then(onGamesListLoaded)
      .catch(() => setError(true));
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
      title="Ошибка загрузки"
      onClick={onRequest}
    />
  ) : null;
  const loadingMessage = loading || newItemLoading ? <Loader /> : null;

  const filteredGames = filterByCurrency(
    filterByProvider(games, provider),
    currency,
  );

  const isNoGames = Object.keys(filteredGames).length === 0 && !loading;
  const isButtonDisabled = gamesEnded || newItemLoading || loading || error || isNoGames;

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
