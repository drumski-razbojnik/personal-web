<template>
  <div class="page">
    <div class="post-categories">
      <post-category v-for="i in 6" :key="i" />
    </div>
    <div class="posts">
      <post v-for="i in 1" :key="i" />
      <post class="promoted" v-for="i in 1" :key="i" />
      <post v-for="i in 2" :key="i" />
    </div>
  </div>
</template>

<script>
import post from './post'
import postCategory from './post-category'

export default {
  data() {
    return {

    }
  },
  components: {
    'post' :post,
    'post-category': postCategory
  }
}
</script>

<style lang="scss" scoped>
.post-categories{
   display: flex;
   flex:1 0 20%;
   flex-wrap: wrap;
   order: 1;
}

.posts{
   display:flex;
   display: flex;
   flex:1 0 80%;
   flex-wrap: wrap;
   order:0;
}
</style>