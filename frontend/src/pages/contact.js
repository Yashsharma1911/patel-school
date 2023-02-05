import React, { useState } from 'react'
import ContactContainer from '../container/contact'
import HeaderContainer from '../container/header'
import FooterContainer from '../container/footer';

//component
import Thanks from '../components/thanks'

//----------------------------------------------------------------
import Fade from 'react-reveal/Fade';

export default function Contact() {
    const [isThanks, setIsThanks] = useState(false);
    return (
        <>
            <HeaderContainer />
            {isThanks ?
                <Thanks data-cy="thank-component">
                    <Thanks.SubContainer>
                        <Thanks.Img src="/images/thanks-thumb.svg" />
                        <Thanks.TextBig>
                            Hey, thanks for get in touch with us.
                        </Thanks.TextBig>
                        <Thanks.TextSmall>
                            Our team will reach out to you soon, for more info <Thanks.Link style={{ fontSize: "18px" }} to="/">click here.</Thanks.Link>
                        </Thanks.TextSmall>
                        <Thanks.Link to="/">
                            Return to website
                        </Thanks.Link>
                    </Thanks.SubContainer>
                </Thanks>
                :
                <>
                    <Fade bottom>
                        <ContactContainer setIsThanks={setIsThanks} />
                    </Fade>
                </>}

            <FooterContainer />
        </>
    )
}
