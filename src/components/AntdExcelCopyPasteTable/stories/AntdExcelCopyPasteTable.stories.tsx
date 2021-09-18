import React from 'react'
import { Meta } from '@storybook/react'
import * as yup from 'yup'
import { PageHeader, Descriptions } from 'antd'
import AntdExcelCopyPastTable from '..'
import { Ivalidation } from '../AntdExcelCopyPasteTable.types'

export default {
  title: 'Custom React Components by Henrich Vician',
  component: AntdExcelCopyPastTable,
} as Meta

const args = {
  tableDataHandler: (tableData: unknown[]) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(tableData))
  },
  actionButtonTitle: 'Process Table Data',
}

export const AntdExcelCopyPastTableStory: React.FC = () => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Ant Design Excel Copy Paste Table by Henrich Vician"
        subTitle="Copy and paste tabular data from Microsoft Excel"
      >
        <Descriptions size="small" column={1}>
          <Descriptions.Item label="GitHub">
            <a href="https://github.com/hvician/antd-excel-copy-paste-table">
              https://github.com/hvician/antd-excel-copy-paste-table
            </a>
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
      <AntdExcelCopyPastTable {...args} />
    </>
  )
}
const validation: Ivalidation = {
  validationSchema: yup
    .array()
    .of(yup.object().shape({ key: yup.number().integer().required(), 0: yup.string(), 1: yup.number() })),
}

export const AntdExcelCopyPastTableWIthValidatorStory: React.FC = () => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Ant Design Excel Copy Paste Table by Henrich Vician"
        subTitle="Copy and paste tabular data from Microsoft Excel"
      >
        <Descriptions size="small" column={1}>
          <Descriptions.Item label="GitHub">
            <a href="https://github.com/hvician/antd-excel-copy-paste-table">
              https://github.com/hvician/antd-excel-copy-paste-table
            </a>
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
      <AntdExcelCopyPastTable validation={validation} {...args} />
    </>
  )
}
