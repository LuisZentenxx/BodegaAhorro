/**
 * This TypeScript code defines a Zustand store for managing authentication state, including access and
 * refresh tokens.
 * @property {string} access - A string that represents the access token for authentication.
 * @property {string} refresh - The `refresh` property is a string that represents the refresh token
 * used for authentication.
 * @property {boolean} isAuth - A boolean value indicating whether the user is authenticated or not.
 */
import { create } from "zustand"
import { persist } from "zustand/middleware"

type State = {
    access: string;
    refresh: string;
    isAuth: boolean;
}

type Actions = {
    setToken: (access: string, refresh: string) => void;
    logout: () => void;
};

export const useAuthStore = create(
    persist<State & Actions>(
        (set) => ({
            access: '',
            refresh: '',
            isAuth: false,
            setToken: (access: string, refresh: string) => 
                set(() => ({
                    access,
                    refresh,
                    isAuth: !!access && !!refresh,
                })),
                logout: () => set(() => ({ access: '', refresh: '', isAuth: false })),
        }),
        {
            name: "auth"
        }
    )
);