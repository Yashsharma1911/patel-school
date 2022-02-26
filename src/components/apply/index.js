import React from 'react'
import { Container, SubContainer, Heading, HeadingDiv, HeadingStyleDiv, WrapCardsDiv, Card, Div, Img, ImgBg, CardHeading, CardText } from './styles/apply'

export default function Apply({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Apply.SubContainer = function ApplySubContainer({ children, ...restProps }) {
    return <SubContainer {...restProps}>{children}</SubContainer>
}

Apply.Heading = function ApplyHeading({ children, ...restProps }) {
    return <Heading {...restProps}>{children}</Heading>
}

Apply.HeadingDiv = function ApplyHeadingDiv({ children, ...restProps }) {
    return <HeadingDiv {...restProps}>{children}</HeadingDiv>
}

Apply.HeadingStyleDiv = function ApplyHeadingStyleDiv({ ...restProps }) {
    return <HeadingStyleDiv {...restProps} />
}

Apply.WrapCardsDiv = function ApplyWrapCardsDiv({ children, ...restProps }) {
    return <WrapCardsDiv {...restProps}>{children}</WrapCardsDiv>
}

Apply.Card = function ApplyCard({ children, ...restProps }) {
    return <Card {...restProps}>{children}</Card>
}

Apply.Div = function ApplyDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}

Apply.Img = function ApplyImg({ ...restProps }) {
    return <Img {...restProps} />
}

Apply.ImgBg = function ApplyImgBg({ children, ...restProps }) {
    return <ImgBg {...restProps}>{children}</ImgBg>
}

Apply.CardHeading = function ApplyCardHeading({ children, ...restProps }) {
    return <CardHeading {...restProps}>{children}</CardHeading>
}

Apply.CardText = function ApplyCardText({ children, ...restProps }) {
    return <CardText {...restProps}>{children}</CardText>
}