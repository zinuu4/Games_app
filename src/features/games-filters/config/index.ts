import { Currencies, Providers } from '@/shared/types';

interface CurrencyOptions {
  label: Currencies;
  value: Currencies;
}

export const currencyOptions: CurrencyOptions[] = [
  { label: 'USDT', value: 'USDT' },
  { label: 'BTC', value: 'BTC' },
  { label: 'ETH', value: 'ETH' },
  { label: 'DOG', value: 'DOG' },
  { label: 'LTC', value: 'LTC' },
  { label: 'XRP', value: 'XRP' },
];

interface ProviderOptions {
  label: Providers;
  value: Providers;
}

export const providerOptions: ProviderOptions[] = [
  { label: '1spin4win', value: '1spin4win' },
  { label: 'belatra', value: 'belatra' },
  { label: 'booming', value: 'booming' },
];
