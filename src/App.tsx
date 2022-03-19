import React from 'react';
import { PATHS } from 'routes/paths';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PageNotFound } from 'pages/404page';
import { SignInPage } from 'pages/signin';
import { SignUpPage } from 'pages/signup';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.AUTH.SIGNUP} element={<SignUpPage />} />
        <Route path={PATHS.AUTH.SIGNIN} element={<SignInPage />} />
        <Route path={PATHS.NOT_FOUND_PATHS} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
