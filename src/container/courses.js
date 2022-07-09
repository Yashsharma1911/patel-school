import React from 'react';
import Courses from '../components/courses';

export default function CoursesContainer() {
    return (
        <>
            <Courses>
                <Courses.Heading>Popular Courses</Courses.Heading>

                <Courses.Div>
                    <Courses.Cards bg="#DDE7F8">
                        <Courses.Circle bg="#9DB9EC">
                            <Courses.CardImg src="images/icons/math-course.svg" />
                        </Courses.Circle>
                        <Courses.CardHeadLine>Math</Courses.CardHeadLine>
                        <Courses.CardText>Mathematics is the science and study of quality, structure, space, and change. Mathematicians seek out patterns, formulate new ...</Courses.CardText>
                        <Courses.CardButtonLink to='#'>Learn More</Courses.CardButtonLink>
                    </Courses.Cards>

                    <Courses.Cards bg="#FDEED8">
                        <Courses.Circle bg="#F8CE90">
                            <Courses.CardImg src="images/icons/agriculture-course.svg" />
                        </Courses.Circle>
                        <Courses.CardHeadLine>Agriculture</Courses.CardHeadLine>
                        <Courses.CardText>Agriculture is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of ...</Courses.CardText>
                        <Courses.CardButtonLink to='#'>Learn More</Courses.CardButtonLink>
                    </Courses.Cards>

                    <Courses.Cards bg="#FFF8D6">
                        <Courses.Circle bg="#FFEB8A">
                            <Courses.CardImg src="images/icons/biology-course.svg" />
                        </Courses.Circle>
                        <Courses.CardHeadLine>Biology</Courses.CardHeadLine>
                        <Courses.CardText>Biology is the scientific study of life. It is a natural science with a broad scope but has several unifying themes that tie it ...</Courses.CardText>
                        <Courses.CardButtonLink to='#'>Learn More</Courses.CardButtonLink>
                    </Courses.Cards>
                </Courses.Div>
            </Courses>
        </>
    )
}
