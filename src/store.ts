import { useGlobalConfig } from '@airtable/blocks/ui';

export const storeKey = {
  TAX_TABLE_ID: 'TAX_TABLE_ID',
  TAX_FIELD_VALUE_ID: 'TAX_FIELD_VALUE_ID',
};

export const useStore = () => {
  const globalConfig = useGlobalConfig();

  return {
    /**
     * 全局配置参数
     */
    globalConfig,
    /**
     * 个税表 ID
     *
     */
    taxTableId: globalConfig.get(storeKey.TAX_TABLE_ID) as string,
    /**
     * 个税表字段值 id
     */
    taxFieldValueId: globalConfig.get(storeKey.TAX_FIELD_VALUE_ID) as string,
    /**
     * 设置个税表 ID
     * @param id string
     */
    setTaxTableId: (id: string) =>
      globalConfig.setAsync(storeKey.TAX_TABLE_ID, id)
    /**
     * 设置个税表 ID
     * @param id string
     */,
    setFieldValueId: (id: string) =>
      globalConfig.setAsync(storeKey.TAX_FIELD_VALUE_ID, id),
  };
};

export default useStore;
