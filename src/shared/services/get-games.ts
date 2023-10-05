interface GetGamesProps {
  limit: number;
  offset: number;
}

export const getGames = async ({ limit, offset }: GetGamesProps) => {
  const response = await fetch(`/api/games?limit=${limit}&offset=${offset}`);

  if (!response.ok) throw new Error('Unable to fetch games.');

  return response.json();
};
