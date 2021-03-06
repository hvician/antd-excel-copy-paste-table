/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

type SvgrComponent = React.FC<React.SVGAttributes<SVGElement>>

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}

// use this to provide proper keys to elements on an array
// https://reactjs.org/docs/lists-and-keys.html#keys
declare module 'react-uuid'
