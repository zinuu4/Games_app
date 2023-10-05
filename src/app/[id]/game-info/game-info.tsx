import React from 'react';

import styles from './game-info.module.scss';

interface GameInfoProps {
  title: string;
}

export const GameInfo: React.FC<GameInfoProps> = ({ title }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>{title}</h1>
  </div>
);
