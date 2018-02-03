<template>
  <section class="post-category">
    {{ postCategory.name }}
  </section>
</template>

<script>
export default {
  data() {
    return {
      postCategory: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
        name: 'Scenario 1'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post-category{
   background-color:#545e6f;
   color:#fff;
   flex:1 1 20%;
   font-size:1.2rem;
   margin-top:-1px;
   padding:1.5rem;
   text-align: center;

   &:hover{
      cursor: pointer;
   }

   &:nth-child(1n){
      border-left: 0;
   }

   &:nth-child(5n){
      border-right: 0;
   }

   &:last-of-type{
      border-right: 0;
   }
}

.post-category-content{
   display: flex;
   height:2rem;
   position: relative;

   &> div{
      line-height: 2rem;
      position: relative;
      text-align: center;
      top:50%;
      transform:translateY(-50%);
   }

   .title{
      color:#fff;
   }
}
</style>


