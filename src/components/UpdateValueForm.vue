<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/store/userStore";
import { type UserType } from "@/types/User.types";

const user = ref<UserType>({
  name: "",
  age: null,
  email: "",
  city: "",
});

const form = ref<HTMLFormElement | null>(null);
const store = useUserStore();

const inputsForm = [
  { text: "Name", label: "Name", type: "string" },
  { text: "Age", label: "Age", type: "number" },
  { text: "Email", label: "Email", type: "string" },
  { text: "City", label: "City", type: "string" },
];

const fieldRules = [
  (value: any) => !!value || "This field is required.",
  (value: any) =>
    (value !== null && value.length > 1) || "Please provide a longer answer.",
];

const submitFormData = () => {
  if (form.value?.isValid) {
    store.addNewUser({
      ...user.value,
    });

    form.value?.reset();
  }
};
</script>

<template>
  <v-container>
    <v-responsive class="align-centerfill-height mx-auto mt-16" max-width="400">
      <v-form ref="form" validate-on="blur" @submit.prevent="submitFormData">
        <label>{{ inputsForm[0].label }}</label>
        <v-text-field
          v-model="user.name"
          :key="inputsForm[0].label"
          :type="inputsForm[0].type"
          :placeholder="inputsForm[0].text"
          variant="solo"
          bg-color="#dfdfdf"
          :rules="fieldRules"
        ></v-text-field>

        <v-row>
          <v-col>
            <label>{{ inputsForm[1].label }}</label>
            <v-text-field
              v-model="user.age"
              :key="inputsForm[1].label"
              :type="inputsForm[1].type"
              :placeholder="inputsForm[1].text"
              hide-spin-buttons
              variant="solo"
              bg-color="#dfdfdf"
              :rules="fieldRules"
            ></v-text-field>
          </v-col>

          <v-col>
            <label>{{ inputsForm[2].label }}</label>
            <v-text-field
              v-model="user.email"
              :key="inputsForm[2].label"
              :type="inputsForm[2].type"
              :placeholder="inputsForm[2].text"
              variant="solo"
              bg-color="#dfdfdf"
              :rules="fieldRules"
            ></v-text-field>
          </v-col>
        </v-row>

        <label>{{ inputsForm[3].label }}</label>
        <v-text-field
          v-model="user.city"
          :key="inputsForm[3].label"
          :type="inputsForm[3].type"
          :placeholder="inputsForm[3].text"
          variant="solo"
          bg-color="#dfdfdf"
          :rules="fieldRules"
        ></v-text-field>

        <v-btn type="submit">Submit</v-btn>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<style scoped>
label {
  display: flex;
  font-size: small;
  font-weight: 200;
  color: lightgray;
  margin-bottom: 8px;
}

.v-text-field {
  margin-bottom: 8px;
}

:deep(.v-field__input) {
  min-height: 25px;
  height: 25px;
  font-size: small;
}

:deep(.v-input__details) {
  padding: 0 !important;
  text-align: left;
}
</style>
