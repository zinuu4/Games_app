import { Currencies, Providers } from '@/shared/types';

export interface Option {
  label: Providers | Currencies;
  value: Providers | Currencies;
}
