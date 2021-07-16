<template>
  <div :class="wrapperClass">
    <label :class="labelClass" :for="id">{{ label }}</label>
    <textarea
      :value="modelValue"
      :class="[inputClass, validation.invalidFieldClass(field)]"
      @input="onInput($event.target.value)"
      :id="id"
      :placeholder="placeholder || label"
      :autofocus="autofocus"
    />
    <div v-if="validation.errors.value[field]" :class="errorClass">
      {{ validation.errors.value[field] }}
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const {
  modelValue,
  validation,
  id,
  field: fieldParam,
  placeholder,
  label,
  wrapperClass = 'mb-3',
  labelClass = 'form-label',
  inputClass = 'form-control',
  errorClass = 'invalid-feedback',
  autofocus = false,
} = defineProps({
  modelValue: String,
  validation: Object,
  id: String,
  field: String,
  placeholder: String,
  label: String,
  wrapperClass: String,
  labelClass: String,
  inputClass: String,
  errorClass: String,
  autofocus: Boolean,
})
const emit = defineEmits(['update:modelValue'])
const field = fieldParam || id
const onInput = (val) => {
  emit('update:modelValue', val)
  validation.validateField(field)
}
</script>
