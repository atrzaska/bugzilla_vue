<template>
  <AppLayout>
    <h1 class="text-center">Settings</h1>
    <h5 class="mb-4">Change personal data</h5>
    <PersonalSettingsForm />
    <hr />
    <h5 class="mb-4">Change email</h5>
    <EmailForm />
    <hr />
    <h5 class="mb-4">Change password</h5>
    <ChangePasswordForm />
    <hr />
    <h5 class="mb-4">Cancel my account</h5>
    <p>Unhappy?</p>
    <div>
      <button @click="onCancelAccount" class="btn btn-danger">
        Cancel my account
      </button>
    </div>
  </AppLayout>
</template>

<script setup>
import { useRouter } from 'vue-router'
import AppLayout from '@/layouts/App'
import PersonalSettingsForm from './components/PersonalSettingsForm'
import ChangePasswordForm from './components/ChangePasswordForm'
import EmailForm from './components/EmailForm'
import API from '@/services/requests'

const router = useRouter()

const onCancelAccountConfirmed = () =>
  API.deleteCurrentUser().then(() => {
    window.Toast.success(`Account deleted successfully.`)
    API.clearToken()
    router.push('/')
  })

const onCancelAccount = () =>
  window.Modal.confirmDelete({
    title: 'You are about to delete your account',
    onConfirm: onCancelAccountConfirmed,
  })
</script>
