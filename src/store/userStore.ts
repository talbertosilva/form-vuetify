import { UserType } from "@/types/User.types";
import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [] as UserType[],
  }),
  actions: {
    addNewUser(newUser: UserType): void {
      this.users.push(newUser);
    },
    removeUser(userName: string): void {
      this.users = this.users.filter((user) => user.name !== userName);
    },
  },
  getters: {
    getUsers(): UserType[] {
      return this.users;
    },
  },
});
