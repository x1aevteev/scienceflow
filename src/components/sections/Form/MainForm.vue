<script setup lang="ts">
import type {PropType} from "vue";
import Container from "@/components/base/Container/Container.vue";
import Button from "@/components/base/Button/Button.vue";
import {ref} from "vue"
import {userStore} from "@/stores/userStore";

const store = userStore()

const props = defineProps({
  isLoggedIn: Boolean,
  isAuthenticated: Boolean,
})

const formData = ref({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
})

const sendData = () => {
  store.register(formData)
}
</script>

<template>
  <template v-if="!isLoggedIn && !isAuthenticated">
    <Container class="flex flex-col items-center justify-center gap-6">
      <h2 class="text-h4">Зарегистриуйся! Стань умнее!</h2>
    <VForm v-model="valid" class="max-w-[500px]" @submit.prevent="sendData">
            <VTextField
                v-model="firstname"
                :counter="10"
                label="Имя"
                required
                class="max-w-[500px] w-full !border-0 active:!border-0 focus:!border-0"
                clearable
                variant="solo"
            />
            <VTextField
                v-model="lastname"
                :counter="10"
                label="Фамилия"
                required
                class="max-w-[500px] w-full !border-0 active:!border-0 focus:!border-0"
                clearable
                variant="solo"
            />
            <VTextField
                v-model="email"
                label="E-mail"
                type="email"
                required
                cclass="!max-w-[500px] w-full !border-0 active:!border-0 focus:!border-0"
                clearable
                variant="solo"
            />
            <VTextField
                v-model="email"
                label="Password"
                type="password"
                required
                class="max-w-[500px] w-full !border-0 active:!border-0 focus:!border-0"
                clearable
                variant="solo"
            />
      <Button :type="submit" class="max-w-[300px] w-full rounded-xl border p-4 !border-black text-center">Регистрация</Button>
    </VForm>
      <img src="https://media1.tenor.com/m/fXBn1m2j9pkAAAAd/russia-soviet-union.gif" alt="Зарегистрируйся"/>
    </Container>
  </template>
  <template v-if="isLoggedIn && !isAuthenticated">

  </template>
</template>

<style scoped lang="scss">
.v-field--focused {
  border: none !important;
}
</style>