import React from 'react'
import Apply from '../components/apply'
import Fade from 'react-reveal/Fade';

export default function ApplyContainer({ children, ...restProps }) {
    return (
        <>
            <Apply>
                <Apply.SubContainer>
                    <Apply.HeadingDiv>
                        <Apply.Div>
                            <Apply.Heading>How do I get applied?</Apply.Heading>
                            <Apply.HeadingStyleDiv />
                        </Apply.Div>
                    </Apply.HeadingDiv>
                    <Apply.WrapCardsDiv>
                        <Fade bottom delay={200}>
                            <Apply.Div>
                                <Apply.Card color="#DDE7F8">
                                    <Apply.ImgBg color="#9DB9EC">
                                        <Apply.Img src="images/icons/user-icon.svg" />
                                    </Apply.ImgBg>
                                    <Apply.CardHeading>Go To Registration</Apply.CardHeading>
                                    <Apply.CardText>Click on Registration above you will see some required documents prepare them first and then click on continue to fill admission form.</Apply.CardText>
                                </Apply.Card>
                                <Apply.Img src="images/icons/star-blue.svg" />
                            </Apply.Div>
                        </Fade>
                        <Fade bottom delay={400}>
                            <Apply.Div>
                                <Apply.Card color="#FDEED8">
                                    <Apply.ImgBg color="#F8CE90">
                                        <Apply.Img src="images/icons/form-icon.svg" />
                                    </Apply.ImgBg>
                                    <Apply.CardHeading>Fill Form</Apply.CardHeading>
                                    <Apply.CardText>Go to apply for admission and fill form details and attach recomended documents make sure documents should be correct or clearly visible.</Apply.CardText>
                                </Apply.Card>
                                <Apply.Img src="images/icons/star-orange.svg" />
                            </Apply.Div>
                        </Fade>
                        <Fade bottom delay={600}>
                            <Apply.Div>
                                <Apply.Card color="#FFF8D6">
                                    <Apply.ImgBg color="#FFEB8A">
                                        <Apply.Img src="images/icons/wait-form-icon.svg" />
                                    </Apply.ImgBg>
                                    <Apply.CardHeading>Wait for Result</Apply.CardHeading>
                                    <Apply.CardText>Now you need to wait for your admisson later also we will contact you to confirm some datails and after that you can go to next step</Apply.CardText>
                                </Apply.Card>
                                <Apply.Img src="images/icons/star-yellow.svg" />
                            </Apply.Div>
                        </Fade>
                        <Fade bottom delay={800}>
                            <Apply.Div>
                                <Apply.Card color="#F1F7DE">
                                    <Apply.ImgBg color="#D5E7A2">
                                        <Apply.Img src="images/icons/money-icon.svg" />
                                    </Apply.ImgBg>
                                    <Apply.CardHeading>Make Payment</Apply.CardHeading>
                                    <Apply.CardText>Now you need to pay admisson fee and form fee and futher money can pay in three installments. Hurrey! you are now a student of Patel school </Apply.CardText>
                                </Apply.Card>
                                <Apply.Img src="images/icons/star-green.svg" />
                            </Apply.Div>
                        </Fade>
                    </Apply.WrapCardsDiv>
                </Apply.SubContainer>
            </Apply>
        </>
    )
}
