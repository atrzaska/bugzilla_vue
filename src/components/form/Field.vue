<template>
  <div :class="wrapperClass">
    <label :class="labelClass" :for="id">{{ label }}</label>
    <input
      :value="modelValue"
      :class="[inputClass, validation.invalidFieldClass(field)]"
      @input="onInput($event.target.value)"
      :id="id"
      :name="field"
      :placeholder="placeholder || label"
      :type="type"
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
  name,
  placeholder,
  label,
  type = 'text',
  wrapperClass = 'mb-3',
  labelClass = 'form-label',
  inputClass = 'form-control',
  errorClass = 'invalid-feedback',
  autofocus = false,
} = defineProps({
  modelValue: String,
  validation: Object,
  id: String,
  name: String,
  field: String,
  placeholder: String,
  label: String,
  type: String,
  wrapperClass: String,
  labelClass: String,
  inputClass: String,
  errorClass: String,
  autofocus: Boolean,
})
const emit = defineEmits(['update:modelValue'])
const field = name || id
const onInput = (val) => {
  emit('update:modelValue', val)
  validation.validateField(field)
}
</script>
