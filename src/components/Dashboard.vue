<template>
<div id="app"> 
  <div class="dashboard container">
   <h1 class="page-header">New Article</h1>
  </div>

  <form v-on:submit="addArticle()">
    <label for="">Insert title</label>
    <br />
    <input type="text" v-model="newArticle.title" >
    <br />
    <label for="">Insert content</label>
    <br />
    <input type="text" v-model="newArticle.content">
    <br />
    <input type="submit" value="Submit">
  </form>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
    articles: [],
    newArticle: {},
    }
  },
  methods: {
    addArticle(){
      console.log('added')
      this.articles.push({
        title: this.newArticle.title,
        content: this.newArticle.content,
        status: false
      });
    }
  }
}
</script>

<style>

</style>
