import api from '../../api/handleCall'


export default {
    name: 'app-mixin-categories',
    methods: {
        getAllCategories(){
            return new Promise((resolve, reject) => {

                const basePath = process.env.VUE_APP_API_BASE

                return  api.get(`${basePath}/categories`)
                .then(response => resolve(response))
                .catch(err => reject(err))
            })
        }
    }
}