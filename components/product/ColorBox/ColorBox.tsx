import React from 'react';
import cn from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button } from '@components/ui';

import { Root, Text, Box } from './ColorBox.styles';

interface Props {
  label: string;
  color: string;
  className?: string;
}
const ColorBox: React.FC<Props> = ({ label, color, className, ...props }) => {
  return (
    <Root className={cn(className, 'mb-4')} {...props}>
      <Text className="text-center">{label}</Text>
      <Box className={cn('box', 'transition duration-150 ease-in-out')}>
        <p>inner text</p>
        <div
          className="bg-box transition duration-150 ease-in-out"
          style={{
            backgroundColor: color,
          }}
        />
      </Box>
      <div className="flex justify-between items-end mt-2">
        <Text>{color.toUpperCase()}</Text>
        <CopyToClipboard text={color}>
          <Button inversion variant="slim">
            Copy
          </Button>
        </CopyToClipboard>
      </div>
    </Root>
  );
};

export default ColorBox;
