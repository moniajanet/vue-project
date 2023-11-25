<template>
  <div class="user">
    <div class="user__img">
      <img :src="user.avatar" />
    </div>
    <h3 class="user__name">{{ user.first_name }} {{ user.last_name }}</h3>
    <a :href="`mailto:${user.email}`">{{ user.email }}</a>
  </div>
</template>

<script setup lang="ts">
import type { User } from '../types/Users'

defineProps<{
  user: User
}>()
</script>

<style lang="scss" scoped>
.user {
  width: 300px;
  text-align: center;
  border-radius: 10px;
  background: #fff;
  padding: 0 10px 30px;
  &__img {
    position: relative;
    padding-top: 50%;
    padding-bottom: 50%;
    margin-bottom: 10px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      max-width: 100%;
    }
  }
  &__name {
    font-size: 1.1em;
  }
}
</style>
