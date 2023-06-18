<template lang="pug">
.home
  .container(v-if="showPosts")
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
  .container(v-else)
    section.section
      app-empty-case(:caseType="!serviceError && !loading ? 'empty' : 'error'")
</template>

<script>
import AppMixinPostsServices from '@/mixins/services/posts'
import AppNavCategories from '@/components/molecules/app-nav-categories'
import AppPosts from '@/components/cells/app-posts.vue'
import AppCardSkeleton from '@/components/molecules/app-card-skeleton.vue'
import AppEmptyCase from '@/components/cells/app-empty-case.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'app-view-home',
  components: {
    AppNavCategories,
    AppPosts,
    AppCardSkeleton,
    AppEmptyCase
  },
  mixins: [ AppMixinPostsServices],
  data(){
      return{
          posts: [],
          loading: false,
          serviceError: false
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
      },
      showPosts(){
        return this.loading && !this.serviceError || this.posts.length > 0
      }
      
  },
  methods: {
    getPosts(){
      this.loading = true

      this.getAllPosts()
          .then(response => {
            this.posts = response.data
            this.$store.commit('setPosts', this.posts)
            
          })
          .catch(() => {
            this.serviceError = true
          })
          .finally(() => this.loading = false)
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
