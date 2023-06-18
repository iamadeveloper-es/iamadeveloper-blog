<template lang="pug">
  div(id="app")
    app-view-dashboard
</template>

<script>
import AppViewDashboard from '@/components/templates/app-view-dashboard'
export default {
    name: 'app',
    components: {
      AppViewDashboard
    }
}
</script>

<style lang="scss">
@import '@/static/scss/main';
</style>
