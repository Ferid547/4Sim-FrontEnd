import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import { root } from "./Root";

export const RenderRoutes = () => {
  const { user } = AuthData();

  return (
    <Routes>
      {root.map((r, i) => {
        if (r.isPrivate && user.isAuthenticated) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else return false;
      })}
    </Routes>
  );
};
