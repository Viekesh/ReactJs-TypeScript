import { Navigate, Outlet } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import { UseAuthStatus } from "./Hooks/UseAuthStatus";

const PrivateRoutes = () => {
  // when you put here false value the page is always redirected to signin page, so we can solve this from
  // firebase by using the hooks, so lets go on to the "UseAuthStatus" for creating the hook
  // const loggedIn = false;
  const { loggedIn, checkingStatus } = UseAuthStatus();

  if (checkingStatus) {
    return <div className='private_route'><Spinner /></div>
  }

  return loggedIn ? <Outlet /> : <Navigate to="/Auth" />
};

export default PrivateRoutes;


