import {createApp} from 'vue'
import {createStore} from 'vuex'
import postsStore from "./PostsStore.js";


const main_store = createStore({
    modules: {
        postsStore,
    }
})

export default main_store;