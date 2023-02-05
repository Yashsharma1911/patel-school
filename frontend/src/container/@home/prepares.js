import React from 'react'
import Prepares from '../../components/prepares'

const data = [
    {
        src: "images/icons/leader-icon-blue.svg",
        title: "Tomorrow's Leader",
    },
    {
        src: "images/icons/earth-icon-orange.svg",
        title: "Making Difference",
    },
    {
        src: "images/icons/love-hand-icon-yellow.svg",
        title: "Strong Bonds that Last",
    },
    {
        src: "images/icons/rank-icon-green.svg",
        title: "State Ranked",
    }
]

export default function PreparesContainer({ children, ...restProps }) {

    return (
        <>
            <Prepares>
                <Prepares.HeadingDiv>
                    <Prepares.Div>
                        <Prepares.Heading>School Prepares</Prepares.Heading>
                        <Prepares.Img src="images/icons/thunder-icon.svg" />
                    </Prepares.Div>
                    <Prepares.Text>How are we preparing our student for college and life?</Prepares.Text>
                </Prepares.HeadingDiv>
                <Prepares.IconsDiv>
                    {data && data.map((item, index) => {
                        return (
                            <Prepares.Div key={index}>
                                <Prepares.Img src={item.src} />
                                <Prepares.Text>{item.title}</Prepares.Text>
                            </Prepares.Div>
                        )
                    })}
                </Prepares.IconsDiv>
            </Prepares>
        </>
    )
}
