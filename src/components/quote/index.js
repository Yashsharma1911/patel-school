import React from 'react'
import { Container, Text, TagText, Div, Img } from "./styles/quote"

export default function Quote({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Quote.Img = function QuoteImg({ children, ...restProps }) {
    return <Img {...restProps} />
}

Quote.Text = function QuoteText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Quote.TagText = function QuoteTagText({ children, ...restProps }) {
    return <TagText {...restProps}>{children}</TagText>
}

Quote.Div = function QuoteDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}
