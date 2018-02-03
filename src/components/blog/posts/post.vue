<template>
  <section class="post">
    <header class="post-header" />
    <section class="post-content">
      <h1 class="large title">{{ post.title }}</h1>
      <p class="summary">{{ post.summary }}</p>
    </section>
    <footer class="post-footer" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: 'Scenario 12',
        summary: 'Scenario with Drei products lorem ipsum dolor sit by Hrvoje Fadiga. Longer, a bit longer. Yet not too long enough...',
      },
      class: 'hovered'
    }
  },
  methods: {
    hovered() {
      // console.log('Hovered');
    }
  }
}
</script>

<style lang="scss" scoped>
@import './static/_variables.scss';

.post{
   flex:1 0 30%;
   margin-top:-1px;
   padding:3.5rem;
   background-color:#fff;
   border:1px solid #ededed;

   &:hover{
      cursor: pointer;
      background-color:#fcfcfc;
   }

   &.promoted{
      flex:2 0 30%;
      background-color:#fafafa;
   }

   &:nth-child(1n){
      border-right: 0;
   }
}

.post-content{
   .title{
      line-height:2.75rem;
      margin:1rem 0;
   }

   .summary{
      font-size:1.4rem;
      font-weight: 400;
      margin:0;
   }
}

.post-header{
   .category{
      display: flex;
      line-height:3rem;

      > div{
         flex-direction:column;
         justify-content: flex-start;
      }

      .photo{
         flex-grow:2;
         flex-shrink:2;
      }

      .name{
         flex-grow:8;
         flex-shrink:4;
      }
   }
}
</style>

