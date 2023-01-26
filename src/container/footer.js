import React from 'react';
import Footer from '../components/footer';

// ROUTES
import * as ROUTES from '../constants/routes';

export default function FooterContainer({ children, ...restProps }) {
    return (
        <>
            <Footer>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Logo to="/" src="images/school-logos/logo-color-white.svg" />
                        <Footer.Div>
                            <Footer.Anchor href="https://www.google.com/maps/place/Patel+Higher+Secondary+School+Karera/@25.44892,78.1170141,16.99z/data=!4m5!3m4!1s0x397745f08ea40515:0xc1ff0cb845010b98!8m2!3d25.4489177!4d78.1192156">Mahuar Colony, Shivpuri Road, Karera, India</Footer.Anchor>
                            <Footer.Div>
                                <Footer.ImgIcon src="images/icons/phone-icon-black.svg" />
                                <Footer.Text to="#" mailto="tel:9425489825">+91 9425489825</Footer.Text>
                            </Footer.Div>
                            <Footer.Div>
                                <Footer.ImgIcon src="images/icons/email-icon-black.svg" />
                                <Footer.Text to="#"
                                    mailto="mailto:mukeshsharma@patelvidhyalaya.com">mukeshsharma@patelvidhyalaya.com</Footer.Text>
                            </Footer.Div>
                        </Footer.Div>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.PageLink to="#">Other Pages</Footer.PageLink>
                        <Footer.PageLink to="#">About Us</Footer.PageLink>
                        <Footer.PageLink to={ROUTES.CONTACT}>Contact Us</Footer.PageLink>
                        <Footer.PageLink to={ROUTES.REGISTRATION}>Registration</Footer.PageLink>
                        <Footer.PageLink to="#">Result</Footer.PageLink>
                        <Footer.PageLink to={ROUTES.COURSES}>Courses</Footer.PageLink>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.PageLink to="#">Privacy & Policy</Footer.PageLink>
                        <Footer.PageLink to="#">Security</Footer.PageLink>
                        <Footer.PageLink to="#">Retention of Data</Footer.PageLink>
                        <Footer.PageLink to="#">Sharing Information</Footer.PageLink>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.PageLink to="#">Follow Us</Footer.PageLink>
                        <Footer.Div>
                            <Footer.ImgSocialIcon to="#" src="images/icons/facebook-icon-blue.svg" />
                            <Footer.ImgSocialIcon to="#" src="images/icons/twitter-icon-orange.svg" />
                            <Footer.ImgSocialIcon to="#" src="images/icons/linkedin-icon-yellow.svg" />
                            <Footer.ImgSocialIcon to="#" src="images/icons/youtube-icon-green.svg" />
                        </Footer.Div>
                    </Footer.Column>
                </Footer.Row>
                <Footer.Text to="#" margintop="74">Copyright 2022 © Patel School. All rights reserved</Footer.Text>
            </Footer>
        </>
    )
}
