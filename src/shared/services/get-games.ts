import { useHttp } from '../lib/hooks/http-hook/http.hook';

interface GetGamesProps {
  limit: number;
  offset: number;
}

interface GetSingleGameProps {
  name: string;
}

export const useGameService = () => {
  const { request, loading, error, clearError } = useHttp();

  const getGames = async ({ limit, offset }: GetGamesProps) => {
    const response = await request(
      `/api/games?limit=${limit}&offset=${offset}`,
    );

    return response;
  };

  const getSingleGame = async ({ name }: GetSingleGameProps) => {
    const response = await request(`/api/games?name=${name}`);

    return response;
  };

  return { loading, error, clearError, getGames, getSingleGame };
};
