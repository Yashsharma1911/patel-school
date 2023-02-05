import React from 'react';
import { Container, Heading, Cards, Circle, CardHeadLine, CardText, CardButtonLink, Div, Img } from './styles/courses'

export default function Courses({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Courses.Heading = function CoursesHeading({ children, ...restProps }) {
    return <Heading {...restProps}>{children}</Heading>
}

Courses.Div = function CoursesDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}

Courses.Cards = function CoursesCards({ children, ...restProps }) {
    return <Cards {...restProps}>{children}</Cards>
}

Courses.Circle = function CoursesCircle({ children, ...restProps }) {
    return <Circle {...restProps}>{children}</Circle>
}

Courses.CardHeadLine = function CoursesCardHeadLine({ children, ...restProps }) {
    return <CardHeadLine {...restProps}>{children}</CardHeadLine>
}

Courses.CardText = function CoursesCardText({ children, ...restProps }) {
    return <CardText {...restProps}>{children}</CardText>
}

Courses.CardButtonLink = function CoursesCardButtonLink({ children, ...restProps }) {
    return <CardButtonLink {...restProps}>{children}</CardButtonLink>
}

Courses.CardImg = function CoursesCardImg({ children, ...restProps }) {
    return <Img {...restProps}>{children}</Img>
}