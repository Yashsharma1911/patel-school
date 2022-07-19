import React from 'react';
import Jumbotron from '../../components/jumbotron';

export default function JumbotronContainer({ children, ...restProps }) {
    return (
        <>
            <Jumbotron direction="row">
                <Jumbotron.Left>
                    <Jumbotron.ImageBackGround>
                        <Jumbotron.Img src="images/patel-school-image.jpg" />
                    </Jumbotron.ImageBackGround>
                </Jumbotron.Left>
                <Jumbotron.Right>
                    <Jumbotron.Div>
                        <Jumbotron.Heading>Descover Over School</Jumbotron.Heading>
                        <Jumbotron.Img src="images/icons/Star-pink.svg" />
                    </Jumbotron.Div>
                    <Jumbotron.Text>Patel Higher Secondary school established in Karera (M.P.) in 1993.
                        Affiliated to Madhya Pradesh Board of Secondary Education. It has been operating successfully for many years and has evolved from a primary to a full-fledged senior secondary school.
                        <br /><br />
                        The campus is well-equipped with modern amenities to support a child's whole development. It is a co-educational school with classes ranging from Nursery to XII that is located in a pleasant setting. "Sandeep Siksha Prasar Samiti" operates the school.</Jumbotron.Text>
                    <Jumbotron.Button to="/">Descover More</Jumbotron.Button>
                </Jumbotron.Right>
            </Jumbotron>
        </>
    )
}
