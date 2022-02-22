import React, { useState } from 'react';
import Header from '../components/header';
import logo from '../asests/images/icons/menu-icon.svg';
import CrossLogo from '../asests/images/icons/akar-icons_cross.svg';
import * as ROUTES from '../constants/routes';
import MenuBg from '../asests/images/menu-bg.svg'

export default function HeaderContainer({ children }) {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME}>Patel School</Header.Logo>
                <Header.Menu>
                    <Header.ButtonLink to={ROUTES.COURSES}>Courses</Header.ButtonLink>
                    <Header.ButtonLink to={ROUTES.STUDENT}>Students</Header.ButtonLink>
                    <Header.ButtonLink to={ROUTES.REGISTRATION}>Registration</Header.ButtonLink>
                    <Header.ButtonLink to={ROUTES.RESULT}>Result</Header.ButtonLink>
                </Header.Menu>

                <Header.Profile to={ROUTES.SIGN_IN}>
                    <Header.Text>Login</Header.Text>
                </Header.Profile>

                <Header.MenuLogo src={logo} onClick={() => setBurgerStatus(true)} alt="menu-logo" />
                <Header.BurgerMenu show={burgerStatus}>
                    <Header.Div>
                        <Header.CrossButton src={CrossLogo} onClick={() => setBurgerStatus(false)} />
                        <Header.MenuButtonLink to={ROUTES.COURSES} color="#DDE7F8">Courses</Header.MenuButtonLink>
                        <Header.MenuButtonLink to={ROUTES.STUDENT} color="#FDEED8">Students</Header.MenuButtonLink>
                        <Header.MenuButtonLink to={ROUTES.REGISTRATION} color="#FFF8D6">Registration</Header.MenuButtonLink>
                        <Header.MenuButtonLink to={ROUTES.RESULT} color="#F1F7DE">Result</Header.MenuButtonLink>
                        <Header.MenuButtonLink to={ROUTES.SIGN_IN} style={{ backgroundColor: '#000', color: '#fff' }} >Login</Header.MenuButtonLink>
                    </Header.Div>
                </Header.BurgerMenu>
                <Header.MenuBgImg src={MenuBg} />
            </Header.Frame>
            {children}
        </Header>
    );
}
