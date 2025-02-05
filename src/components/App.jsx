import { useEffect, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operationsAuth';
import { selectIsRefreshing } from '../redux/auth/authSelectors.js';
import '../helpers/notifyConfig.js';

const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacs'));
const ContactForm = lazy(() => import('../pages/ContactForm/ContactForm'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} redirectTo="/" />

        <Route
          path="/contacts"
          element={<PrivateRoute component={<Contacts />} redirectTo="/login" />}
        />
        <Route
          path="/form_contact"
          element={<PrivateRoute component={<ContactForm />} redirectTo="/register" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/form_contact" component={<Register />} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  ) : (
    <Loader />
  );
};
