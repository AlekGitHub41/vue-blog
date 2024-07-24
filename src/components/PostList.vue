<template>
  <div class="all_posts">
    <div class="post" v-for="post in posts" v-if="this.posts.length > 0">
      <div class="post_content">
        <div class="post_title"><strong>Название:</strong> {{ post.title }}</div>
        <div class="post_body"><strong>Описание:</strong> {{ post.body }}</div>
      </div>
      <my-buttons class="cast_btn" @click="delPost(post.id)">удалить</my-buttons>
    </div>
    <div v-else>
      <h2 style="color: red;">Список постов пуст</h2>
    </div>
  </div>
</template>

<script>
import MyButtons from "./UI/MyButtons.vue";

export default {
  components: {
    MyButtons
  },
  name: "PostList",
  props: {
    posts: {
      type: Array,
      required: true,
      default: []
    },
    search: {
      type: String,
      default: "",
    }
  },
  methods: {
    delPost(id) {
      console.log(this.posts)
      this.$emit('delPost', id)
    },
  },
}
</script>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border: 1px solid red;
  padding: 0 15px 0 0;
  box-sizing: border-box;
}

.post_content div {
  margin-bottom: 10px;
}

.all_posts {
  margin-top: 20px;
}

.cast_btn {
}
</style>