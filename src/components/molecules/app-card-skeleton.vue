<template lang="pug">
  .card-skeleton.flex-child
    .flex.flex--no-wrap
        .card-skeleton__img
            .skeleton
        .card-skeleton__title
            .skeleton
            .skeleton
    .flex.flex--no-wrap.flex--x-between.m-top--1
        .card-skeleton__date
            .skeleton
        .card-skeleton__tags
            .skeleton
</template>

<script>
export default {
    name: 'app-card-skeleton'
}
</script>

<style lang="scss">
    .card-skeleton{
        padding: 18px;
        min-height: 86px;
        background-color: var(--white);
        border-radius: 5px;
        box-shadow: 2px 0px 8px var(--neutral);

        &__img {
            min-height: 80px;
            width: 80px;
            border-radius: 4px;
        }

        &__title{
            height: 25px;
            width: 100%;

            .skeleton:first-of-type{
                margin-bottom: 1rem;
            }
            .skeleton:last-of-type{
                width: 40%;
            }
        }

        &__date, &__tags{
            height: 20px;
            width: 4em;
        }
    }
</style>