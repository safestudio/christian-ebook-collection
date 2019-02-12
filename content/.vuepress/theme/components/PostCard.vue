<template>
  <div class="card">
    <img v-if="postCoverImage" :src="$withBase(postCoverImage)" class="card-img-top" alt="">
    <div class="card-body">
      <h3 class="card-title">
        <router-link :to="post.path">{{post.frontmatter.title}}</router-link>
      </h3>
      <p class="card-text">{{post.frontmatter.description}}</p>
      <p class="card-text">{{post.frontmatter.author}}</p>
    </div>
    <div class="card-body">
      <tag v-for="tag in post.frontmatter.tags"
        :key="tag"
        :slug="tag">
        {{tag}}
      </tag>
    </div>
  </div>
</template>

<script>
import Tag from './Tag';

export default {
  name: 'post-card',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: { Tag },
  computed: {
    postCoverImage() {
      return this.post.frontmatter.coverImage;
    }
  }
};
</script>
