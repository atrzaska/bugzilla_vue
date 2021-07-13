<template>
  <AppLayout>
    <h1 class="text-center">Settings</h1>
    <PersonalSettingsForm />
    <hr />
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
import AppLayout from '@/layouts/App'
import Loading from '@/components/Loading'
import PersonalSettingsForm from './components/PersonalSettingsForm'
import ChangePasswordForm from './components/ChangePasswordForm'
import EmailForm from './components/EmailForm'
import API from '@/services/requests'

const onDeleteConfirmed = () =>
  API.deleteCurrentUser().then(() => {
    window.Toast.success(`Account deleted successfully.`)
    API.clearToken()
  })

const onDelete = (project) =>
  window.Modal.confirmDelete({
    name: project.name,
    onConfirm: () => onDeleteConfirmed(project),
  })

const onCancelAccount = () =>
  window.Modal.confirmDelete({
    title: 'You are about to delete your account',
    onConfirm: onDeleteConfirmed,
  })
</script>
