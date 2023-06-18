import api from '../../api/handleCall'


export default {
    name: 'app-mixin-posts',
    methods: {
        getAllPosts(){
            const basePath = process.env.VUE_APP_API_BASE

            return  api.get(`${basePath}/posts/?populate=*`)
            .then(response => response)
        },
        getPostById(id){
            const basePath = process.env.VUE_APP_API_BASE

            return  api.get(`${basePath}/posts/${id}?populate=*`)
            .then(response => response)
        },
        getPostByCat(id){
            const basePath = process.env.VUE_APP_API_BASE

            return  api.get(`${basePath}/posts/?populate=*`)
            .then(response => {
                const filteredPosts = response.data.filter(post => post.attributes.categories.data.some(cat => cat.id == id))
                return filteredPosts
            })
        }
    }
}