import React from 'react'
import Prepares from '../components/prepares'

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
                    <Prepares.Div>
                        <Prepares.Img src="images/icons/leader-icon-blue.svg" />
                        <Prepares.Text>tomorrow's Leader</Prepares.Text>
                    </Prepares.Div>
                    <Prepares.Div>
                        <Prepares.Img src="images/icons/earth-icon-orange.svg" />
                        <Prepares.Text>Making Difference</Prepares.Text>
                    </Prepares.Div>
                    <Prepares.Div>
                        <Prepares.Img src="images/icons/love-hand-icon-yellow.svg" />
                        <Prepares.Text>Strong Bonds that Last</Prepares.Text>
                    </Prepares.Div>
                    <Prepares.Div>
                        <Prepares.Img src="images/icons/rank-icon-green.svg" />
                        <Prepares.Text>State Ranked</Prepares.Text>
                    </Prepares.Div>
                </Prepares.IconsDiv>
            </Prepares>
        </>
    )
}
