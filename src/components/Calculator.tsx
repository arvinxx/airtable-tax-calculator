import React, { FC } from 'react';
import {
  Box,
  colors,
  useBase,
  useRecords,
  FormField,
  Input,
  Heading,
  Text,
} from '@airtable/blocks/ui';
import { useStore } from '../store';

const Calculator: FC = () => {
  const base = useBase();

  const { taxTableId, taxFieldValueId } = useStore();

  const table = base.getTableByIdIfExists(taxTableId);

  const records = useRecords(table);

  const valueField = table?.getFieldIfExists(taxFieldValueId);

  return (
    <Box
      backgroundColor={colors.GRAY_LIGHT_2}
      flex={1}
      height={'100vh'}
      padding={3}
    >
      <Box backgroundColor={'white'} padding={3} borderRadius={4}>
        <Heading as={'h3'} marginBottom={3}>
          个税计算器
        </Heading>
        {records ? (
          records?.map((r, index) => (
            <FormField label={r.name} key={index}>
              <Input
                value={valueField && r.getCellValueAsString(valueField)}
                placeholder={'请选择数值字段'}
                disabled={!valueField}
                onChange={(e) => {
                  console.log(e.target.value);
                  table
                    .updateRecordAsync(r, {
                      [valueField.name]: valueField.convertStringToCellValue(
                        e.target.value
                      ),
                    })
                    .finally();
                }}
              />
            </FormField>
          ))
        ) : (
          <Text textColor={colors.GRAY}>请在右侧的设置面板选择你的个税表</Text>
        )}
      </Box>
    </Box>
  );
};

export default Calculator;
