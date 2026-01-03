// NextAuth client-side hook for session management
import { useSession, signIn as authSignIn, signOut as authSignOut } from "next-auth/react";

export const useAuth = () => {
  const { data: session, status } = useSession();

  return {
    user: session?.user || null,
    session,
    status,
    isLoading: status === "loading",
    isAuthenticated: !!session,
    signIn: authSignIn,
    signOut: authSignOut,
    update: () => Promise.resolve(), // Placeholder for update functionality
  };
};
