import React from 'react';
import { Container, Section, SectionDetails, SectionUpload, Div, UploadContainer, Text, Border, LabelContainer, FileInput, Button, FileText, FileIcon, SubContainer, Form } from './styles/admissionUpload'

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

AdmissionUpload.Border = function AdmissionUploadBorder({ children, ...restProps }) {
    return <Border {...restProps}>{children}</Border>
}

AdmissionUpload.LabelContainer = function AdmissionUploadLabelContainer({ children, ...restProps }) {
    return <LabelContainer {...restProps}>{children}</LabelContainer>
}

AdmissionUpload.FileInput = function AdmissionUploadFileInput({ children, ...restProps }) {
    return <FileInput {...restProps}>{children}</FileInput>
}

AdmissionUpload.Button = function AdmissionUploadButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

AdmissionUpload.FileText = function AdmissionUploadFileText({ ...restProps }) {
    return <FileText {...restProps} />
}

AdmissionUpload.FileIcon = function AdmissionUploadFileIcon({ ...restProps }) {
    return <FileIcon {...restProps} />
}

AdmissionUpload.SubContainer = function AdmissionUploadSubContainer({ children, ...restProps }) {
    return <SubContainer {...restProps}>{children}</SubContainer>
}

AdmissionUpload.Form = function AdmissionUploadForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>
}