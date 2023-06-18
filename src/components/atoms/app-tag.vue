<template lang="pug">
.app-tag(@click="handleEvent")
    span {{text}}

</template>

<script>
export default {
    name: 'app-tag',
    props: {
        text: {
            type: String,
            required: true
        }
    },
    methods: {
        handleEvent(ev){
            this.$emit('clicked', ev)
        }
    }
}
</script>

<style lang="scss">

.app-tag{
    padding: 2px 5px;
    background-color: var(--secondary-200);
    border: 1px solid var(--secondary-200);
    border-radius: 5px;
    font-size: .8em;
    display: inline-block;
    margin-right: 8px;

    &:last-of-type{
        margin-right: 0;
    }

    span{
        color: #1d1d1d;
    }

    &--clickable{
        cursor: pointer;

        &:hover{
            border: 1px solid var(--secondary);
        }
    }
}
</style>
