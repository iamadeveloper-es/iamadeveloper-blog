<template lang="pug">
.app-view-category
    section.section
        .container
            .flex.flex--column.flex--x-center
                .post.flex-child.flex-child-lg--8
                    h2.m-bottom--2 {{ storedCategory.attributes.name }}
        .container
            app-posts(:posts="posts")
</template>

<script>
import AppMixinPostsServices from '@/mixins/services/posts'
import AppPosts from '@/components/cells/app-posts.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'app-view-category',
    components: {
        AppPosts
    },
    mixins: [AppMixinPostsServices],
    data(){
        return{
            posts: [],
            catId: undefined,
        }
    },
    computed: {
        ...mapGetters({
            storedPostsByCat: 'getPostsByCategory',
            storedCategory: 'getSelectedCategory'
        }),
        storedCategories(){
            let categories
            if(this.storedPostsByCat){
                categories = [...this.storedPostsByCat.map(item => item.attributes.categories.data)]
            }
            return categories
        },
        isNotSameResults(){
            const catId = this.$route.query.catId
            return !this.storedPostsByCat || (this.storedPostsByCat && this.storedCategories.some(cat => cat.id !== catId))
        }
    },
    methods: {
        findPostsByCat(){
            this.catId = this.$route.query.catId
            this.getPostByCat(this.catId)
                .then(response => {
                    this.posts = response
                    this.$store.commit('setPostsByCategory', this.posts)
                })
                .catch(err => console.error(err))
        },
        configView(){
            if(this.isNotSameResults){
                this.findPostsByCat()
            }
            else{
                this.posts = this.storedPostsByCat
            }
        }
    },
    created(){
        this.configView()
    }
}
</script>

<style lang="scss">

</style>