<template lang="pug">
.app-categories(v-if="categories")
    h2.app-categories__title Buscar por Categorías
    div
        app-tag(
        v-for="cat in categories"
        :key="cat.id"
        :text="cat.attributes.name"
        :class="'app-tag--clickable'"
        @clicked="navigate(cat)"
        )
</template>

<script>
import AppMixinServiceCategories from '@/mixins/services/categories'
import AppTag from '@/components/atoms/app-tag'
import { mapGetters } from 'vuex'
export default {
    name: 'app-nav-categories',
    mixins: [AppMixinServiceCategories],
    components: {
        AppTag
    },
    computed: {
        ...mapGetters({
            storedCategories: 'getCategories'
        })
    },
    data(){
        return {
            categories: undefined
        }
    },
    methods: {
        navigate(category){
            const catName = category.attributes.name
            const slug = catName.replace(/[^\w\s]/gi, '').split(' ').join('_').toLowerCase()
            this.$store.commit('setSelectedCategory', category)
            this.$router.push({name: 'Category', params: {slug: slug}, query: { catId: category.id } })
        },
        getCategories(){
            this.getAllCategories()
                .then(response => {
                    this.categories = response.data
                    this.$store.commit('setCategories', this.categories)
                })
                .catch(err => console.error(err))
        },
        configComponent(){
            if(!this.storedCategories){
                this.getCategories()
            }
            else{
                this.categories = this.storedCategories
            }
        }
    },
    created(){
        this.configComponent()
    }
}
</script>

<style lang="scss">
    .app-categories{
        // max-width: 350px;
        overflow-x: auto;
        // padding-top: 1rem;
        padding-bottom: 1rem;
        // margin-left: auto;
        // text-align: right;
        position: sticky;
        top: 0;

        &__title{
            margin-bottom: 15px;
        }

        @media (min-width: map-get($medias, 'lg')){

        }
    }
</style>