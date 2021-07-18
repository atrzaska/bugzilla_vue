<template>
  <ul class="nav nav-tabs mb-3">
    <Tab :to="`/projects/${id}/current`">Current</Tab>
    <Tab :to="`/projects/${id}/backlog`">Backlog</Tab>
    <Tab :to="`/projects/${id}/icebox`">Icebox</Tab>
    <Tab :to="`/projects/${id}/done`">Done</Tab>
    <Tab :to="`/projects/${id}/members`">Members</Tab>
  </ul>
</template>

<script setup>
import Tab from '@/components/Tab'
import useParams from '@/hooks/useParams'

const { id } = useParams()
</script>
