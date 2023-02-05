import React from 'react';
import { Container, Text, Row, Column, PageLink, ImgSocialIcon, ImgIcon, Logo, Div, Anchor } from './styles/footer';
import { Link } from 'react-router-dom';

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Text = function FooterText({ mailto, children, ...restProps }) {
    return <Text {...restProps} onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
    }}>{children}</Text>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>
}

Footer.PageLink = function FooterPageLink({ children, ...restProps }) {
    return <PageLink {...restProps}>{children}</PageLink>
}

Footer.Anchor = function FooterAnchor({ children, ...restProps }) {
    return <Anchor {...restProps}>{children}</Anchor>
}

Footer.ImgSocialIcon = function FooterImgSocialIcon({ to, ...restProps }) {
    return (
        <Link to={to}>
            <ImgSocialIcon {...restProps} />
        </Link>
    )
}

Footer.ImgIcon = function FooterImgIcon({ ...restProps }) {
    return <ImgIcon {...restProps} />
}

Footer.Logo = function FooterLogo({ to, ...restProps }) {
    return (
        <Link to={to}>
            <Logo {...restProps} />
        </Link>
    )
}

Footer.Div = function FooterDiv({ children, ...restProps }) {
    return <Div {...restProps}>{children}</Div>
}