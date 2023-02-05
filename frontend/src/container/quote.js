import React from 'react'
import Quote from '../components/quote'

export default function QuoteContainer({ children, ...restProps }) {
    return (
        <>
            <Quote>
                <Quote.Div>
                    <Quote.Img src="images/icons/quote-icon.svg" />
                    <Quote.Text>“In a global economy where the most valuable skill you can sell is your knowledge, a good education is no longer just a pathway to opportunity – it is a prerequisite”</Quote.Text>
                    <Quote.TagText>Mr. Mukesh Sharma ( Principle )</Quote.TagText>
                </Quote.Div>
            </Quote>
        </>
    )
}
