import { useCallback } from "react";
import { FBlogin, FBlogout, FBisAuthenticated } from "../firebase";

export const useAuth = () => {
  const login = useCallback(async (email, password) => {
    try {
      await FBlogin(email, password);
    } catch (error) {}
  }, []);

  const logout = useCallback(async () => {
    await FBlogout();
  }, []);

  const isLogin = useCallback(async () => {
    return await FBisAuthenticated();
  }, []);

  return { login, logout, isLogin };
};
