import clsx from 'clsx';
import React from 'react';

import { GameCard } from '@/entities/game/ui/game-card';

import { games } from './config';

import styles from './games-list.module.scss';

export const GamesList = () => (
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
  </section>
);
