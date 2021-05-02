import * as React from "react"
import Svg, { SvgProps, Defs, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function IconLogout(props: SvgProps) {
    return (
        <Svg
            className="prefix__icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            {...props}
        >
            <Defs></Defs>
            <Path fill={props.color || '#000'} d="M350.316 0v53.895h-215.58c-42.037 0-76.53 32.067-80.464 73.081l-.377 7.76v754.527c0 42.038 32.067 76.53 73.081 80.465l7.76.377h215.58V1024h-215.58A134.79 134.79 0 01.27 898.102L0 889.263V134.737A134.79 134.79 0 01125.898.269L134.737 0h215.579zm365.622 220.376l3.772 3.072L989.184 492.92l1.994 2.264 2.264 3.341 1.617 3.234 1.077 3.341.647 3.019.27 3.88-.162 2.856-.755 4.043-1.077 3.395-2.803 5.012-2.48 3.072L719.71 800.552a26.947 26.947 0 01-41.23-34.384l3.073-3.773 223.501-223.448H323.368a26.947 26.947 0 01-4.85-53.463l4.85-.431h581.686L681.553 261.605a26.947 26.947 0 01-3.072-34.385l3.072-3.772a26.947 26.947 0 0134.385-3.072z" />
        </Svg>
    )
}

export default IconLogout
