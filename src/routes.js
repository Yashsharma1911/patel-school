import { useRoutes } from 'react-router-dom';
// pages
import { Home, Signup, Signin, GalleryImage, Courses, Result, Registration, Admission, StudentLogin, Contact } from './pages';
import AdmissionDashboard from './sections/dashborad/admissionDashboard';
import DashboardLayout from './layout/index';

// ----------------------------------------------------------------------
import * as ROUTES from './constants/routes';
import UseAuthListener from './hooks/use-auth-listener';

//helpers
import { ProtectRoute } from './helpers/routeChecker';

export default function Router() {
    const { user } = UseAuthListener();
    return useRoutes([
        { path: ROUTES.HOME, element: <Home /> },
        { path: ROUTES.SIGN_UP, element: <Signup /> },
        { path: ROUTES.SIGN_IN, element: <Signin /> },
        { path: ROUTES.GALLERY, element: <GalleryImage /> },
        { path: ROUTES.COURSES, element: <Courses /> },
        { path: ROUTES.RESULT, element: <Result /> },
        { path: ROUTES.REGISTRATION, element: <Registration /> },
        {
            path: ROUTES.DASHBOARD,
            element: <>
                <ProtectRoute user={user}>
                    <DashboardLayout />
                </ProtectRoute>
            </>,
            children: [
                { path: ROUTES.DASBOARD_ADMISSION, element: <AdmissionDashboard/> },
            ]
        },
        { path: ROUTES.ADMISSION, element: <Admission /> },
        { path: ROUTES.STUDENT_LOGIN, element: <StudentLogin /> },
        { path: ROUTES.CONTACT, element: <Contact /> },
    ]);
}
