import React from 'react'
import { Container, SubContainer, Img, TextBig, TextSmall, Link } from "./styles/thanks"

export default function Thanks({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Thanks.SubContainer = function thanksSubContainer({ children, ...restProps }) {
    return <SubContainer {...restProps}>{children}</SubContainer>
}

Thanks.Img = function thanksImg({ ...restProps }) {
    return <Img {...restProps} />
}

Thanks.TextBig = function thanksTextBig({ children, ...restProps }) {
    return <TextBig {...restProps}>{children}</TextBig>
}

Thanks.TextSmall = function thanksTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>
}

Thanks.Link = function thanksLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}