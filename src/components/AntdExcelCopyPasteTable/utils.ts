import { ClipboardEvent } from 'react'
import { TableColumnType, TableProps } from 'antd'
import { parse } from 'papaparse'

const parseConfig = {
  header: true,
  delimiter: '\t',
}

const makeColumns = (parsedData: unknown[]) => {
  const keys = Object.keys(parsedData[0])

  return keys
    ? keys.map((key: string) => ({
        title: key,
        dataIndex: key,
        key,
      }))
    : null
}

const makeTableData = (parsedData: unknown[]) =>
  parsedData.map((item: Record<string, any>, index: number) => {
    const keyedItem = item
    keyedItem.key = index
    return keyedItem
  })

export const pasteEvent = (
  setColumns: (columnData: TableColumnType<unknown>[]) => void,
  setTableData: (tableData: TableProps<unknown>[]) => void,
  event: ClipboardEvent<any>
): void => {
  const value = event.clipboardData.getData('text/plain')
  const parsedData = parse(value, parseConfig)

  console.log(parsedData.data)
  const cols = makeColumns(parsedData.data)
  setColumns(cols)

  setTableData(makeTableData(parsedData.data))
}
