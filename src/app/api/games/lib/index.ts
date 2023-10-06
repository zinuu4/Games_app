import { Games } from '@/shared/types';

export function sortGamesByPopularity(games: Games) {
  const gameArray = Object.entries(games).map(([gameKey, gameData]) => ({
    gameKey,
    popularity: gameData.collections?.popularity || 0,
  }));

  gameArray.sort((a, b) => b.popularity - a.popularity);

  const sortedGames: Games = {};
  gameArray.forEach(({ gameKey }) => {
    sortedGames[gameKey] = games[gameKey];
  });

  return sortedGames;
}
