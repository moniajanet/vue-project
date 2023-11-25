<template>
  <div class="config">
    <div class="container">
      <h1 class="config__header">Skonfiguruj stronę</h1>
      <label class="config__label" for="font-size">Podaj wielkość czcionki:</label>
      <input
        class="config__input"
        id="font-size"
        type="number"
        v-model="getSize"
        @change="updateSize"
      />
      <p class="config__label">Wybierz kolor tła strony:</p>
      <ColorPicker :color="getColor" @color-change="updateColor" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ColorPicker } from 'vue-accessible-color-picker'
import type {ColorChangeDetail} from 'vue-accessible-color-picker'
import { useConfigureStore } from '../stores/configure'

const store = useConfigureStore()

const getColor = computed(() => {
  return store.getColor
})
const getSize = computed(() => {
  return store.getSize
})

function updateSize(e: Event) {
  const target = <HTMLInputElement>e.target
  store.setSize(target.value)
}

function updateColor(eventData: ColorChangeDetail) {
  store.setColor(eventData.cssColor)
}
</script>
<style lang="scss">
@import url('vue-accessible-color-picker/styles');

.config {
  text-align: center;
  margin-bottom: 40px;
  &__header {
    font-size: 1.6em;
    margin-bottom: 30px;
  }
  &__label {
    display: block;
    margin: 20px 0 10px;
  }
  &__input {
    border: none;
    background: #fff;
    border-radius: 4px;
    border: 2px solid #00bd7e;
    padding: 5px 10px;
  }
  .vacp-color-picker {
    margin: 0 auto;
    border: 2px solid #00bd7e;
    padding: 10px;
    border-radius: 4px;
  }
}
</style>
