import React from 'react';
import {
    Container, Logo, Frame, Menu, Text, Profile,
} from './styles/header';

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
    return <Logo {...restProps}>{children}</Logo>;
};

Header.Menu = function HeaderMenu({ children, ...restProps }) {
    return <Menu {...restProps}>{children}</Menu>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
