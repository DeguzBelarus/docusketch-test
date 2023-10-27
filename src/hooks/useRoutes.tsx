import { Route, Routes } from 'react-router-dom';

import { MainPage } from 'pages/MainPage/MainPage';

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<MainPage />}></Route>
    </Routes>
  );
};
