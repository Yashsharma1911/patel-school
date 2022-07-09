import React from 'react'
import { Container, SubContainer, Img, TextBig, TextSmall, Link } from "./styles/maintenance"

export default function Maintenance({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Maintenance.SubContainer = function maintenanceSubContainer({ children, ...restProps }) {
    return <SubContainer {...restProps}>{children}</SubContainer>
}

Maintenance.Img = function maintenanceImg({ ...restProps }) {
    return <Img {...restProps} />
}

Maintenance.TextBig = function maintenanceTextBig({ children, ...restProps }) {
    return <TextBig {...restProps}>{children}</TextBig>
}

Maintenance.TextSmall = function maintenanceTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>
}

Maintenance.Link = function maintenanceLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}