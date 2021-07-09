<template>
  <div class="d-flex justify-content-center py-3">
    <button
      @click="drawer.open"
      type="button"
      class="btn btn-outline-secondary"
    >
      Show new side drawer
    </button>
  </div>
  <SideDrawer
    title="My side drawer 2"
    :show="drawer.show"
    @close="drawer.close"
  >
    <div class="px-3 py-2">
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
      <img
        src="https://picsum.photos/500/500/?image=54"
        class="img-thumbnail img-fluid"
        alt="pic"
      />
    </div>
    <div class="px-3 py-2">
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
      <img
        src="https://picsum.photos/500/500/?image=54"
        class="img-thumbnail img-fluid"
        alt="pic"
      />
    </div>
    <div class="px-3 py-2">
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
      <img
        src="https://picsum.photos/500/500/?image=54"
        class="img-thumbnail img-fluid"
        alt="pic"
      />
    </div>
  </SideDrawer>
</template>

<script setup>
import SideDrawer from '@/components/SideDrawer'
import useSideDrawer from '@/hooks/useSideDrawer'

const drawer = useSideDrawer()
</script>
