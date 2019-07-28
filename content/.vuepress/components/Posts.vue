<template>
  <div class="container">
    <div class="posts" v-if="filteredPosts.length">
      <article :class="['post-card', post.frontmatter.status ? post.frontmatter.status.toLowerCase() : '']" v-for="post in filteredPosts" :key="post.key">
        <img class="post-image" :src="post.frontmatter.cover" @click="goToURL(post.frontmatter.permalink)" />
        <div class="post-content">
          <div class="post-title">
            <div class="post-status" v-if="post.frontmatter.status">{{ post.frontmatter.status }}</div>
            <a :href="post.frontmatter.permalink">
              <h1>{{ post.frontmatter.title }}</h1>
            </a>
          </div>
          <div class="post-author">By {{ post.frontmatter.author }}</div>
          <div class="post-tags">
            <span class="post-tag" v-for="tag in post.frontmatter.tags"><a href="#">{{ tag }}</a></span>
          </div>
          <p class="post-description">{{ post.frontmatter.description }}</p>
          <div class="post-footer">
            <p class="reading-time">
              {{ post.readingTime.text }}
            </p>
            <p class="read-more">
              <a :href="post.frontmatter.permalink">Read More</a>
            </p>
          </div>
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
  methods: {
    goToURL(url) {
      window.location.href = url;
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
:root
  --color-white #fff
  --color-black #000
  --color-dark #5E5E5E
  --color-grey #e2e2e2
  --color-grey-dark #a2a2a2
  --color-primary #006df0
  --color-secondary #ff5900

.tag
  --tag-color var(--color-primary)
  padding 2px 5px
  display inline-block
  border 2px solid var(--tag-color)
  background-color var(--tag-color)
  color var(--color-white)
.tag-hover
  --tag-hover-color var(--color-secondary)
  &:hover
    border-color var(--tag-hover-color)
    background-color var(--tag-hover-color)
  & a:hover
    color var(--color-white)
    text-decoration none

.post-card
  --card-background-color var(--color-white)
  --element-color var(--color-primary)
  --element-text-color var(--color-white)
  --element-hover-color var(--color-secondary)
  --element-hover-text-color var(--color-white)
  --content-text-color var(--color-black)
  display flex
  flex-direction row
  margin 1rem auto
  box-shadow 0 3px 7px -1px rgba(black, 0.1)
  margin-bottom 1.6%
  background var(--card-background-color)
  line-height 1.4
  font-family sans-serif
  overflow hidden
  z-index 0
  a
    color var(--element-color)
    &:hover
      color var(--element-hover-color)
  .post-image
    cursor pointer
    width 40%
    background-size cover
    background-position top
    transition transform .2s
  .post-content
    font-size .9rem
    margin auto
    padding 1rem
    position relative
    transition left .2s
    width 100%
    z-index 1
    h1,
    h2
      font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    h1
      line-height 1
      margin 0
      font-size 1.7rem
    h2
      font-size 1rem
      font-weight 300
      text-transform uppercase
      margin-top 5px
    .post-title
      display flex
    .post-tags
      .post-tag
        @extend .tag
        @extend .tag-hover
        margin-top 2px
        margin-right 3px
        margin-bottom 1px
        a
          color var(--element-text-color)
    .post-status
      @extend .tag
      margin-right 3px
    .post-footer
      display flex
      justify-content space-between
      .reading-time
        @extend .tag
        min-height 25px
        margin-right 5px
        text-align center
        align-items center
        display: flex
      .read-more
        text-align center
        a
          color var(--element-color)
          display inline-block
          position relative
          padding 5px 10px
          border 2px solid var(--element-color)
          &:hover
            background-color var(--element-hover-color)
            border-color var(--element-hover-color)
            color var(--element-hover-text-color)
            text-decoration none
  p
    position relative
    margin 1rem 0 0
    &first-of-type
      margin-top 1.25rem
      &before
        content ""
        position absolute
        height 5px
        background var(--element-color)
        width 35px
        top -0.75rem
        border-radius 3px
  &:hover
    .details
      left 0%
  @media (max-width 799px)
    flex-direction column
    max-width 450px
    .post-image
      width 100%
    .post-content
      width auto
      &before
        transform skewX(-3deg)
        content ""
        background #fff
        width 30px
        z-index -1

  &.wip
    --card-background-color var(--color-grey)
    --element-color var(--color-dark)
    --element-text-color var(--color-white)
    --element-hover-color var(--color-secondary)
    --element-hover-text-color var(--color-white)
    --content-text-color var(--color-black)
    .post-status
      --tag-color var(--color-black)
      display flex
      align-items center
</style>
