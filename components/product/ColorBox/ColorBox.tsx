import React from 'react';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import CopyToClipboard from 'react-copy-to-clipboard';
import colorToHex, { Color } from '@lib/color-to-hex';
import { Button } from '@components/ui';

import { Root, Text, Box } from './ColorBox.styles';

interface Props {
  color: Color;
  className?: string;
}
const ColorBox: React.FC<Props> = ({ color, className, ...props }) => {
  const { theme } = useTheme();

  const hexColor = React.useMemo(
    () => colorToHex(color, (theme as 'light' | 'dark') ?? 'light'),
    [color, theme]
  );

  return (
    <Root className={cn(className, 'mb-4')} {...props}>
      <Text className="text-center">{color}</Text>
      <Box
        className={cn('box', 'transition duration-150 ease-in-out')}
        style={{
          backgroundColor: hexColor,
        }}
      />
      <div className="flex justify-between items-end mt-2">
        <Text>{hexColor}</Text>
        <CopyToClipboard text={hexColor}>
          <Button inversion variant="slim">
            Copy
          </Button>
        </CopyToClipboard>
      </div>
    </Root>
  );
};

export default ColorBox;
