import React, { useState } from 'react'
import StudentLoginContainer from '../container/login/studentLogin'
import HeaderContainer from '../container/header';
import FooterContainer from '../container/footer';
import ResetPasswordContainer from '../container/login/resetPassword';

export default function StudentLogin() {
    const [reset, setReset] = useState(false);
    return (
        <>
            <HeaderContainer />
            {reset ?
                <ResetPasswordContainer />
                :
                <StudentLoginContainer setReset={setReset} />
            }
            <FooterContainer />
        </>
    )
}
