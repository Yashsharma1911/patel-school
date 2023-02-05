import React, {useState} from 'react'
import AdmissionContainer from '../../container/admission/admission'
import Thanks from '../../components/thanks'
// import user custom hook
// import UseFirestoreData from '../../hooks/use-user-listener';
import { FirebaseUserContext } from "../../context/firebase";

import LoaderContainer from '../../container/loader'
import * as ROUTES from '../../constants/routes';

export default function AdmissionDashboard() {
    const [isThanks, setIsThanks] = useState(false);
    const { data, showLoader  } = React.useContext(FirebaseUserContext);
    // const { data, showLoader } = UseFirestoreData("students");

    if(showLoader){ 
        return <LoaderContainer />
    }
    else if (!data || (data && !data.isDataSubmitted)) {
        return <AdmissionContainer setIsThanks={setIsThanks} />;
    }
    else if (isThanks || (data && data.isDataSubmitted)) {
        return (
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
        );
    }
}