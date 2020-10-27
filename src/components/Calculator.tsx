import React, { FC } from 'react';
import { Box, colors, useBase } from '@airtable/blocks/ui';

const Calculator: FC = () => {
  const base = useBase();

  return (
    <Box
      backgroundColor={colors.GRAY_LIGHT_2}
      flex={1}
      height={'100vh'}
      padding={3}
    >
      显示配置面板: {}
    </Box>
  );
};

export default Calculator;
