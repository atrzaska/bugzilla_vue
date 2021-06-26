<template>
  <div class="col-4">
    <select
      :value="modelValue"
      @input="updateValue($event.target.value)"
      class="form-select col-4"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmit } from 'vue'

const { modelValue, options } = defineProps({
  modelValue: String,
  options: Object,
})
const emit = defineEmit(['update:modelValue'])

const updateValue = (val) => emit('update:modelValue', val)
</script>
