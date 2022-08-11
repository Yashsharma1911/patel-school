import { useRoutes } from 'react-router-dom';
// pages
import { Home, Signup, Signin, GalleryImage, Courses, Result, Registration, Browse, Admission } from './pages';

// ----------------------------------------------------------------------
import * as ROUTES from './constants/routes';

export default function Router() {
    return useRoutes([
        { path: ROUTES.HOME, element: <Home /> },
        { path: ROUTES.SIGN_UP, element: <Signup /> },
        { path: ROUTES.SIGN_IN, element: <Signin /> },
        { path: ROUTES.GALLERY, element: <GalleryImage /> },
        { path: ROUTES.COURSES, element: <Courses /> },
        { path: ROUTES.RESULT, element: <Result /> },
        { path: ROUTES.REGISTRATION, element: <Registration /> },
        { path: ROUTES.BROWSE, element: <Browse /> },
        { path: ROUTES.ADMISSION, element: <Admission /> },
    ]);
}
