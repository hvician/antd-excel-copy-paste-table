import { ClipboardEvent } from 'react'
import { TableColumnType, TableProps } from 'antd'
import { parse, ParseConfig } from 'papaparse'

const parseConfig: ParseConfig<any> = {
  header: false,
  delimiter: '\t',
  skipEmptyLines: true,
}

const makeColumns = (parsedData: unknown[]) => {
  const keys = Object.keys(parsedData[0])

  return keys
    ? keys.map((key: string, index: number) => ({
        title: `Column ${index + 1}`,
        dataIndex: key,
        key,
      }))
    : null
}

const makeTableData = (parsedData: unknown[]) =>
  parsedData.map((row: unknown[], rowIndex: number) => {
    const newRow: any = row.reduce((reducer: unknown, rowItem: unknown, index: number) => {
      // eslint-disable-next-line no-param-reassign
      reducer[`${index}`] = rowItem
      return reducer
    }, {})

    newRow.key = rowIndex
    return newRow
  })

export const pasteEvent = (
  setColumns: (columnData: TableColumnType<unknown>[]) => void,
  setTableData: (tableData: TableProps<unknown>[]) => void,
  event: ClipboardEvent<any>
): void => {
  const value = event.clipboardData.getData('text/plain')

  const parsedData = parse(value, parseConfig)

  const cols = makeColumns(parsedData.data)
  setColumns(cols)

  setTableData(makeTableData(parsedData.data))
}
