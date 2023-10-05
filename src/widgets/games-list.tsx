'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { GameCard } from '@/entities/game/ui/game-card';
import { getGames } from '@/shared/services/get-games';
import { Games } from '@/entities/game/types';
import { Button } from '@/shared/ui';

import styles from './games-list.module.scss';

export const GamesList = () => {
  const [games, setGames] = useState<Games>({});
  const [newItemLoading, setNewItemLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [gamesEnded, setGamesEnded] = useState(false);

  const onScroll = () => {
    if (gamesEnded) {
      return;
    }
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 1
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

  return (
    <section className={clsx('container', styles.container)}>
      <div className={styles.list}>
        {Object.keys(games).map((gameKey) => {
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
      <Button
        className={clsx(styles.button, {
          [styles.disabled]: gamesEnded || newItemLoading,
        })}
        title="Показать еще"
        onClick={onRequest}
        disabled={gamesEnded || newItemLoading}
      />
    </section>
  );
};
