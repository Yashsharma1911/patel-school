import React from 'react';
import { Container, Text, Div } from './styles/admissionHeading'

export default function AdmissionHeading({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

AdmissionHeading.Text = function AdmissionHeadingText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

AdmissionHeading.Div = function AdmissionHeadingDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}