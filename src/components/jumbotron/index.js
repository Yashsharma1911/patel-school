import React from 'react'
import { Container, Left, Right, ImageBackGround, Img, Heading, Text, Button, Div } from './styles/jumbotron'

export default function Jumbotron({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Left = function JumbotronLeft({ children, ...restProps }) {
    return <Left {...restProps}>{children}</Left>
}

Jumbotron.Right = function JumbotronRight({ children, ...restProps }) {
    return <Right {...restProps}>{children}</Right>
}

Jumbotron.ImageBackGround = function JumbotronImageBackGround({ children, ...restProps }) {
    return <ImageBackGround {...restProps}>{children}</ImageBackGround>
}

Jumbotron.Img = function JumbotronImg({ ...restProps }) {
    return <Img {...restProps} />
}

Jumbotron.Heading = function JumbotronHeading({ children, ...restProps }) {
    return <Heading {...restProps}>{children}</Heading>
}

Jumbotron.Text = function JumbotronText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Jumbotron.Button = function JumbotronButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

Jumbotron.Div = function JumbotronDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}