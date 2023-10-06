import { NextResponse } from 'next/server';

import { sortGamesByPopularity } from './lib';

import { games } from './games';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const name = searchParams.get('name');
  const limitQuery = searchParams.get('limit');
  const offsetQuery = searchParams.get('offset');

  const limit = limitQuery ? +limitQuery : 999;
  const offset = offsetQuery ? +offsetQuery : 0;

  let filteredGames = {};

  if (name) {
    filteredGames = games[name];
  }

  if (limitQuery && offsetQuery) {
    filteredGames = Object.fromEntries(
      Object.entries(games).slice(offset, offset + limit),
    );
  }

  return NextResponse.json(sortGamesByPopularity(filteredGames));
}
