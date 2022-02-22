import React from 'react';
import HeaderContainer from '../container/header';
import CoursesContainer from '../container/courses';
import { Feature } from '../components';
import HeaderImage from '../asests/images/header-photo.svg';
import Star from '../asests/images/icons/Star-pink.svg'
import * as ROUTES from '../constants/routes'
export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Left>
                        <Feature.Div>
                            <Feature.HeadLine>School Might be Closed, Not Your Curiosity</Feature.HeadLine>
                            <Feature.Img src={Star} />
                        </Feature.Div>
                        <Feature.SubHeadLine>The mission of Patel School for children is empower our children to achieve their greatest potential.</Feature.SubHeadLine>
                        <Feature.Button to={ROUTES.REGISTRATION}>Apply Now</Feature.Button>
                    </Feature.Left>
                    <Feature.Right>
                        <Feature.Img src={HeaderImage} />
                    </Feature.Right>
                </Feature>
            </HeaderContainer>
            <CoursesContainer />
        </>
    );
}
