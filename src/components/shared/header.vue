<template>
   <header class="header">
      <figure class="photo">
         <img src="" />
      </figure>
   </header>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
@import './static/_variables.scss';

.header{
   background: #2f3644;
   bottom: 0;
   color: #fff;
   left: 0;
   top:0;

   @media screen and (max-width: $break-large) {
      flex:1 0 100%;
      height:40px;
      padding:0;
    }

    @media screen and (min-width: $break-large) {
      flex:1 0 20%;
      padding:3.5rem 2.5rem;
    }

   .photo{
      border-radius: 50%;  
      display:block;
      margin:0 auto;
      overflow: hidden;
   }
}
</style>



