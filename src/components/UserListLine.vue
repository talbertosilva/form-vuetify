<script setup lang="ts">
import { useUserStore } from "@/store/userStore";

const store = useUserStore();

const handleDeleteUser = (userName: string) => {
  store.removeUser(userName);
};
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">User</th>
        <th class="text-left">Age</th>
        <th class="text-left">Email</th>
        <th class="text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in store.users"
        :key="user.name"
        @click="console.log('clicked')"
      >
        <td class="text-left">{{ user.name }}</td>
        <td class="text-left">{{ user.age }}</td>
        <td class="text-left">{{ user.email }}</td>
        <td class="text-left cursor-pointer">
          <v-btn class="bg-transparent" @click="handleDeleteUser(user.name)"
            >✏️</v-btn
          >
          <v-btn class="bg-transparent" @click="handleDeleteUser(user.name)"
            >❌</v-btn
          >
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style></style>
