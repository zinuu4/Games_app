import { NextResponse } from 'next/server';

import { games } from './games';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const name = searchParams.get('name');
  const limitQuery = searchParams.get('limit');
  const offsetQuery = searchParams.get('offset');

  const limit = limitQuery ? +limitQuery : 12;
  const offset = offsetQuery ? +offsetQuery : 0;

  let filteredGames = games;

  // TODO: remove ts-ignore
  if (name) {
    const filteredKeys = Object.keys(games).filter((key) => key === name);
    filteredGames = filteredKeys.reduce((acc, key) => {
      // @ts-ignore
      acc[key] = games[key];
      return acc;
    }, {});
  }

  if (limit) {
    filteredGames = Object.fromEntries(Object.entries(games).slice(0, limit));
  }

  if (offset) {
    filteredGames = Object.fromEntries(
      Object.entries(games).slice(offset, limit),
    );
  }

  return NextResponse.json(filteredGames);
}
