import React from 'react'
import { MyComponent } from '..'
import AntdExcelCopyPastTable from '../components/AntdExcelCopyPasteTable'

export default {
  title: 'Custom React Components',
}

export const Default: React.FC = () => {
  return <MyComponent text="Custom react components by Henrich Vician" description="" />
}

export const AntdExcelCopyPastTableStory: React.FC = () => {
  return <AntdExcelCopyPastTable />
}
