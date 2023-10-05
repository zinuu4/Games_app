import { Metadata } from 'next';

import { BackButton } from '@/features/back-button';

import { GameInfo } from './game-info';

import styles from './page.module.scss';

type GameProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: GameProps): Promise<Metadata> {
  return {
    title: `Game ${id}`,
  };
}

export default function Game({ params: { id } }: GameProps) {
  return (
    <main className="page-container">
      <BackButton
        className={styles.backButton}
        title="На главную"
        path="/"
      />
      <GameInfo title={id} />
    </main>
  );
}
