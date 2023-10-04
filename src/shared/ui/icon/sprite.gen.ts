export interface SpritesMap {
  sprite: 'check' | 'chevron';
}
export const SPRITES_META = {
  sprite: ['check', 'chevron'],
} satisfies {
  sprite: Array<'check' | 'chevron'>;
};
