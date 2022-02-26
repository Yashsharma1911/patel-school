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
                                <Jumbotron.SmallText>On visiting the school, one is stuck by the lush green campus, the architectural beauty and soothing ambience. Far from the hustle and bustle of towns and cities</Jumbotron.SmallText>
                            </Jumbotron.TextWrap>
                        </Jumbotron.FeatureDiv>

                        <Jumbotron.FeatureDiv>
                            <Jumbotron.IconImg src="images/icons/right-tick-green.svg" />
                            <Jumbotron.TextWrap>
                                <Jumbotron.Text>Practicle based Learnings</Jumbotron.Text>
                                <Jumbotron.SmallText>On visiting the school, one is stuck by the lush green campus, the architectural beauty and soothing ambience. Far from the hustle and bustle of towns and cities</Jumbotron.SmallText>
                            </Jumbotron.TextWrap>
                        </Jumbotron.FeatureDiv>
                    </Jumbotron.Div>
                    <Jumbotron.Button to="/">Descover More</Jumbotron.Button>
                </Jumbotron.Right>
            </Jumbotron>
        </>
    )
}
