import React from 'react'
import { Container, Left, Right, HeadLine, SubHeadLine, Img, Button, Div } from './styles/feature'

export default function Feature({ children, ...restProps }) {
    return (
        <Container{...restProps}>{children}</Container>
    )
}

Feature.Left = function FeatureLeft({ children, ...restProps }) {
    return <Left {...restProps}>{children}</Left>
}

Feature.Right = function FeatureRight({ children, ...restProps }) {
    return <Right {...restProps}>{children}</Right>
}

Feature.HeadLine = function FeatureHeadLine({ children, ...restProps }) {
    return <HeadLine {...restProps}>{children}</HeadLine>
}

Feature.SubHeadLine = function FeatureSubHeadLine({ children, ...restProps }) {
    return <SubHeadLine {...restProps}>{children}</SubHeadLine>
}

Feature.Button = function FeatureButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

Feature.Img = function FeatureImg({ ...restProps }) {
    return <Img {...restProps} />
}

Feature.Div = function FeatureDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}
