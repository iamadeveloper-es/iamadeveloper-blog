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
import {reactive, ref, computed} from 'vue'
import { usePosts } from '../../composables/services/usePosts'
import AppPosts from '@/components/cells/app-posts.vue'
import { mapGetters } from 'vuex'

const {postsByCat, results, error} = usePosts()

export default {
    name: 'app-view-category',
    components: {
        AppPosts
    },
    computed: {
        ...mapGetters({
            storedPostsByCat: 'getPostsByCategory',
            storedCategory: 'getSelectedCategory'
        }),
    },
    setup(){
        const posts = ref([])
        const catId = ref(undefined)

        const storedCategories = () =>{
            let categories
            if(this.storedPostsByCat){
                categories = [...this.storedPostsByCat.map(item => item.attributes.categories.data)]
            }
            return categories
        }

        const isNotSameResults = () =>{
            const catId = this.$route.query.catId
            return !storedPostsByCat() || (storedPostsByCat() && storedCategories().some(cat => cat.id !== catId))
        }

        function getCategories(){
            catId.value = this.$route.query.catId
            postsByCat()
            .then(response => {
                posts.value = response
                this.$store.commit('setPostsByCategory', posts)
            })
            .catch(err => console.error(err))
        }

        function configView(){
            // debugger
            console.log(this.$route)
            if(this.isNotSameResults()){
                getCategories()
            }
            else{
                debugger
                posts.value = this.storedPostsByCat
            }
        }

        return {
            posts,
            catId,
            storedCategories,
            isNotSameResults,
            getCategories,
            configView
        }
    },
    mounted() {
        this.configView()
    }
}
</script>

<style>

</style>