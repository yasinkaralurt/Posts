import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function IconArrowBack(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 640 1024"
      {...props}
    >
      <Path
        d="M32 577l434 426q21 21 51 21t51-21l51-51q21-21 21-51t-21-51L281 512l338-338q21-21 21-51t-21-51l-51-51Q547 0 517 0t-51 21L32 449Q0 481 0 513t32 64z"
        fill={props.color || '#000'}
      />
    </Svg>
  )
}

export default IconArrowBack
