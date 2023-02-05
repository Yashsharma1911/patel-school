import React from 'react'
import LoginAs from '../../components/login/loginAs'
import * as ROUTES from '../../constants/routes'

export default function LoginAsContainer() {
    return (
        <LoginAs>
            <LoginAs.SubContainer>
                <LoginAs.Text>
                    Login As
                </LoginAs.Text>
                <LoginAs.ImgContainer>
                    <LoginAs.LinkTo to={ROUTES.STUDENT_LOGIN} order="2">
                        <LoginAs.Img src="images/login-student.svg" />
                    </LoginAs.LinkTo>
                    <LoginAs.Link href="https://dashboard.patelvidhyalaya.com/login" target="_blank" order="4" >
                        <LoginAs.Img src="images/login-teacher.svg" />
                    </LoginAs.Link>
                    <LoginAs.Link href="http://simptionschoolsoftware.com/patelschoolkarera/" target="_blank" order="6">
                        <LoginAs.Img src="images/login-school.svg" />
                    </LoginAs.Link>
                </LoginAs.ImgContainer>
            </LoginAs.SubContainer>
        </LoginAs>
    )
}
