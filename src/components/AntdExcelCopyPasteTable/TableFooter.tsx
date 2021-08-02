import { Row, TableColumnType, TableProps, Col, Button, Space } from 'antd'
import React from 'react'
import { AnySchema } from 'yup'

interface ITableFooterProps {
  setColumns: (columnData: TableColumnType<unknown>[]) => void
  setTableData: (tableData: TableProps<unknown>[]) => void
  tableDataHandler?: (tableData: unknown[]) => void
  tableData: unknown[]
  actionButtonTitle: string
  valitadionSchema?: AnySchema
}

const TableFooter: React.FC<ITableFooterProps> = props => {
  const { setColumns, setTableData, tableDataHandler, valitadionSchema, tableData, actionButtonTitle } = props
  return (
    <Row justify="end">
      <Col span={4} className="text-right">
        <Space>
          <Button
            type="default"
            shape="round"
            onClick={() => {
              setColumns(null)
              setTableData(null)
            }}
          >
            Clear
          </Button>
          {valitadionSchema && (
            <Button type="default" shape="round" onClick={() => null}>
              Validate Data
            </Button>
          )}
          {tableDataHandler && tableData && (
            <Button
              type="primary"
              shape="round"
              onClick={() => {
                tableDataHandler(tableData)
              }}
            >
              {actionButtonTitle || 'Process Data'}
            </Button>
          )}
        </Space>
      </Col>
    </Row>
  )
}

export default TableFooter
