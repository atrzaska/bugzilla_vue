<template>
  <AppLayout>
    <h1 class="text-center">Settings</h1>
    <SettingsForm />
    <hr />
    <EmailForm />
    <hr />
    <h5 class="mb-4">Change password</h5>
    <ChangePasswordForm />
    <hr />
    <h5 class="mb-4">Cancel my account</h5>
    <p>Unhappy?</p>
    <div>
      <a class="btn btn-danger" href="#">Cancel my account</a>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
import Loading from '@/components/Loading'
import SettingsForm from './components/SettingsForm'
import ChangePasswordForm from './components/ChangePasswordForm'
import EmailForm from './components/EmailForm'
</script>
