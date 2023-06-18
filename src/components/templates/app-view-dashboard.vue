<template lang="pug">
  .app-wrapper
    app-header
    main
        transition(
        name="fade")
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

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: transform 0.55s ease-out, opacity 0.55s ease-out;
    transform: translateY(0);
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    transform: translateY(150px);
    opacity: 0;
}
</style>