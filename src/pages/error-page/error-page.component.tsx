import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div>Error 404</div>
      <div>Page not found</div>
      <NavLink to={"/"}>Back Home</NavLink>
    </div>
  );
};

export const ErrorPageComponent = ErrorPage;
