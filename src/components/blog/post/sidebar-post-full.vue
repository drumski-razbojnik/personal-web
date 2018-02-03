<template>
   <a class="sidebar-post">
      <header class="post-header">
         <h1 class="post-header-title x-small">Scenario 1</h1>
      </header>
      <section class="post-content">
         <p class="x-small">Cras a massa eu tellus interdum consequat. Nam molestie ante dolor, nec imperdiet nisl interdum et. Maecenas eu odio felis. Vestibulum pulvinar ipsum quis orci cursus dignissim. Nulla molestie nec augue quis mattis. </p>
      </section>
   </a>
</template>

<style lang="scss" scoped>
@import './static/_variables.scss';

.sidebar-post{
   background-color:#fff;
   border:1px solid #f5f5f5;
   margin:-1px;
   overflow: hidden;
   transition:background-color 200ms ease-in-out;

   &:hover
   {
      background-color:#f5f5f5;
      cursor: pointer;
   }

   @media screen and (max-width:$break-small) {
      flex:1 0 100%;
   }

   @media screen and (min-width:$break-medium) and (max-width:$break-large) {
      flex:1 0 30%;
   }

   @media screen and (min-width:$break-large) {
      flex:1 0 100%;
   }
}

.post-header{
   margin:3.5rem 3.5rem 0 3.5rem;
}

.post-content{
   margin:0 3.5rem 3.5rem 3.5rem;

   p:last-of-type{
      margin-bottom:0;
   }
}
</style>

