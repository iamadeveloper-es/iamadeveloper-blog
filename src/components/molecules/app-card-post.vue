<template lang="pug">
    .card-post.flex-child(@click="handleEvent")
        .flex.flex--no-wrap
            .card-post__header 
                img(:src="setThumbnail(post)")
            .card-post__body
                h3 {{ post.attributes.title }}
        .card-post__footer.flex.flex--x-between.flex--y-center.m-top--1
            small {{formatDate(post.attributes.createdAt)}}
            div
                app-tag(
                v-for="(tag, index) in post.attributes.categories.data"
                :key="index",
                :text="tag.attributes.name"
                )
</template>

<script>
import AppTag from '@/components/atoms/app-tag'
import { DateUtils } from '@/utils/date-utils'
export default {
    name: 'app-card-post',
    components: {
        AppTag
    },
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        setThumbnail(item){
            const imgPath = item.attributes.featured_image.data
            return imgPath ? 
            `${process.env.VUE_APP_URL}${imgPath.attributes.formats.thumbnail.url}` :
            require('@/assets/images/generic-image.jpg')
        },
        formatDate(date){
            return DateUtils.toLocaleDateString(date)
        },
        handleEvent(e){
            this.$emit('clicked', e)
        }
    }
}
</script>

<style lang="scss">
.card-post{
    background-color: var(--white);
    padding: 14px;
    border-radius: 5px;
    min-height: 86px;
    // border: 1px solid var(--neutral);
    box-shadow: 2px 0px 8px var(--neutral);
    cursor: pointer;
    transition: transform .2s ease-in-out;

    &__header{
        max-width: 50px;
        max-height: 50px;
        // height: 100px;
        border-radius: 5px;
        overflow: hidden;
    }

    &__header img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        
    }

    @media (min-width: map-get($medias, 'lg')){
        padding: 18px;
        min-height: 112px;

        &:hover{
            // box-shadow: inset 2px 0px 8px var(--neutral);
            transform: translateY(-7px);
        }

        &__header{
            max-width: 60px;
            max-height: 60px;
        }
    }
}
</style>