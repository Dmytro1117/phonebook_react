import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { PrivateRoute } from './PrivateRoute'; // для захисту роутів
import { RestrictedRoute } from './RestrictedRoute';
import { Loader } from './Loader/Loader';
import { refreshUser } from '../redux/Authorization/operations';

const Register = lazy(() => import('../pages/Register/Register'));
const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contactlist = lazy(() => import('../pages/ContactList/ContactList'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isRefreshing } = useSelector(state => state.auth);

  // якщо не обновляється токен, то рендеримо компоненти
  return !isRefreshing ? (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contactlist />} redirectTo="/login" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="*"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Navigate to="/" />}
              />
            }
          />
        </Route>
      </Routes>
    </>
  ) : (
    <Loader />
  );
};
