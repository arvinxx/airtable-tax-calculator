import React, { FC, useState } from 'react';
import { useSettingsButton, Box } from '@airtable/blocks/ui';
import { Settings, Calculator } from './components';

const App: FC = () => {
  const [showSettings, setShowSettings] = useState(true);

  useSettingsButton(() => {
    setShowSettings(!showSettings);
  });

  return (
    <Box display={'flex'}>
      <Calculator />
      {showSettings ? <Settings /> : null}
    </Box>
  );
};

export default App;
