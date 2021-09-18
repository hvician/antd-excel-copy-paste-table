/* eslint-disable no-alert */
import { Row, Col, Button, Space } from 'antd'
import React from 'react'
import { ValidationError } from 'yup'
import { ITableFooterProps } from './TableFooter.types'

const TableFooter: React.FC<ITableFooterProps> = props => {
  const {
    setColumns,
    setTableData,
    tableDataHandler,
    valitadion,
    tableData,
    actionButtonTitle,
    setValidationErrors,
  } = props

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
          {valitadion && !valitadion.validateOnPaste && (
            <Button
              type="default"
              shape="round"
              onClick={() => {
                valitadion.validationSchema
                  .validate(tableData, { abortEarly: false, strict: false })
                  .catch((err: ValidationError) => {
                    setValidationErrors(err.errors)
                  })
                  .then((valid: unknown[]) => {
                    console.log('valid: ', valid)
                  })
              }}
            >
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
