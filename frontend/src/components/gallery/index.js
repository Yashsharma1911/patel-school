import React from 'react'
import { Container } from "./styles/gallery"

export default function Gallery({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}