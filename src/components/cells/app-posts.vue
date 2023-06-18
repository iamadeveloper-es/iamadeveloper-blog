<template lang="pug">
.posts.flex
    app-card-post.flex-child.flex-child-lg--6(
    v-for="(post, index) in posts"
    :key="index"
    :post="post"
    @clicked="navigate(post.attributes.title, post.id)")
</template>

<script>

import AppCardPost from '@/components/molecules/app-card-post'
export default {
    name: 'app-posts',
    components:{
        AppCardPost
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    methods: {
        navigate(title, id){
            const slug = title.replace(/[^\w\s]/gi, '').split(' ').join('_').toLowerCase()
            this.$router.push({name: 'SinglePost', params: {slug: slug}, query: { postId: id } })
        }
    }
}
</script>

<style lang="scss">
.posts{

}
</style>