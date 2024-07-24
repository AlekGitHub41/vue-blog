import axios from "axios";

const postsStore = {
    namespaced: true,
    state: () => ({
        posts: [],
        title: "",
        body: "",
        load: false,
        for_select: [
            {name: "title", value: "По названию"},
            {name: "body", value: "По контенту"},
        ],
        page: 1,
        limit: 10,
        totalCount: 0,
    }),
    mutations: {
        postCreate(state, data) {
            state.show_dialog = !this.show_dialog
            state.posts.push(data);
        },
        delPost(state, id) {
            state.posts.forEach((item, index) => {
                if (item.id === id) {
                    state.posts.splice(index, 1)
                }
            })
        },
        change_(state, data) {
            if (data === "title") {
                state.posts.sort((a, b) => a.title.localeCompare(b.title));
            } else {
                state.posts.sort((a, b) => a.body.localeCompare(b.body));
            }
        },
        // searchPosts(state, data) {
        //     if (state.posts.length > 0) {
        //         return state.posts.filter(item => {
        //             return item.title.includes(data)
        //         })
        //     } else {
        //         return state.posts
        //     }
        // },
    },
    actions: {
        async fetchPosts({commit, state}) {
            state.load = true;
            state.page += 1;
            let res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    _page: state.page,
                    _limit: state.limit,
                }
            });
            state.totalCount = Math.ceil(res.headers["x-total-count"] / this.limit);
            state.posts = [...state.posts, ...res.data];
            console.log(state.posts)
        },
    },
    getters: {
        searchPosts: (state) => (data) => {
            if (state.posts.length > 0) {
                return state.posts.filter(item => {
                    return item.title.includes(data);
                });
            } else {
                return state.posts;
            }
        }
    },
}
export default postsStore;