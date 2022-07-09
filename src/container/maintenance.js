import React from 'react'
import Maintenance from '../components/maintenance'
import * as ROUTES from '../constants/routes';

export default function MaintenanceContainer() {
    return (
        <>
            <Maintenance>
                <Maintenance.SubContainer>
                    <Maintenance.Img src="/images/gif/maintenance.gif" />
                    <Maintenance.TextBig>
                        Hey, Thanks for Comming Here
                    </Maintenance.TextBig>
                    <Maintenance.TextSmall>
                        We are working on this page subscribe our newsletter to get updates.
                    </Maintenance.TextSmall>
                    <Maintenance.Link to={ROUTES.HOME}>
                        Return to website
                    </Maintenance.Link>
                </Maintenance.SubContainer>
            </Maintenance>
        </>
    )
}
