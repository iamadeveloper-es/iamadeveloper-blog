import api from '../../api/handleCall'


export default {
    name: 'app-mixin-categories',
    methods: {
        getAllCategories(){
            const basePath = process.env.VUE_APP_API_BASE

            return  api.get(`${basePath}/categories`)
            .then(response => response)
        }
    }
}