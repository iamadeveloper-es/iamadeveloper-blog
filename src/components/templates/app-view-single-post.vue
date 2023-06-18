<template lang="pug">
.single-post(v-if="post")
    .container
        .grid-lg--12
            .child--1-9
                section.section
                    h1 {{ post.attributes.title }}
                    .single-post__img(v-if="getImage")
                        img(:src="getImage", alt="")
                    .single-post__content(
                        v-for="(item, index) in post.attributes.content"
                        :key="index"
                    )
                        h2(v-if="item.title") {{ item.title }}
                        template(v-if="item.text")
                            div(v-html="markedToHtml(item.text)")
                        template(v-if="item.media")
                            div(v-html="item.text")
            .child--10-end
                section.section
                    app-nav-categories

</template>

<script>
import AppMixinPostsServices from '@/mixins/services/posts'
import AppNavCategories from '@/components/molecules/app-nav-categories'
import { mapGetters } from 'vuex'
import {marked} from 'marked'
export default {
    name: 'app-view-single-post',
    components: {
        AppNavCategories
    },
    mixins: [AppMixinPostsServices],
    data(){
        return{
            post: undefined
        }
    },
    computed: {
        ...mapGetters({
            filterPost: 'getPostById'
        }),
        getImage(){
            const imgPath = this.post.attributes.featured_image.data
            return imgPath ? 
            `${process.env.VUE_APP_URL}${imgPath.attributes.url}` :
            undefined
        }
    },
    methods: {
        markedToHtml(text){
            return marked(text)
        },
        getPost(id){
            this.getPostById(id)
                .then(response => this.post = response.data)
                .catch(err => console.error(err))
        },
        configView(){
            const queryParamId = this.$route.query.postId
            const filteredPost = this.filterPost(queryParamId)

            if(!filteredPost){
                this.getPost(queryParamId)
            }
            else{
                this.post = filteredPost
            }
        }
    },
    created(){
        this.configView()
    }
}
</script>

<style lang="scss">
.single-post{

    &__img img{
        width: 100%;
        // aspect-ratio: 16/9;
        // object-fit: cover;
    }

    p:empty{
        display: none;
    }
}
</style>