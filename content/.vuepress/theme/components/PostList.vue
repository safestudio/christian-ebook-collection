<template>
  <div class="container pt-5" v-if="posts.length">
    <div class="row pt-5">
      <div class="post col-sm-6 col-md-4" v-for="(post,index) in posts" :key="index">
        <PostCard :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from '../components/PostCard.vue'

export default {
  props: ["page"],
  components: { PostCard },
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
        });
      return posts;
    }
  }
};
</script>
