<template lang="pug">
.home
  .container
    .grid-lg--12
      .child--1-9
        section.section
          h2.m-bottom--3 Los más recientes
          app-posts(
          v-if="posts.length"
          :posts="posts")
          .flex(v-else)
            .flex-child.flex-child-lg--6(
                v-for="(item, index) in 5"
                :key="index"
              )
              app-card-skeleton
        section.section
          h2.m-bottom--3 Programación
          app-posts(
          v-if="filteredProgrammingPosts.length"
          :posts="filteredProgrammingPosts")
          .flex(v-else)
            .flex-child.flex-child-lg--6(
                v-for="(item, index) in 5"
                :key="index"
              )
              app-card-skeleton
        section.section
          h2.m-bottom--3 CSS lovers
          app-posts(
          v-if="filteredCssPosts.length"
          :posts="filteredCssPosts")
          .flex(v-else)
            .flex-child.flex-child-lg--6(
                v-for="(item, index) in 5"
                :key="index"
              )
              app-card-skeleton
      .child--10-end
        section.section
          app-nav-categories
</template>

<script>
import AppMixinPostsServices from '@/mixins/services/posts'
import AppNavCategories from '@/components/molecules/app-nav-categories'
import AppPosts from '@/components/cells/app-posts.vue'
import AppCardSkeleton from '@/components/molecules/app-card-skeleton.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'app-view-home',
  components: {
    AppNavCategories,
    AppPosts,
    AppCardSkeleton
  },
  mixins: [ AppMixinPostsServices],
  data(){
      return{
          posts: []
      }
  },
  computed: {
      ...mapGetters({
          storedPosts: 'getPosts'
      }),
      filteredCssPosts(){
        return this.posts.filter(post => {
          const categories = post.attributes.categories.data;
          return categories.some(category => category.attributes.name.toLowerCase() === 'css')
        });
      },
      filteredProgrammingPosts(){
        return this.posts.filter(post => {
          const categories = post.attributes.categories.data;
          return categories.some(category => category.attributes.name.toLowerCase() !== 'css')
        });
      }
      
  },
  methods: {
    getPosts(){
      this.getAllPosts()
          .then(response => {

            this.posts = response.data
            this.$store.commit('setPosts', this.posts)
          })
          .catch(err => console.error(err))
    },
    configView(){
        if(!this.storedPosts){
            this.getPosts()
        }
        else{
            this.posts = this.storedPosts;
        }
    }
  },
  created(){
      this.configView();
  }
}
</script>
