<template>
<div class="dashboard"> 
  <div class="dashboard container">
   <h1 class="page-header">New Article</h1>
  </div>
  <div class="container my-5">
  <div class="row justify-content-center">
    <div class="col-6">
      <div class="card mb-6">
        <div class="card-body">
          <div class="form-group mb-3">
            <input type="text" name="" id="" class="form-control" placeholder="Enter title" v-model="title">
             </div>
              <div class="form-group mb-3">
             <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="Enter your content" v-model="content"></textarea>
          </div>
          <button class="btn btn-primary" v-on:click="addPost">Add Post</button>
        </div>
      </div>
    </div>
  </div>
  <br>
  <div class="row justify-content-center"> 
  <div class="col-6 mb-3"> 
    <div class="form">
      <div class="card mb-3" v-for="post in posts">
        <div class="card-body"> 
        <h3>Title: {{post.title}}</h3>
        <p v-text="post.content"></p>
        </div>
      </div>
    </div>
  </div>
 </div>
</div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "dashboard",
  data() {
    return {
      posts: [],
      title: "",
      content: ""
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    addPost() {
      const data = {
        title: this.title,
        content: this.content
      };
      axios.post("http://localhost:3000/api/Posts", data).then(response => {
        console.log(response);
        this.getPosts();
        this.clearInput();
      });
    },
    clearInput() {
      this.title = "",
      this.content = "";
    },
    getPosts() {
      axios.get("http://localhost:3000/api/Posts").then(response => {
        this.posts = response.data;
        console.log(this.posts);
        this.posts.reverse();
      });
    }
  }
};
</script>

<style>
h1{
  text-align: center;
}
</style>
