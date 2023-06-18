import api from '../../api/handleCall'
import { ref, readonly } from 'vue';

export function useCategories(){
    const results = ref(undefined);
    const error = ref(undefined);

    const getAllCategories = () =>{
        const basePath = process.env.VUE_APP_API_BASE
    
        return  api.get(`${basePath}/categories`)
        .then(response => results.value = response)
        .catch(err => error.value = err)
    }

    return {
        getAllCategories,
        results: readonly(results),
        error,
    };
}