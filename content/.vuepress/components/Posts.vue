<template>
  <div class="container">
    <div class="posts" v-if="filteredPosts.length">
      <article class="post-card" v-for="post in filteredPosts" :key="post.key">
        <img class="post-image" :src="post.frontmatter.cover" />
        <div class="post-content">
          <h1 class="post-title"><a :href="post.frontmatter.permalink">{{ post.frontmatter.title }}</a></h1>
          <div class="post-author">By {{ post.frontmatter.author }}</div>
          <div class="post-tags">
            <span class="post-tag" v-for="tag in post.frontmatter.tags"><a href="#">{{ tag }}</a></span>
          </div>
          <p class="post-description">{{ post.frontmatter.description }}</p>
          <p class="read-more">
            <a :href="post.frontmatter.permalink">Read More</a>
          </p>
        </div>
      </article>
    </div>
    <ul class="pagination">
      <li class="page-item page-prev" v-show="page > 1">
        <router-link :to="'?page=' + (parseInt(page) - 1)">Newer Posts</router-link>
      </li>
      <li class="page-item page-next" v-show="posts.length > page * limit">
        <router-link :to="'?page=' + (parseInt(page) + 1)">Older Posts</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    postType: {
      type: String,
      default: 'post'
    }
  },
  data() {
    return {
      limit: 6,
      page: this.$route.query.page || 1
    };
  },

  computed: {
    posts() {
      return this.$site.pages
        .filter(item => {
          return item.frontmatter.type === this.postType && item.path != "/";
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
    },
    filteredPosts() {
      let offset = (this.page - 1) * this.limit;
      return this.posts.slice(offset, offset + this.limit);
    }
  },

  watch: {
    $route(to) {
      this.page = to.query.page || 1;
    }
  }
};
</script>
<style lang="stylus">
$color_white = #fff
$color_prime = #006df0
$color_orange = #ff5900
$color_grey = #e2e2e2
$color_grey_dark = #a2a2a2
.post-card
  display: flex
  flex-direction: row
  margin: 1rem auto
  box-shadow: 0 3px 7px -1px rgba(black, 0.1)
  margin-bottom: 1.6%
  background: $color_white
  line-height: 1.4
  font-family: sans-serif
  overflow: hidden
  z-index: 0
  a
    color: inherit
    &:hover
      color: $color_prime
  .post-image
    width: 40%
    background-size: cover
    background-position: top
    transition: transform .2s
  .post-content
    margin auto
    transition: left .2s
    background: rgba(black, 0.6)
    padding: 10px
    width: 100%
    font-size: .9rem
    .post-tags
      .post-tag
        display: inline-block
        padding 2px 5px
        border: 2px solid $color_prime
        background-color: $color_prime
        color: $color_white
        margin-top: 2px
        margin-right: 3px
        margin-bottom: 1px
        &:hover
          border-color: $color_orange
          background-color: $color_orange
        & a:hover
          color: $color_white
          text-decoration none
  .post-content
    padding: 1rem
    background: $color_white
    position: relative
    z-index: 1
    h1,
    h2
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    h1
      line-height: 1
      margin: 0
      font-size: 1.7rem
    h2
      font-size: 1rem
      font-weight: 300
      text-transform: uppercase
      color: $color_grey_dark
      margin-top: 5px
    .read-more
      text-align: right
      a
        color: $color_prime
        display: inline-block
        position: relative
        padding 5px 10px
        border: 2px solid $color_prime
        &:hover
          background-color: $color_orange
          border-color: $color_orange
          color: $color_white
          text-decoration none
  p
    position: relative
    margin: 1rem 0 0
    &:first-of-type
      margin-top: 1.25rem
      &:before
        content: ""
        position: absolute
        height: 5px
        background: $color_prime
        width: 35px
        top: -0.75rem
        border-radius: 3px
  &:hover
    .details
      left: 0%
  @media (max-width: 799px)
    flex-direction: column
    max-width: 450px
    .post-image
      width: 100%
    .post-content
      width auto
      &:before
        transform: skewX(-3deg)
        content: ""
        background: #fff
        width: 30px
        z-index: -1
</style>
