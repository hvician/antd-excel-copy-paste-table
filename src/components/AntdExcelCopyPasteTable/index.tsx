import React, { ClipboardEvent, useState, useEffect } from 'react'
import { Table, TableColumnType, TableProps } from 'antd'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { AnySchema, ValidationError } from 'yup'
import { pasteEvent } from './utils'
import TableFooter from './TableFooter'
import './style.css'

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
  validation?: Ivalidation
}

export interface Ivalidation {
  validationSchema: AnySchema
  validateOnPaste?: boolean
}

const AntdExcelCopyPasteTable: React.FC<IAntdExcelCopyPasteTableProps> = props => {
  const { tableDataHandler, validation, actionButtonTitle } = props

  const [columns, setColumns] = useState<TableColumnType<unknown>[] | undefined>(undefined)
  const [tableData, setTableData] = useState<TableProps<unknown>[] | undefined>(undefined)
  const [validationErrors, setValidationErrors] = useState<ValidationError['errors'] | undefined>(undefined)
  const defaultValue = 'paste excel data here'

  useEffect(() => {
    if (validationErrors) {
      // eslint-disable-next-line no-alert
      console.log('validation error', validationErrors)
    }
  }, [validationErrors])

  useEffect(() => {
    if (tableData && validation && validation.validateOnPaste) {
      validation.validationSchema
        .validate(tableData, { abortEarly: false, strict: true })
        .catch((err: ValidationError) => {
          setValidationErrors(err.errors)
        })
        .then((valid: unknown[]) => valid)
    }
  }, [validation, tableData])

  console.log('errors', validationErrors, ' data: ', tableData)

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
          rowClassName={(record: any) =>
            validationErrors
              ? validationErrors.findIndex((errorText: string) => errorText.indexOf(`[${record.key}]`) > -1) > -1
                ? 'errorRow'
                : 'validRow'
              : ''
          }
          footer={(data: unknown[]) => (
            <TableFooter
              setColumns={setColumns}
              setTableData={setTableData}
              tableDataHandler={tableDataHandler}
              tableData={data}
              actionButtonTitle={actionButtonTitle}
              valitadion={validation}
              setValidationErrors={setValidationErrors}
            />
          )}
        />
      )}
    </>
  )
}

export default AntdExcelCopyPasteTable
