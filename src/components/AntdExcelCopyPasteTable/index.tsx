import React, { ClipboardEvent, useState } from 'react'
import { Table, TableColumnType, TableProps } from 'antd'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { pasteEvent } from './utils'
import TableFooter from './TableFooter'

const Input = styled.input`
  padding: 2em;
  background: papayawhip;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  width: 100%;
`

interface IAntdExcelCopyPasteTableProps {
  tableDataHandler?: (tableData: unknown[]) => void
  actionButtonTitle?: string
}

const AntdExcelCopyPasteTable: React.FC<IAntdExcelCopyPasteTableProps> = props => {
  const { tableDataHandler, actionButtonTitle } = props

  const [columns, setColumns] = useState<TableColumnType<unknown>[] | undefined>(undefined)
  const [tableData, setTableData] = useState<TableProps<unknown>[] | undefined>(undefined)

  return (
    <>
      <Input
        readOnly
        onPaste={(event: ClipboardEvent<any>) => pasteEvent(setColumns, setTableData, event)}
        onChange={null}
        defaultValue="paste excel data here"
      />
      {columns && tableData && (
        <Table<any>
          dataSource={tableData}
          columns={columns}
          pagination={false}
          footer={(data: unknown[]) => (
            <TableFooter
              setColumns={setColumns}
              setTableData={setTableData}
              tableDataHandler={tableDataHandler}
              tableData={data}
              actionButtonTitle={actionButtonTitle}
            />
          )}
        />
      )}
    </>
  )
}

export default AntdExcelCopyPasteTable
