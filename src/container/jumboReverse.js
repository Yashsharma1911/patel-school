import React from 'react';
import Jumbotron from '../components/jumbotron';

export default function JumboReverseContainer({ children, ...restProps }) {
    return (
        <>
            <Jumbotron direction="row-reverse">
                <Jumbotron.Left style={{ marginRight: '0' }}>
                    <Jumbotron.ImageBackGround>
                        <Jumbotron.Img src="images/patel-school-image.jpg" />
                    </Jumbotron.ImageBackGround>
                </Jumbotron.Left>
                <Jumbotron.Right style={{ marginRight: '73px' }}>
                    <Jumbotron.Div>
                        <Jumbotron.Heading>Why we?</Jumbotron.Heading>
                    </Jumbotron.Div>
                    <Jumbotron.Div>
                        <Jumbotron.FeatureDiv>
                            <Jumbotron.IconImg src="images/icons/right-tick-blue.svg" />
                            <Jumbotron.TextWrap>
                                <Jumbotron.Text>Green Environment</Jumbotron.Text>
                                <Jumbotron.SmallText>On visiting the school, one is stuck by the lush green campus, the architectural beauty and soothing ambience. Far from the hustle and bustle of towns and cities</Jumbotron.SmallText>
                            </Jumbotron.TextWrap>
                        </Jumbotron.FeatureDiv>

                        <Jumbotron.FeatureDiv>
                            <Jumbotron.IconImg src="images/icons/right-tick-orange.svg" />
                            <Jumbotron.TextWrap>
                                <Jumbotron.Text>Better Education</Jumbotron.Text>
                                <Jumbotron.SmallText>We provide better education. It helps a students to take a better and informed decision with the use of their knowledge. This increases the success rate of a person in life. Subsequently, education is also responsible for providing with an enhanced lifestyle. It gives students career opportunities that can increase students quality of life.</Jumbotron.SmallText>
                            </Jumbotron.TextWrap>
                        </Jumbotron.FeatureDiv>

                        <Jumbotron.FeatureDiv>
                            <Jumbotron.IconImg src="images/icons/right-tick-green.svg" />
                            <Jumbotron.TextWrap>
                                <Jumbotron.Text>Hostel Facility</Jumbotron.Text>
                                <Jumbotron.SmallText>We also provide hostel facilities for those students who came far from their homes to get a better education and to increase their personality. For more details about the hostel please contact us.</Jumbotron.SmallText>
                            </Jumbotron.TextWrap>
                        </Jumbotron.FeatureDiv>
                    </Jumbotron.Div>
                    <Jumbotron.Button to="/">Descover More</Jumbotron.Button>
                </Jumbotron.Right>
            </Jumbotron>
        </>
    )
}
