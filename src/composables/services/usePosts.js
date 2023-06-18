import api from '../../api/handleCall'
import { ref, readonly } from 'vue';

export function usePosts(){
    const results = ref(undefined);
    const error = ref(undefined);

    const postsByCat = (id) =>{
        const basePath = process.env.VUE_APP_API_BASE
    
        return api.get(`${basePath}/posts/?populate=*`)
        .then(response => {
            results.value = response.data.filter(post => post.attributes.categories.data.some(cat => cat.id == id))
            return results
        })
        .catch(err => error.value = err)
    }

    return {
        postsByCat,
        results: readonly(results),
        error,
    };
}