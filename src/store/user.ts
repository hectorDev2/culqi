import type { User } from "../interfaces/user";
import { defineStore } from "pinia";

interface UserState {
  user: User | undefined;
  loading: boolean;
  msgError: string;
  isMenu: boolean;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    user: undefined,
    loading: false,
    msgError: "",
    isMenu: false,
  }),

  actions: {
    setIsMenu(val: boolean) {
      this.isMenu = val;
    },
    setUser(user: User) {
      this.user = user;
    },
    setLoading(val: boolean) {
      this.loading = val;
    },
    setError(val: string) {
      this.msgError = val;
    },
    clearState() {
      this.user = undefined;
      this.loading = false;
    },
  },
});
