import React, { useEffect } from 'react';
import DocRequirement from '../../components/docRequirement';

const data = [
    {
        image: "images/icons/doc-icon-blue.svg",
        title: "Academic grade report of last year",
        color: "#DDE7F8",
        order: "2"
    },
    {
        image: "images/icons/doc-icon-orange.svg",
        title: "Transfer Certificate",
        color: "#FDEED8",
        order: "4"
    },
    {
        image: "images/icons/doc-icon-yellow.svg",
        title: "Bank Account",
        color: "#FFF8D6",
        order: "6"
    },
    {
        image: "images/icons/doc-icon-green.svg",
        title: "Adhar Card",
        color: "#F1F7DE",
        order: "8"
    },
    {
        image: "images/icons/doc-icon-blue.svg",
        title: "Student Photo",
        color: "#DDE7F8",
        order: "10"
    },
    {
        image: "images/icons/doc-icon-yellow.svg",
        title: "Income Certificate & Cast Certificate",
        color: "#FFF8D6",
        order: "12"
    },

]

export default function DocRequirementContainer() {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <DocRequirement>
            <DocRequirement.HeadLine>Apply Now In Two Steps</DocRequirement.HeadLine>
            <DocRequirement.Text>To be considered for acceptance please be prepared to supply the following documents to our admission department for review.</DocRequirement.Text>
            <DocRequirement.Div>
                {data.map((item, index) => {
                    return (
                        <DocRequirement.DocContainer color={item.color} order={item.order} key={index}>
                            <DocRequirement.Img src={item.image} />
                            <DocRequirement.Text>{item.title}</DocRequirement.Text>
                        </DocRequirement.DocContainer>
                    )
                }
                )}
                <DocRequirement.ButtonDiv>
                    <DocRequirement.BackButton to="/" data-cy="back-button"> <DocRequirement.Img src="images/icons/left-icon-black.svg" />Back</DocRequirement.BackButton>
                    <DocRequirement.ContinueButton to="/admissionform" data-cy="continue-button">Continue  <DocRequirement.Img src="images/icons/right-icon-white.svg" /></DocRequirement.ContinueButton>
                </DocRequirement.ButtonDiv>
            </DocRequirement.Div>
        </DocRequirement>
    )
}
