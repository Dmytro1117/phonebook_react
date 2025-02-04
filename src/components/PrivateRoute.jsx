import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsRefreshing, selectIsLoggedIn } from '../redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo: addres }) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoaggedIn = useSelector(selectIsLoggedIn);

  const shouldRedirect = !isLoaggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={addres} /> : Component;
};
