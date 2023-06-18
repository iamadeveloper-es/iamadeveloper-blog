<template lang="pug">
  .app-wrapper
    app-header
    main
        router-view(:key="$route.fullPath")
    app-footer
</template>

<script>
import AppFooter from '@/components/molecules/app-footer'
import AppHeader from '@/components/molecules/app-header'
export default {
    name: 'app-view-dashboard',
    components: {
        AppFooter,
        AppHeader
    }
}
</script>

<style>

</style>