'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { useGameService } from '@/shared/services';
import { Game } from '@/entities/game/types';
import { ErrorMessage, Loader } from '@/shared/ui';

import styles from './game-info.module.scss';

interface GameInfoProps {
  gameIdentifier: string;
}

export const GameInfo: React.FC<GameInfoProps> = ({ gameIdentifier }) => {
  const [game, setGame] = useState<Game>();

  const { getSingleGame, loading, error, clearError } = useGameService();

  const onRequest = () => {
    clearError();

    getSingleGame({ name: gameIdentifier }).then((game) => {
      setGame(game);
    });
  };

  useEffect(() => {
    onRequest();
  }, []);

  const errorMessage = error ? (
    <ErrorMessage
      title="Ошибка загрузки"
      onClick={onRequest}
    />
  ) : null;
  const loadingMessage = loading ? <Loader /> : null;
  const content = !(error || loading) ? (
    <>
      <div className={styles.imageWrapper}>
        <Image
          src={`https://cdn2.softswiss.net/i/s2/${gameIdentifier}.png`}
          alt={gameIdentifier}
          className={styles.image}
          layout="fill"
        />
      </div>
      <h1 className={styles.title}>{game?.title}</h1>
      <div>
        Provider: <span className={styles.provider}>{game?.provider}</span>
      </div>
      <div className={styles.currencies}>
        Currencies:
        {Object.keys(game?.real ?? {}).map((key) => (
          <span
            className={styles.currency}
            key={key}
          >
            {key}
          </span>
        ))}
      </div>
    </>
  ) : null;

  return (
    <div className={styles.wrapper}>
      {loadingMessage}
      {errorMessage}
      {content}
    </div>
  );
};
