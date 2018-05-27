<template>
<div class='dashboard'>
    <div class='container my-5'>
        <h1 class='page-header'>New Article</h1>
        
     <section class='row justify-content-center'>
         <div class='col-6'>
             <div class='card'>
                 <div class='card-body'>
                     <form class='form-group mb-3'>
                         <input type='text' class='form-control' placeholder='Enter title' v-model='title'>
                         <br />
                         <textarea cols='30' rows='10' class='form-control' placeholder='Enter your content' v-model='content'></textarea>
                     </form>
                     <button class='btn btn-primary' v-on:click='addPost'>Add Post</button>
                 </div>
             </div>
         </div>
     </section>

     <br />

     <section class='row justify-content-center'>
         <div class='col-6'>
             <div class='card mb-3' v-for='post in posts' :key='post.index'>
                <div class='card-body'>
                  <div>
                    <span><i v-on:click='deletePost(post)' class="fa fa-trash"></i></span>
                      <span><i v-on:click='clicked' class='fa fa-edit'></i></span>
                    </div>

                   <!-- edit mode -->
                   <form>
                     <span v-show='!inEditMode'>
			                <h4>{{post.title}}</h4>
		                  </span>
                       <input type='text' v-show='inEditMode' v-model='post.title' v-on:keyup.enter='saved'>
                       <br />
                       <p v-show='!inEditMode'>{{post.content}}</p>
                       <br />
                       <textarea v-show='inEditMode' v-model='post.content' v-on:keyup.enter='saved' cols='30' rows="5" class='form-control' placeholder='Enter your content' type="text">
                       </textarea>
                       <br />
                       <label for=''>Status: {{post.status}}</label>
                       <select v-model='post.status' v-show='inEditMode' v-on:keyup.enter='saved'>
                           <option v-for='option in statusOptions' v-bind:key="option">{{option}}</option>
                       </select>
                   </form>
                   <!-- edit mode -->

                 </div>
             </div>
         </div>
     </section>
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
      status: "draft",
      statusOptions: ["Public", "Private"]
    };
  },

  mounted() {
    this.getPosts();
  },

  methods: {
    getPosts() {
      axios.get("http://localhost:3000/api/Posts").then(response => {
        this.posts = response.data;
        console.log(this.posts);
        this.posts.reverse();
      });
    },

    addPost() {
      const data = {
        title: this.title,
        content: this.content,
        status: this.status
        // statusOptions: this.statusOptions
      };

      axios.post("http://localhost:3000/api/Posts", data).then(response => {
        console.log(response);
        this.getPosts();
        this.clearInput();
      });
    },

    clicked() {
      this.inEditMode = true;
    },

    saved() {
      this.inEditMode = false;
    },

    clearInput() {
      (this.title = ""), (this.content = "");
    },

    deletePost(post) {
      this.posts.splice(post, 1);
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
  left: 485px;
}

.fa-trash {
  position: relative;
  left: 485px;
}

.card-body > input {
  width: 100%;
  padding-right: 1em;
}

input:nth-child(2){
  width: 100%;
}
</style>
