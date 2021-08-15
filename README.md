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

## Development

Clone this repo and run the following commands to start development with Storybook.

```bash
npm install --production=false
npm run storybook
```

Go to `localhost:6006` and you should see something like this.

## Building

To build your project, run `npm run build`.

## Publishing

```bash
npm publish
```

This builds `commonjs`, `esm`, and `umd` versions of your module to `dist/` and then publishes your module to `npm`.
Make sure that any npm modules you want as peer dependencies are properly marked as `peerDependencies` in `package.json`. The rollup config will automatically recognize them as peers and not try to bundle them in your module.

## License

MIT © [Rhaidzsal Ali](https://github.com/rhaicode)
