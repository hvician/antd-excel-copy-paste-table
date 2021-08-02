import React, { ClipboardEvent, useState } from 'react'
import { Table, TableColumnType, TableProps } from 'antd'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { AnySchema } from 'yup'
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
  validationSchema?: AnySchema
}

const AntdExcelCopyPasteTable: React.FC<IAntdExcelCopyPasteTableProps> = props => {
  const { tableDataHandler, validationSchema, actionButtonTitle } = props

  const [columns, setColumns] = useState<TableColumnType<unknown>[] | undefined>(undefined)
  const [tableData, setTableData] = useState<TableProps<unknown>[] | undefined>(undefined)

  const defaultValue = 'paste excel data here'
  return (
    <>
      <Input
        onPaste={(event: ClipboardEvent<any>) => pasteEvent(setColumns, setTableData, event)}
        onChange={() => defaultValue}
        value={defaultValue}
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
              valitadionSchema={validationSchema}
            />
          )}
        />
      )}
    </>
  )
}

export default AntdExcelCopyPasteTable
