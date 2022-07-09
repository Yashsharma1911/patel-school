import React from 'react';
import DocRequirement from '../../components/docRequirement';

export default function DocRequirementContainer({ children }) {
    return (
        <DocRequirement>
            <DocRequirement.HeadLine>Apply Now In Two Steps</DocRequirement.HeadLine>
            <DocRequirement.Text>To be considered for acceptance please be prepared to supply the following documents to our admission department for review.</DocRequirement.Text>
            <DocRequirement.Div>
                <DocRequirement.DocContainer color="#DDE7F8" order="2">
                    <DocRequirement.Img src="images/icons/doc-icon-blue.svg" />
                    <DocRequirement.Text>Academic grade report of last year</DocRequirement.Text>
                </DocRequirement.DocContainer>

                <DocRequirement.DocContainer color="#FDEED8" order="4">
                    <DocRequirement.Img src="images/icons/doc-icon-orange.svg" />
                    <DocRequirement.Text>Transfer Certificate</DocRequirement.Text>
                </DocRequirement.DocContainer>

                <DocRequirement.DocContainer color="#FFF8D6" order="6">
                    <DocRequirement.Img src="images/icons/doc-icon-yellow.svg" />
                    <DocRequirement.Text>Bank Account</DocRequirement.Text>
                </DocRequirement.DocContainer>

                <DocRequirement.DocContainer color="#F1F7DE" order="8">
                    <DocRequirement.Img src="images/icons/doc-icon-green.svg" />
                    <DocRequirement.Text>Adhar Card</DocRequirement.Text>
                </DocRequirement.DocContainer>

                <DocRequirement.DocContainer color="#DDE7F8" order="10">
                    <DocRequirement.Img src="images/icons/doc-icon-blue.svg" />
                    <DocRequirement.Text>Samagra ID </DocRequirement.Text>
                </DocRequirement.DocContainer>

                <DocRequirement.DocContainer color="#FFF8D6" order="12">
                    <DocRequirement.Img src="images/icons/doc-icon-yellow.svg" />
                    <DocRequirement.Text>Income Certificate & Cast Certificate</DocRequirement.Text>
                </DocRequirement.DocContainer>

                <DocRequirement.ButtonDiv>
                    <DocRequirement.BackButton to="/"> <DocRequirement.Img src="images/icons/left-icon-black.svg" />Back</DocRequirement.BackButton>

                    <DocRequirement.ContinueButton to="/admissionform">Continue  <DocRequirement.Img src="images/icons/right-icon-white.svg" /></DocRequirement.ContinueButton>
                </DocRequirement.ButtonDiv>
            </DocRequirement.Div>
        </DocRequirement>
    )
}
