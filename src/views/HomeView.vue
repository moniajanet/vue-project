<template>
  <main>
    <div class="container">
      <div class="users">
        <button class="btn" @click="fetchUsers()">Wygeneruj użytkowników</button>
        <div class="loading" v-show="getLoading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div v-if="getUsers" class="users__list">
          <UserItem v-for="user in getUsers" :key="user.id" :user="user" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '../stores/user'
import UserItem from '../components/UserItem.vue'

const store = useUserStore()
const fetchUsers = () => {
  store.fetchUsers()
}
const getUsers = computed(() => {
  return store.getUsers
})
const getLoading = computed(() => {
  return store.getLoading
})
</script>

<style lang="scss" scoped>
.users {
  position: relative;
  text-align: center;
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-bottom: 40px;
  }
  .btn {
    margin: 0 auto 40px;
  }
}
</style>
