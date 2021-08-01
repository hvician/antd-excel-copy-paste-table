import React from 'react'
import { Meta } from '@storybook/react'
import AntdExcelCopyPastTable from '../components/AntdExcelCopyPasteTable'

export default {
  title: 'Custom React Components',
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
  return <AntdExcelCopyPastTable {...args} />
}
