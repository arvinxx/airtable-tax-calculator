import React, { FC } from 'react';
import {
  Box,
  TablePicker,
  Heading,
  Text,
  colors,
  FormField,
  useGlobalConfig,
  useBase,
} from '@airtable/blocks/ui';
import { storeKey } from '../store';

const Settings: FC = () => {
  const base = useBase();
  const globalConfig = useGlobalConfig();

  const tableID = globalConfig.get(storeKey.TAX_TABLE_ID) as string;

  const table = base.getTableByIdIfExists(tableID);

  return (
    <Box maxWidth={300} padding={3}>
      <Heading as={'h3'}>设置面板</Heading>
      <Text textColor={colors.GRAY} marginBottom={3}>
        TODO: 配置说明...
      </Text>
      <FormField label={'请选择个税表'}>
        <TablePicker
          size={'small'}
          table={table}
          placeholder={'请选择表格...'}
          onChange={(newTable) => {
            globalConfig
              .setAsync(storeKey.TAX_TABLE_ID, newTable.id)
              .catch((e) => {
                console.log(e);
              });
          }}
        />
      </FormField>
    </Box>
  );
};

export default Settings;
