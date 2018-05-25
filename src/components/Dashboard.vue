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
      <div class="card mb-3" v-for="post in posts" :key="post.index">
        <div class="card-body"> 
          <span v-show="!inEditMode"></span><i v-on:click="clicked" class="fa fa-edit"></i>
           <p>Title: {{post.title}}</p> 
           <input type="text" v-show="inEditMode" v-model="post.title" v-on:keyup.enter="saved">
            <br>
          <span v-show="!inEditMode">{{post.content}}</span>
          <br /> 
          <textarea v-show="inEditMode" v-model="post.content" v-on:keyup.enter="saved" cols="30" rows="5" class="form-control" placeholder="Enter your content" type="text" ></textarea>
          <br>
          <p>Status: <b v-text="post.status"></b> </p> 
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
      inEditMode: false,
      posts: [],
      title: "",
      content: "",
      status: false
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    addPost() {
      const data = {
        title: this.title,
        content: this.content,
        status: this.status
      };
      axios.post("http://localhost:3000/api/Posts", data).then(response => {
        console.log(response);
        this.getPosts();
        this.clearInput();
      });
    },
    clearInput() {
      (this.title = ""), (this.content = "");
    },
    getPosts() {
      axios.get("http://localhost:3000/api/Posts").then(response => {
        this.posts = response.data;
        console.log(this.posts);
        this.posts.reverse();
      });
    },
    clicked() {
      this.inEditMode = true;
    },
    saved() {
      this.inEditMode = false;
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}

.fa-edit {
  position: relative;
  left: 490px;
}

.card-body > input{
  width: 100%;
}
</style>
