import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/main/page';

const routes = [
  {
    path: '/',
    component: <Main />
  }
];

export const LoggedInRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
