import { ClipboardEvent } from 'react'

export const pasteEvent = (pasteHandler: (values: any) => void, event: ClipboardEvent<any>): void => {
  const value = event.clipboardData.getData('text/html')

  pasteHandler(value)
}
