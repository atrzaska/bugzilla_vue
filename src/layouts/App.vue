<template>
  <Header/>
  <Sidebar/>
  <div class="wrapper">
    <div class="pt-4">
      <div class="container px-4">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default {
  beforeCreate: () => document.body.className = 'bg-gray',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style>
</style>
