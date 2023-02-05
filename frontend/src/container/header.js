import React, { useState } from 'react';
import Header from '../components/header';
import * as ROUTES from '../constants/routes';


export default function HeaderContainer({ children }) {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME}>Patel School</Header.Logo>
                <Header.Menu>
                    <Header.ButtonLink to={ROUTES.COURSES}>Courses</Header.ButtonLink>
                    <Header.ButtonLink to={ROUTES.GALLERY}>Gallery</Header.ButtonLink>
                    <Header.ButtonLink to={ROUTES.REGISTRATION}>Registration</Header.ButtonLink>
                    <Header.ButtonLink to={ROUTES.CONTACT}>Contact</Header.ButtonLink>
                </Header.Menu>

                <Header.Profile to={ROUTES.SIGN_IN}>
                    <Header.Text>Login</Header.Text>
                </Header.Profile>

                <Header.MenuLogo src="images/icons/menu-icon.svg" onClick={() => setBurgerStatus(true)} alt="menu-logo" />
                <Header.BurgerMenu show={burgerStatus}>
                    <Header.Div>
                        <Header.CrossButton src="images/icons/akar-icons_cross.svg" onClick={() => setBurgerStatus(false)} />
                        <Header.MenuButtonLink to={ROUTES.COURSES} color="#DDE7F8">Courses</Header.MenuButtonLink>
                        <Header.MenuButtonLink to={ROUTES.GALLERY} color="#FDEED8">Gallery</Header.MenuButtonLink>
                        <Header.MenuButtonLink to={ROUTES.REGISTRATION} color="#FFF8D6">Registration</Header.MenuButtonLink>
                        <Header.MenuButtonLink to={ROUTES.CONTACT} color="#F1F7DE">Contact</Header.MenuButtonLink>
                        <Header.MenuButtonLink to={ROUTES.SIGN_IN} style={{ backgroundColor: '#000', color: '#fff' }} >Login</Header.MenuButtonLink>
                    </Header.Div>
                </Header.BurgerMenu>
                <Header.MenuBgImg src="images/menu-bg.svg" />
            </Header.Frame>
            {children}
        </Header>
    );
}
