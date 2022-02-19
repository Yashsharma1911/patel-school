import React from 'react';
import Header from '../components/header';

export default function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo>Patel School</Header.Logo>
                <Header.Menu>
                    <Header.Text>Courses</Header.Text>
                    <Header.Text>Students</Header.Text>
                    <Header.Text>Registration</Header.Text>
                    <Header.Text>Result</Header.Text>
                </Header.Menu>
                <Header.Profile>
                    <Header.Text>Login</Header.Text>
                </Header.Profile>
            </Header.Frame>
            {children}
        </Header>
    );
}
