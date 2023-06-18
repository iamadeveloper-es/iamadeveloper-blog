export default {
    state: {
        categories: undefined,
        selectedCategory: undefined
    },
    getters: {
        getCategories(state){
            return state.categories
        },
        getSelectedCategory(state){
            return state.selectedCategory
        }
    },
    mutations: {
        setCategories(state, payload){
            state.categories = payload;
        },
        setSelectedCategory(state, payload){
            state.selectedCategory = payload
        }
    },
    actions: {
    }
}