import React from 'react'
import { Container, Img } from './styles/load'

export default function Load({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Load.Img = function LoadImg({ ...restProps }) {
    return (
        <Img {...restProps} />
    )
}
