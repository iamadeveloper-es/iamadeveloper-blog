export default {
    state: {
        posts: undefined,
        postsByCategory: undefined
    },
    getters: {
        getPostById: (state) => (postId) => {
            return state.posts ? state.posts.find(post => Number(post.id) === Number(postId)) : undefined
        },
        getPosts(state){
            return state.posts
        },
        getPostsByCategory(state){
            return state.postsByCategory
        }
    },
    mutations: {
        setPosts(state, payload){
            state.posts = payload;
        },
        setPostsByCategory(state, payload){
            state.postsByCategory = payload
        }
    },
    actions: {
    }
}