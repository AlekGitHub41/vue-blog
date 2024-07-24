<template>
  <div class="main">
    <h2 class="title_main_page">Создание поста</h2>
    <my-input class="cast_input" v-model="searchQuery"></my-input>
    <div class="select">
      <div class="btn___">
        <my-buttons @click="this.fetchPosts">Получить посты с сервера</my-buttons>
        <my-buttons @click="show_dialog=!show_dialog">Создать пост</my-buttons>
      </div>
      <my-select v-model:value="for_select" @change_="change_"></my-select>
    </div>
    <my-dialog v-if="show_dialog" @click="show_dialog=!show_dialog">
      <post-form @createPost="createdPost__"></post-form>
    </my-dialog>
    <post-list :posts="this.searchPosts(searchQuery)" :search="searchQuery" @delPost="delPost"></post-list>
    <div class="observer" v-show="this.posts.length>0">
    </div>
  </div>
</template>

<script>
import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import MyDialog from "../components/MyDialog.vue";
import axios from "axios";
import MySelect from "../components/UI/MySelect.vue";
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'

export default {
  name: "PostPage",
  components: {
    PostForm, PostList, MyDialog, MySelect
  },
  data() {
    return {
      show_dialog: false,
      searchQuery: "",
    }
  },
  computed: {
    ...mapState({
      posts: state => state.postsStore.posts,
      searchQuery: state => state.postsStore.searchQuery,
      for_select: state => state.postsStore.for_select,
    }),
    ...mapGetters("postsStore", [
      "searchPosts",
    ]),
  },
  mounted() {
    let options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    let callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        this.fetchPosts();
      }
    };
    let observer = new IntersectionObserver(callback, options);
    observer.observe(document.querySelector(".observer"))
  },
  methods: {
    ...mapMutations("postsStore", [
      "postCreate",
      "delPost",
      "change_",
    ]),
    ...mapActions("postsStore", [
      "fetchPosts"
    ]),
    createdPost__(data) {
      this.postCreate(data);
      this.show_dialog = !this.show_dialog
    }
  },
}
</script>

<style scoped>
.main {
  padding-left: 10px;
  padding-right: 10px;
}

.title_main_page {
  margin-bottom: 15px;
}

.btn___ {
  display: flex;
}

.select {
  display: flex;
  justify-content: space-between;
}

.cast_input {
  height: 35px;
  margin-bottom: 15px;
}

/*.paginate {*/
/*  width: 30%;*/
/*  display: flex;*/
/*  margin: 0 auto;*/
/*  justify-content: space-between;*/
/*}*/

/*.count_page {*/
/*  cursor: pointer;*/
/*  border: 1px solid red;*/
/*  padding: 5px;*/
/*}*/

/*.count_none {*/
/*  cursor: pointer;*/
/*  padding: 5px;*/
/*}*/
</style>