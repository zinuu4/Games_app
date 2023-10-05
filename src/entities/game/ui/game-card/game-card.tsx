import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import styles from './game-card.module.scss';

interface GameCardProps {
  identifier: string;
  title: string;
}

export const GameCard: React.FC<GameCardProps> = ({ identifier, title }) => (
  <Link
    href={`/${title}`}
    className={styles.card}
  >
    <div className={styles.imageWrapper}>
      <Image
        src={`https://cdn2.softswiss.net/i/s2/${identifier}.png`}
        alt={title}
        className={styles.image}
        layout="fill"
      />
    </div>
    <h6 className={styles.title}>{title}</h6>
  </Link>
);
