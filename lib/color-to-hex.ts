import colorPalette from '../public/color-palette.json';

export type Color =
  | 'primary'
  | 'primary-2'
  | 'secondary'
  | 'secondary-2'
  | 'text-base'
  | 'text-primary'
  | 'text-secondary'
  | 'hover'
  | 'hover-1'
  | 'hover-2'
  | 'accents-0'
  | 'accents-1'
  | 'accents-2'
  | 'accents-3'
  | 'accents-4'
  | 'accents-5'
  | 'accents-6'
  | 'accents-7'
  | 'accents-8'
  | 'accents-9'
  | 'selection'
  | 'cyan'
  | 'green'
  | 'red'
  | 'pink'
  | 'purple'
  | 'blue'
  | 'violet-light'
  | 'violet';

export type ColorType = 'light' | 'dark';

const colorToHex = (color: Color, theme: ColorType) => {
  return colorPalette[theme][color];
};

export default colorToHex;
