import { TableColumnType, TableProps } from 'antd'
import { ValidationError } from 'yup'
import { Ivalidation } from './AntdExcelCopyPasteTable.types'

export interface ITableFooterProps {
  setColumns: (columnData: TableColumnType<unknown>[]) => void
  setTableData: (tableData: TableProps<unknown>[]) => void
  tableDataHandler?: (tableData: unknown[]) => void
  tableData: unknown[]
  actionButtonTitle: string
  valitadion?: Ivalidation
  setValidationErrors?: (validationErrors: ValidationError['errors'] | undefined) => void
}
