import React from 'react';
import { Container, Section, FormContainer, Div, SectionDetails, SectionUpload, Text, Label, Border, Button, Input, FormBase, InputWrap, Select, Option, LabelRequired } from './styles/admissionForm';

export default function AdmissionForm({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

AdmissionForm.Section = function AdmissionFormSection({ children, ...restProps }) {
    return <Section {...restProps}>{children}</Section>
}

AdmissionForm.FormContainer = function AdmissionFormContainer({ children, ...restProps }) {
    return <FormContainer {...restProps}>{children}</FormContainer>
}

AdmissionForm.Div = function AdmissionFormDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}

AdmissionForm.SectionDetails = function AdmissionFormSectionDetails({ children, ...restProps }) {
    return <SectionDetails {...restProps}>{children}</SectionDetails>
}

AdmissionForm.SectionUpload = function AdmissionFormSectionUpload({ children, ...restProps }) {
    return <SectionUpload {...restProps}>{children}</SectionUpload>
}

AdmissionForm.Text = function AdmissionFormMediumText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

AdmissionForm.Label = function AdmissionFormLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}

AdmissionForm.Border = function AdmissionFormBorder({ children, ...restProps }) {
    return <Border {...restProps}>{children}</Border>
}

AdmissionForm.Button = function AdmissionFormButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

AdmissionForm.Input = function AdmissionFormInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
}

AdmissionForm.FormBase = function AdmissionFormFormBase({ children, ...restProps }) {
    return <FormBase {...restProps}>{children}</FormBase>
}

AdmissionForm.InputWrap = function AdmissionFormInputWrap({ children, ...restProps }) {
    return <InputWrap {...restProps}>{children}</InputWrap>
}

AdmissionForm.Select = function AdmissionFormSelect({ children, ...restProps }) {
    return <Select {...restProps}>{children}</Select>
}

AdmissionForm.Option = function AdmissionFormOption({ children, ...restProps }) {
    return <Option {...restProps}>{children}</Option>
}

AdmissionForm.LabelRequired = function AdmissionFormLabelRequired({ children, ...restProps }) {
    return <LabelRequired {...restProps}>{children}</LabelRequired>
}
