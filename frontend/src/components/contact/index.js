import React from 'react';
import { Container, Textarea, Form, Div, Left, Right, Text, Label, Button, Input, MapFrame, LabelRequired, HeadlineText } from './styles/contact';

export default function Contact({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Contact.Textarea = function ContactTextarea({ children, ...restProps }) {
    return <Textarea {...restProps}>{children}</Textarea>
}

Contact.Div = function ContactDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}

Contact.Left = function ContactLeft({ children, ...restProps }) {
    return <Left {...restProps}>{children}</Left>
}

Contact.Right = function ContactRight({ children, ...restProps }) {
    return <Right {...restProps}>{children}</Right>
}

Contact.Text = function ContactMediumText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Contact.Label = function ContactLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}

Contact.Button = function ContactButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

Contact.Input = function ContactInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
}

Contact.Form = function ContactForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>
}

Contact.MapFrame = function ContactMapFrame({ children, ...restProps }) {
    return <MapFrame {...restProps}>{children}</MapFrame>
}

Contact.HeadlineText = function ContactHeadlineText({ children, ...restProps }) {
    return <HeadlineText {...restProps}>{children}</HeadlineText>
}

// this component is not used now but it will be used in the future
Contact.LabelRequired = function ContactLabelRequired({ children, ...restProps }) {
    return <LabelRequired {...restProps}>{children}</LabelRequired>
}
