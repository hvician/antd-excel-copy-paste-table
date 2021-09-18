import { AnySchema } from 'yup'

export interface IAntdExcelCopyPasteTableProps {
  tableDataHandler?: (tableData: unknown[]) => void
  actionButtonTitle?: string
  validation?: Ivalidation
}

export interface Ivalidation {
  validationSchema: AnySchema
  validateOnPaste?: boolean
}
