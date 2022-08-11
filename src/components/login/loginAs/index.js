import React from 'react'
import { Container, SubContainer, ImgContainer, Text, Img, Link, LinkTo } from './styles/loginAs'

export default function LoginAs({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

LoginAs.SubContainer = function loginSubContainer({ children, ...restProps }) {
    return (
        <SubContainer {...restProps}>{children}</SubContainer>
    )
}

LoginAs.ImgContainer = function loginImgContainer({ children, ...restProps }) {
    return (
        <ImgContainer {...restProps}>{children}</ImgContainer>
    )
}

LoginAs.Text = function loginAsText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

LoginAs.Img = function loginAsImg({ ...restProps }) {
    return (
        <Img {...restProps} />
    )
}

LoginAs.Link = function loginAsLink({ children, ...restProps }) {
    return (
        <Link {...restProps} >{children}</Link>
    )
}

LoginAs.LinkTo = function loginAsLinkTo({ children, ...restProps }) {
    return (
        <LinkTo {...restProps} >{children}</LinkTo>
    )
}