import React from 'react'
import StudentLoginContainer from '../container/login/studentLogin'
import HeaderContainer from '../container/header';
import FooterContainer from '../container/footer';

export default function StudentLogin() {
    return (
        <>
            <HeaderContainer />
            <StudentLoginContainer />
            <FooterContainer />
        </>
    )
}
