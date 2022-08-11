import React from 'react'
import { Container, SubContainer, Label, Input, Button, Error, ErrorText, Link, Headline, Div, Forget, Img } from './styles/studentLogin'

export default function Login({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Login.SubContainer = function LoginSubContainer({ children, ...restProps }) {
    return <SubContainer {...restProps}>{children}</SubContainer>
}

Login.Label = function LoginLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}

Login.Input = function LoginInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
}

Login.Button = function LoginButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

Login.Error = function LoginError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>
}

Login.ErrorText = function LoginErrorText({ children, ...restProps }) {
    return <ErrorText {...restProps}>{children}</ErrorText>
}

Login.Link = function LoginLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Login.Div = function LoginDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}

Login.Headline = function LoginHeadline({ children, ...restProps }) {
    return <Headline {...restProps}>{children}</Headline>
}

Login.Forget = function LoginForget({ children, ...restProps }) {
    return <Forget {...restProps}>{children}</Forget>
}

Login.Img = function LoginForget({ ...restProps }) {
    return <Img {...restProps} />
}