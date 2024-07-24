<template>
  <div class="create_post">
    <form action="" @submit.prevent>
      <p>
        <my-input type="text" placeholder="Название" class="input" v-model="title"></my-input>
      </p>
      <p>
        <my-input type="text" placeholder="Описание" class="input" v-model="body"></my-input>
      </p>
      <my-buttons type="submit" class="custom_btn" @click="createPost">Создать</my-buttons>
    </form>
  </div>
</template>

<script>
import MyButtons from "./UI/MyButtons.vue";
import MyInput from "./UI/MyInput.vue";

export default {
  name: "PostForm",
  components: {
    MyButtons, MyInput
  },
  data() {
    return {
      title: "",
      body: "",
    }
  },
  methods: {
    rand() {
      return Math.floor(Math.random() * (100000 - 5 + 1)) + 5
    },
    createPost() {
      this.$emit("createPost", {id: this.rand(), title: this.title, body: this.body})
      this.title = "";
      this.body = "";
    }
  }
}
</script>

<style scoped>
.create_post {
  display: flex;
  flex-direction: column;
}

.create_post * > :not(:last-child) {
  margin-bottom: 15px;
}


.input {
  width: 100%;
  height: 50px;
  border: 1px solid red;
  padding-left: 10px;
  box-sizing: border-box;
}

.custom_btn {
  margin-left: auto;
  margin-right: 0;
}
</style>