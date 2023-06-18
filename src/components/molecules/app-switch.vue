<template lang="pug">
  label.switch
    input(
    type="checkbox",
    :checked="checked",
    @change="onChange")
    span.switch__slider
        slot
</template>

<script>
export default {
    name: 'app-switch',
    props: {
        checked: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        onChange(ev){
            this.$emit('changed', ev.target.checked)
        }
    }
}
</script>

<style lang="scss">
.switch{
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;

    input{
        opacity: 0;
        width: 0;
        height: 0;
    }

    &__slider{
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--neutral);
        -webkit-transition: .4s;
        border-radius: 34px;
        transition: .4s;
    }

    &__slider::before{
        content: "";
        position: absolute;
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
        background-color: var(--secondary);
        -webkit-transition: .4s;
        border-radius: 50%;
        transition: .4s;
    }

    input:checked + .switch__slider {
        background-color: var(--secondary-200);
    }

    input:focus + .switch__slider {
        box-shadow: 0 0 1px var(--secondary-200);
    }

    input:checked + .switch__slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }
}
</style>