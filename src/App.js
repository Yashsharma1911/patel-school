import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Home, Signup, Signin, GalleryImage, Courses, Result, Registration, Browse, Admission } from './pages';
// import HeaderContainer from '../container/header';
import * as ROUTES from './constants/routes'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
          <Route path={ROUTES.SIGN_IN} element={<Signin />} />
          <Route path={ROUTES.GALLERY} element={<GalleryImage />} />
          <Route path={ROUTES.COURSES} element={<Courses />} />
          <Route path={ROUTES.RESULT} element={<Result />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.BROWSE} element={<Browse />} />
          <Route path={ROUTES.ADMISSION} element={<Admission />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
