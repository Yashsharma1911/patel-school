import React from 'react';
import { Container, Text, SpanText } from './styles/attention';

export default function AttentionLine({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

AttentionLine.Text = function AttentionLineText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

AttentionLine.SpanText = function AttentionLineSpanText({ children, ...restProps }) {
    return <SpanText {...restProps}>{children}</SpanText>
}
