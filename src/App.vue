<template>
  <div class="page-holder" :style="{ background: getColor, fontSize: getSize + 'px' }">
    <HeaderSecton />
    <RouterView />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useConfigureStore } from '../src/stores/configure'
import HeaderSecton from '../src/components/HeaderSection.vue'
import FooterSection from '../src/components/FooterSection.vue'

const store = useConfigureStore()

const getColor = computed(() => {
  return store.getColor
})
const getSize = computed(() => {
  return store.getSize
})
</script>

<style lang="scss" scoped>
.page-holder {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
