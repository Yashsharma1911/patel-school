import React, {useState} from 'react'
import AdmissionContainer from '../../container/admission/admission'
import Thanks from '../../components/thanks'
// import user custom hook
import UseFirestoreData from '../../hooks/use-user-listener';

import LoaderContainer from '../../container/loader'
import * as ROUTES from '../../constants/routes';

export default function AdmissionDashboard() {
    const [isThanks, setIsThanks] = useState(false);
    const { data } = UseFirestoreData("students");
    console.log(data);
    
  return (
    <>  { data ? 
            ((data && data.isDataSubmitted === true) || isThanks === true?
                <Thanks data-cy="thank-component">
                    <Thanks.SubContainer>
                        <Thanks.Img src="/images/thanks-thumb.svg" />
                        <Thanks.TextBig>
                            Hey, Thanks for Registration to our school
                        </Thanks.TextBig>
                        <Thanks.TextSmall>
                            You already submitted your form, we will contact you soon
                        </Thanks.TextSmall>
                        <Thanks.Link to={ROUTES.DASHBOARD}>
                            Return to dashboard
                        </Thanks.Link>
                    </Thanks.SubContainer>
                </Thanks>
                :
                <AdmissionContainer setIsThanks={setIsThanks} />)
            : <LoaderContainer />
        }
    </>
  )
}
