import React from 'react';
import HeaderContainer from '../container/header';
import CoursesContainer from '../container/@home/courses';
import JumbotronContainer from '../container/@home/jumbotron';
import JumboReverseContainer from '../container/@home/jumboReverse';
import ApplyContainer from '../container/apply';
import PreparesContainer from '../container/@home/prepares';
import QuoteContainer from '../container/quote';
import FooterContainer from '../container/footer';
import { Feature, AttentionLine } from '../components';
import * as ROUTES from '../constants/routes';
import Fade from 'react-reveal/Fade';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Fade bottom duration={1700}>
                    <Feature>
                        <Feature.Left>
                            <Feature.Div>
                                <Feature.HeadLine>School Might be Closed, Not Your Curiosity</Feature.HeadLine>
                                <Feature.Img src="images/icons/Star-pink.svg" />
                            </Feature.Div>
                            <Feature.SubHeadLine>The mission of Patel School for children is empower our children to achieve their greatest potential.</Feature.SubHeadLine>
                            <Feature.Button to={ROUTES.REGISTRATION}>Apply Now</Feature.Button>
                        </Feature.Left>
                        <Feature.Right>
                            <Feature.Img src="images/header-photo.svg" />
                        </Feature.Right>
                    </Feature>
                </Fade>
            </HeaderContainer>
            <Fade bottom duration={1200}>
                <CoursesContainer />
            </Fade>
            <Fade bottom>
                <JumbotronContainer />
            </Fade>
            <Fade bottom>
                <ApplyContainer />
            </Fade>
            <Fade bottom>
                <JumboReverseContainer />
            </Fade>
            <Fade bottom>
                <PreparesContainer />
            </Fade>
            <Fade bottom>
                <QuoteContainer />
            </Fade>
            <Fade bottom>
                <AttentionLine>
                    <AttentionLine.Text>Go Apply. </AttentionLine.Text><AttentionLine.SpanText>It's Free. </AttentionLine.SpanText><AttentionLine.Text>Start Learning</AttentionLine.Text>
                </AttentionLine>
            </Fade>
            <Fade bottom>
                <FooterContainer />
            </Fade>
        </>
    );
}
