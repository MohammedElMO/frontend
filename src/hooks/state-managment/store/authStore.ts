import { create } from "zustand"

type AuthStore = {
  isLoginOpen: boolean
  isSignInOpen: boolean
  setIsLoginOpen: (isAuthentified: boolean) => void
  setIsSigninOpen: (isAuthentified: boolean) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoginOpen: false,
  isSignInOpen: false,
  setIsLoginOpen: (isAuthentified) =>
    set((auth) => ({ ...auth, isLoginOpen: isAuthentified })),
  setIsSigninOpen: (isAuthentified) =>
    set((auth) => ({ ...auth, isSignInOpen: isAuthentified })),
}))
