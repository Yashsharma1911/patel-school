import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Home, Signup, Signin, Student, Courses, Result, Registration, Browse } from './pages';
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
          <Route path={ROUTES.STUDENT} element={<Student />} />
          <Route path={ROUTES.COURSES} element={<Courses />} />
          <Route path={ROUTES.RESULT} element={<Result />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.BROWSE} element={<Browse />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
