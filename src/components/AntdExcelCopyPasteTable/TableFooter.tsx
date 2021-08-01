import { Row, TableColumnType, TableProps, Col, Button } from 'antd'
import React from 'react'

interface ITableFooterProps {
  setColumns: (columnData: TableColumnType<unknown>[]) => void
  setTableData: (tableData: TableProps<unknown>[]) => void
  tableDataHandler?: (tableData: unknown[]) => void
  tableData: unknown[]
  actionButtonTitle: string
}

const TableFooter: React.FC<ITableFooterProps> = props => {
  const { setColumns, setTableData, tableDataHandler, tableData, actionButtonTitle } = props
  return (
    <Row justify="end">
      <Col span={4} className="text-right">
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
      </Col>
    </Row>
  )
}

export default TableFooter
