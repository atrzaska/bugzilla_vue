<template>
  <AuthLayout>
    <form @submit.prevent="onSubmit" class="form-signin bg-white p-4">
      <h3 class="mb-3 font-weight-normal">Get started free today</h3>
      <p class="mb-4 text-secondary">No credit card required</p>
      <div class="mb-3">
        <input
          v-model="data.name"
          @input="validateField('name')"
          :class="[
            'form-control',
            'rounded-0',
            'rounded-top',
            invalidFieldClass('name'),
          ]"
          autocomplete="name"
          placeholder="Name"
          type="text"
          autofocus
        />
        <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
        <input
          v-model="data.email"
          @input="validateField('email')"
          :class="['form-control', 'rounded-0', invalidFieldClass('email')]"
          autocomplete="username"
          placeholder="Email address"
          type="email"
        />
        <div v-if="errors.email" class="invalid-feedback">
          {{ errors.email }}
        </div>
        <input
          v-model="data.password"
          :class="[
            'form-control',
            'rounded-0',
            'rounded-bottom',
            invalidFieldClass('password'),
          ]"
          @input="validateField('password')"
          autocomplete="new-password"
          placeholder="Password 8+ characters"
          type="password"
        />
        <div v-if="errors.password" class="invalid-feedback">
          {{ errors.password }}
        </div>
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input
            v-model="data.termsAccepted"
            @change="validateField('termsAccepted')"
            :class="['form-check-input', invalidFieldClass('termsAccepted')]"
            id="termsAccepted"
            type="checkbox"
          />
          <label
            for="termsAccepted"
            class="d-block form-check-label font-weight-normal text-secondary"
          >
            &nbsp;I agree to Bugzilla&nbsp;
            <a href="/terms" target="_blank">Terms&nbsp;</a>
            and&nbsp;
            <a href="/privacy" target="_blank">Privacy Policy</a>
          </label>
          <div v-if="errors.termsAccepted" class="invalid-feedback">
            {{ errors.termsAccepted }}
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input
            v-model="data.newsletterSubscribed"
            id="newsletterSubscribed"
            class="form-check-input"
            type="checkbox"
          />
          <label
            for="newsletterSubscribed"
            class="d-block form-check-label font-weight-normal text-secondary"
          >
            &nbsp;I agree to receive Bugzilla news and updates.
          </label>
        </div>
      </div>
      <div class="mb-3">
        <button
          class="btn btn-lg btn-primary w-100"
          type="submit"
          :disabled="!isValid || isSubmitting"
        >
          <div v-if="isSubmitting">
            <div class="d-flex justify-content-center align-items-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          <div v-else>Get started now</div>
        </button>
      </div>
    </form>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/Auth'
import ErrorsBox from '@/components/ErrorsBox'
import useSignup from '@/hooks/useSignup'
import useFrontendValidation from '@/hooks/useFrontendValidation'
import { signUpSchema as schema } from '@/services/yup'

const { data, errors, signUp, isSubmitting } = useSignup()
const validation = useFrontendValidation({ data, errors, schema })
const { isValid, invalidFieldClass, validateField, validateForm } = validation
const onSubmit = () => validateForm() && signUp()
</script>
