import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

export const RestrictedRoute = ({ component, redirectTo }) => {
  const isLoaggedIn = useSelector(selectIsLoggedIn);
  return isLoaggedIn ? <Navigate to={redirectTo} /> : component;
};
