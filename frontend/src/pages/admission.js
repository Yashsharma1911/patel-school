import React, { useState } from 'react';
import HeaderContainer from '../container/header'
import AdmissionContainer from '../container/admission/admission'
import Thanks from '../components/thanks'

export default function Admission() {
    const [isThanks, setIsThanks] = useState(false);

    return (
        <>
            <HeaderContainer />
            {isThanks ?
                <Thanks data-cy="thank-component">
                    <Thanks.SubContainer>
                        <Thanks.Img src="/images/thanks-thumb.svg" />
                        <Thanks.TextBig>
                            Hey, Thanks for Registration to our school
                        </Thanks.TextBig>
                        <Thanks.TextSmall>
                            Our admission department will reach out to you soon to take you further ahead.
                        </Thanks.TextSmall>
                        <Thanks.Link to="/">
                            Return to website
                        </Thanks.Link>
                    </Thanks.SubContainer>
                </Thanks>
                :
                <AdmissionContainer setIsThanks={setIsThanks} />}
        </>
    )
}
