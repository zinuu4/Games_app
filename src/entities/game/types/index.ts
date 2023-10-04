export type Game = {
  title: string;
  provider: string;
  collections: {
    novelty?: number;
    popularity?: number;
    slots?: number;
    books?: number;
    all?: number;
    _hd?: number;
    bonusbuy?: number;
    new?: number;
    btcgames?: number;
    ltcgames?: number;
    dogegames?: number;
    xrpgames?: number;
    ethgames?: number;
    usdtgames?: number;
    'free-slots'?: number;
    'free-spins'?: number;
    retrigger?: number;
    'stacked-symbols'?: number;
    'multiplier-wild'?: number;
    'scatter-pays'?: number;
    'turbo-spin'?: number;
    'fruit-slots'?: number;
    'random-multiplier'?: number;
  };
  real: {
    DOG?: {
      id?: number;
    };
    LTC?: {
      id?: number;
    };
    USDT?: {
      id?: number;
    };
    BTC?: {
      id?: number;
    };
    XRP?: {
      id?: number;
    };
    ETH?: {
      id?: number;
    };
  };
  demo: string;
};

export type Games = Record<string, Game>;
