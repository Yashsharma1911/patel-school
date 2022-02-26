import React from 'react';
import HeaderContainer from '../container/header';
import CoursesContainer from '../container/courses';
import JumbotronContainer from '../container/jumbotron';
import JumboReverseContainer from '../container/jumboReverse';
import ApplyContainer from '../container/apply';
import PreparesContainer from '../container/prepares';
import { Feature } from '../components';
import * as ROUTES from '../constants/routes';

export default function Home() {
    return (
        <>
            <HeaderContainer>
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
            </HeaderContainer>
            <CoursesContainer />
            <JumbotronContainer />
            <ApplyContainer />
            <JumboReverseContainer />
            <PreparesContainer />
        </>
    );
}
