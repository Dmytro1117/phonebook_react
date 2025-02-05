import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoaggedIn = useSelector(selectIsLoggedIn);
  return isLoaggedIn ? <Navigate to={redirectTo} /> : Component;
};
