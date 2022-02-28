import React from 'react';
import Footer from '../components/footer';

export default function FooterContainer({ children, ...restProps }) {
    return (
        <>
            <Footer>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Logo to="/" src="images/icons/school-logo.svg" />
                        <Footer.Div>
                            <Footer.PageLink to="#">Mahuar Colony, Shivpuri Road, Karera, India</Footer.PageLink>
                            <Footer.Div>
                                <Footer.ImgIcon src="images/icons/phone-icon-black.svg" />
                                <Footer.Text>(+91)9425489825</Footer.Text>
                            </Footer.Div>
                            <Footer.Div>
                                <Footer.ImgIcon src="images/icons/email-icon-black.svg" />
                                <Footer.Text>patelschool@gmail.com</Footer.Text>
                            </Footer.Div>
                        </Footer.Div>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.PageLink to="#">Other Pages</Footer.PageLink>
                        <Footer.PageLink to="#">About Us</Footer.PageLink>
                        <Footer.PageLink to="#">Contact Us</Footer.PageLink>
                        <Footer.PageLink to="#">Registration</Footer.PageLink>
                        <Footer.PageLink to="#">Result</Footer.PageLink>
                        <Footer.PageLink to="#">Courses</Footer.PageLink>
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
                <Footer.Text>Copyright 2022 © Patel School. All rights reserved</Footer.Text>
            </Footer>
        </>
    )
}
