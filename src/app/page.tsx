import { GamesFilters } from '@/features/games-filters/games-filters';
import { GamesList } from '@/widgets';

export default function Home() {
  return (
    <main className="page-container">
      <GamesFilters />
      <GamesList />
    </main>
  );
}
