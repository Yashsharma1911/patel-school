import React from 'react'
import { Container, SubContainer, Label, Input, Button, Error, ErrorText, Link } from './styles/studentLogin'

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