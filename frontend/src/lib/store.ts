import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AppState {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useStore = create<AppState>((set) => ({
  user: null, // Ideally decode from local storage
  token: null,
  login: (user, token) => {
    localStorage.setItem('token', token);
    set({ user, token });
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null });
  },
}));
