import React, { ClipboardEvent } from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { pasteEvent } from './utils'

const Input = styled.input`
  padding: 2em;
  background: papayawhip;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  width: 100%;
`

const pasteHandler = (data: any) => {
  console.log(data)
}

const AntdExcelCopyPasteTable: React.FC = () => {
  const columns: any[] = []
  const data: any = undefined

  return (
    <>
      <Input
        onPaste={(event: ClipboardEvent<any>) => pasteEvent(pasteHandler, event)}
        onChange={null}
        value="paste excel data here"
      />
      <Table<any> dataSource={data} columns={columns} />
    </>
  )
}

export default AntdExcelCopyPasteTable
