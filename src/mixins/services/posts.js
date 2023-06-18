import api from '../../api/handleCall'


export default {
    name: 'app-mixin-posts',
    methods: {
        getAllPosts(){
            return new Promise((resolve, reject) => {

                const basePath = process.env.VUE_APP_API_BASE

                return  api.get(`${basePath}/posts/?populate=*`)
                .then(response => resolve(response))
                .catch(err => reject(err))
            })

        },
        getPostById(id){
            return new Promise((resolve, reject) => {

                const basePath = process.env.VUE_APP_API_BASE

                return  api.get(`${basePath}/posts/${id}?populate=*`)
                .then(response => resolve(response))
                .catch(err => reject(err))
            })
        },
        getPostByCat(id){
            return new Promise((resolve, reject) => {

                const basePath = process.env.VUE_APP_API_BASE

                return  api.get(`${basePath}/posts/?populate=*`)
                .then(response => {
                    const filteredPosts = response.data.filter(post => post.attributes.categories.data.some(cat => cat.id == id))
                    return resolve(filteredPosts)
                })
                .catch(err => reject(err))
            })
        }
    }
}