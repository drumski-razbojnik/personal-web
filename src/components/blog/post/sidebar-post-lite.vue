<template>
   <article class="sidebar-post">
      <a class="titlex">Scenario</a>
   </article>
</template>

<style lang="scss" scoped>
@import './static/_variables.scss';

.sidebar-post{
   height:auto;
   @media screen and (max-width:$break-small) {
      display:none
   }

   @media screen and (min-width:$break-large) {
      flex:1 0 100%;
      margin:0.5rem 0;

      &:first-child{
         margin-top:0;
      }

      &:last-child{
         margin-bottom:0;
      }
   }
}
</style>

