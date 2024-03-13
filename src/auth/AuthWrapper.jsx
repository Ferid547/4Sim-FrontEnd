import { createContext, useContext, useState } from "react";
import { RenderRoutes } from "../routes/RootRender";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  return (
    <AuthContext.Provider value={{ user }}>
      <>
        <RenderRoutes />
      </>
    </AuthContext.Provider>
  );
};
