import { useRoutes } from 'react-router-dom';
// pages
import { Home, Signup, Signin, GalleryImage, Courses, Result, Registration, Admission, StudentLogin, Contact } from './pages';
import AdmissionDashboard from './sections/dashborad/admissionDashboard';
import FeesDashboard from './sections/dashborad/fees/feesDashboard';
import HostelFeesDashboard from './sections/dashborad/fees/hostelFeesDashboard';
import SchoolFeesDashboard from './sections/dashborad/fees/schoolFeesDashboard';
import DashboardLayout from './layout/index';

// ----------------------------------------------------------------------
import * as ROUTES from './constants/routes';

// custom hooks
import UseAuthListener from './hooks/use-auth-listener';
import UseFirestoreData from './hooks/use-user-listener';

//helpers
import { ProtectRoute } from './helpers/routeChecker';

//context
import { FirebaseUserContext } from "./context/firebase";


export default function Router() {
    const { user } = UseAuthListener();
    const { data, showLoader } = UseFirestoreData("students");
    
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
                <ProtectRoute user={ user }>
                    <FirebaseUserContext.Provider value={{ user, data, showLoader }}>
                        <DashboardLayout />
                    </FirebaseUserContext.Provider>
                </ProtectRoute>
            </>,
            children: [
                { path: ROUTES.DASBOARD_ADMISSION, element: <AdmissionDashboard/> },
                { path: ROUTES.DASBOARD_FEES, element: <FeesDashboard/>, children: [
                    { path: ROUTES.DASBOARD_FEES_SCHOOL, element: <SchoolFeesDashboard/> },
                    { path: ROUTES.DASBOARD_FEES_HOSTEL, element: <HostelFeesDashboard/> },
                ] },
            ]
        },
        { path: ROUTES.ADMISSION, element: <Admission /> },
        { path: ROUTES.STUDENT_LOGIN, element: <StudentLogin /> },
        { path: ROUTES.CONTACT, element: <Contact /> },
    ]);
}
