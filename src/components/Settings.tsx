import React, { FC } from 'react';
import {
  Box,
  TablePicker,
  Heading,
  Text,
  colors,
  FormField,
  FieldPicker,
  useBase,
} from '@airtable/blocks/ui';
import { useStore } from '../store';
import { FieldType } from '@airtable/blocks/models';

const Settings: FC = () => {
  const base = useBase();

  const {
    taxTableId,
    taxFieldValueId,
    setTaxTableId,
    setFieldValueId,
  } = useStore();

  const table = base.getTableByIdIfExists(taxTableId);
  const field = table.getFieldIfExists(taxFieldValueId);
  return (
    <Box maxWidth={400} padding={3}>
      <Heading as={'h3'}>设置面板</Heading>
      <Text textColor={colors.GRAY} marginBottom={3}>
        TODO: 配置说明...
      </Text>
      <FormField label={'请选择个税表'}>
        <TablePicker
          size={'small'}
          table={table}
          placeholder={'请选择表格...'}
          onChange={(t) => {
            setTaxTableId(t?.id);
          }}
        />
      </FormField>
      {table ? (
        <FormField label={'请选择数值字段'}>
          <FieldPicker
            size={'small'}
            table={table}
            field={field}
            allowedTypes={[FieldType.NUMBER]}
            placeholder={'请选择字段...'}
            onChange={(f) => {
              setFieldValueId(f?.id);
            }}
          />
        </FormField>
      ) : null}
    </Box>
  );
};

export default Settings;
