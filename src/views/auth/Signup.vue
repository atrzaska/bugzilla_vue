<template>
  <AuthLayout>
    <form @submit.prevent="onSubmit" class="form-signin bg-white p-4">
      <h3 class="mb-3 font-weight-normal">Get started free today</h3>
      <p class="mb-4 text-secondary">No credit card required</p>
      <ErrorsBox :validation="validation" />
      <div class="form-group">
        <input
          v-model="name"
          autocomplete="name"
          :class="[
            'form-control',
            'form-control-first',
            invalidFieldClass('name'),
          ]"
          placeholder="Name"
          type="text"
          required
          @blur="validateField('name', name)"
          @input="validateField('name', name)"
        />
        <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
        <input
          v-model="email"
          autocomplete="username"
          :class="[
            'form-control',
            'form-control-middle',
            invalidFieldClass('email'),
          ]"
          placeholder="Email address"
          type="email"
          required
          @blur="validateField('email', email)"
          @input="validateField('email', email)"
        />
        <div v-if="errors.email" class="invalid-feedback">
          {{ errors.email }}
        </div>
        <input
          v-model="password"
          autocomplete="new-password"
          :class="[
            'form-control',
            'form-control-last',
            invalidFieldClass('password'),
          ]"
          placeholder="Password 8+ characters"
          type="password"
          required
          @blur="validateField('password', password)"
          @input="validateField('password', password)"
        />
        <div v-if="errors.password" class="invalid-feedback">
          {{ errors.password }}
        </div>
      </div>
      <div class="form-group">
        <label class="d-block font-weight-normal text-secondary">
          <input
            v-model="termsAccepted"
            type="checkbox"
            @blur="validateField('termsAccepted', termsAccepted)"
            @click="validateField('termsAccepted', termsAccepted)"
          />
          &nbsp;I agree to Bugzilla&nbsp;
          <a href="/terms" target="_blank">Terms&nbsp;</a>
          and&nbsp;
          <a href="/privacy" target="_blank">Privacy Policy</a>
        </label>
        <div v-if="errors.termsAccepted" class="invalid-feedback">
          {{ errors.termsAccepted }}
        </div>
      </div>
      <div class="form-group">
        <label class="d-block font-weight-normal text-secondary">
          <input v-model="newsletterSubscribed" type="checkbox" />
          &nbsp;I agree to receive Bugzilla news and updates.
        </label>
      </div>
      <div class="form-group">
        <button
          class="btn btn-lg btn-primary btn-block"
          type="submit"
          :disabled="!isValid"
        >
          Get started now
        </button>
      </div>
    </form>
  </AuthLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import AuthLayout from '@/layouts/Auth'
import ErrorsBox from '@/components/ErrorsBox'
import useSignup from '@/use/useSignup'
import useFrontendValidation from '@/use/useFrontendValidation'
import { signUpSchema } from '@/helpers/yup'

const errors = ref({})
const {
  name,
  email,
  password,
  termsAccepted,
  newsletterSubscribed,
  payload,
  signUp,
} = useSignup(errors)
const validation = useFrontendValidation({ errors, schema: signUpSchema })
const { isValid, invalidFieldClass, validateField, validateForm } = validation
// TODO: checbox validation is not working
const onSubmit = () => validateForm(payload()) && signUp()
</script>
