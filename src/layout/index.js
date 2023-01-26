import React from 'react';
import DashboardSidebar from './dashboardSidebar';
import DashboardNavbar from './dashboardNavbar';
import styled from 'styled-components';

// React Router
import { Outlet } from 'react-router-dom';


const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
});

const MainStyle = styled('div')({
    width: "100%",
});

export default function DashboardLayout() {
    return (
        <>
            <DashboardNavbar />
            <RootStyle>
                {/* <DashboardSidebar /> */}
                <MainStyle>
                    <Outlet />
                </MainStyle>
            </RootStyle>
        </>
    )
}
