<template lang="pug">
footer.app-footer
    .container
        .flex.flex--no-wrap.flex--x-between
            small iamadeveloper Blog
            small &copy; iamadeveloper {{ getYear }}
</template>

<script>
import { DateUtils } from '@/utils/date-utils'
export default {
    name: 'app-footer',
    computed: {
        getYear(){
            return DateUtils.getYear()
        }
    }

}
</script>

<style lang="scss">
    .app-footer{
        padding: 20px 0;
        border-top: 1px solid var(--neutral);
        margin-top: 40px;
    }
</style>