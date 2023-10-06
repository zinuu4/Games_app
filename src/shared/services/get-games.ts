interface GetGamesProps {
  limit: number;
  offset: number;
}

export const getGames = async ({ limit, offset }: GetGamesProps) => {
  const response = await fetch(`/api/games?limit=${limit}&offset=${offset}`);

  if (!response.ok) throw new Error('Unable to fetch games.');

  return response.json();
};

interface GetSingleGameProps {
  name: string;
}

export const getSingleGame = async ({ name }: GetSingleGameProps) => {
  const response = await fetch(`/api/games?name=${name}`);

  if (!response.ok) throw new Error('Unable to fetch game.');

  return response.json();
};
