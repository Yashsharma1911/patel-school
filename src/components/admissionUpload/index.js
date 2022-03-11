import React from 'react';
import { Container, Section, SectionDetails, SectionUpload, Div, UploadContainer, Text, Border } from './styles/admissionUpload'

export default function AdmissionUpload({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

AdmissionUpload.Section = function AdmissionUploadSection({ children, ...restProps }) {
    return <Section {...restProps}>{children}</Section>
}

AdmissionUpload.SectionDetails = function AdmissionUploadSectionDetails({ children, ...restProps }) {
    return <SectionDetails {...restProps}>{children}</SectionDetails>
}

AdmissionUpload.SectionUpload = function AdmissionUploadSectionUpload({ children, ...restProps }) {
    return <SectionUpload {...restProps}>{children}</SectionUpload>
}

AdmissionUpload.Div = function AdmissionUploadDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}

AdmissionUpload.UploadContainer = function AdmissionUploadUploadContainer({ children, ...restProps }) {
    return <UploadContainer {...restProps}>{children}</UploadContainer>
}

AdmissionUpload.Text = function AdmissionUploadText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

AdmissionUpload.Border = function AdmissionuploadBorder({ children, ...restProps }) {
    return <Border {...restProps}>{children}</Border>
}