import React from 'react'
import { Container, IconsDiv, Heading, HeadingDiv, Text, Div, Img } from './styles/prepares'

export default function Prepares({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Prepares.HeadingDiv = function PreparesHeadingDiv({ children, ...restProps }) {
    return <HeadingDiv {...restProps}>{children}</HeadingDiv>
}
Prepares.IconsDiv = function PreparesIconsDiv({ children, ...restProps }) {
    return <IconsDiv {...restProps}>{children}</IconsDiv>
}
Prepares.Heading = function PreparesIconsDiv({ children, ...restProps }) {
    return <Heading {...restProps}>{children}</Heading>
}
Prepares.Text = function PreparesText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}
Prepares.Div = function PreparesDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}
Prepares.Img = function PreparesImg({ children, ...restProps }) {
    return <Img {...restProps}>{children}</Img>
}