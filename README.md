# antd-table-excel-copy-paste

⚡ Copy and paste data grid from Microsoft Excel to Ant Design table.

## Usage

`<AntdExcelCopyPastTable />`

### Props

**tableDataHandler**
Optional function with tableData input parameter
`(tableData: unknown[]) => void`

**actionButtonTitle**
Optinal string

**validation**
Optional
`{ validationSchema: AnySchema validateOnPaste?: boolean }`
see [yup](https://github.com/jquense/yup) for **validationSchema**

**validateOnPaste**
To validate table data on onPaste event
