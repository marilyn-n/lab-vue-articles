<template>
<div class="articles"> 
  <div class="articles container">
    <h1 class="page-header">Latest Articles</h1>
  </div>

  <div class="myArticle">
    <h2>Title: </h2>
    <p>Content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci accusamus reprehenderit aperiam commodi officia asperiores sit officiis assumenda architecto. Culpa iure eaque soluta architecto quod incidunt dicta quisquam ipsam?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae corporis similique fugit saepe officia! Excepturi, quasi? Nobis ad esse fugit id harum, necessitatibus eum, eveniet amet architecto, aperiam nihil quis!
    </p>
    <button>edit</button>
    <button class="toggle">post</button>
    <span>draft</span>
  </div>
</div>
   
</template>

<script>
export default {
  name: "articles",
  components: {
  },
  data() {
    return {

    };
  }
};
</script>

<style>
.myArticle {
  box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 700px;
  height: 300px;
  padding: 1em;
  background-color: rgba(255, 255, 255, 1);
}
p {
  padding: 1em;
}
</style>
