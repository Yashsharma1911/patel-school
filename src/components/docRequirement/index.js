import React from 'react';
import { Container, Text, HeadLine, Img, Div, DocContainer, ButtonDiv, BackButton, ContinueButton } from './styles/docRequirement';

export default function DocRequirement({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

DocRequirement.HeadLine = function DocRequirementHeadLine({ children, ...restProps }) {
    return <HeadLine {...restProps}>{children}</HeadLine>
}

DocRequirement.Text = function DocRequirementText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

DocRequirement.Div = function DocRequirementDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}

DocRequirement.Img = function DocRequirementImg({ ...restProps }) {
    return <Img {...restProps} />
}

DocRequirement.DocContainer = function DocRequirementDocContainer({ children, ...restProps }) {
    return <DocContainer {...restProps}>{children}</DocContainer>
}

DocRequirement.ButtonDiv = function DocRequirementButtonDiv({ children, ...restProps }) {
    return <ButtonDiv {...restProps}>{children}</ButtonDiv>
}

DocRequirement.BackButton = function DocRequirementBackButton({ children, ...restProps }) {
    return <BackButton {...restProps}>{children}</BackButton>
}

DocRequirement.ContinueButton = function DocRequirementContinueButton({ children, ...restProps }) {
    return <ContinueButton {...restProps}>{children}</ContinueButton>
}