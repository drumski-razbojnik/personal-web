<template>
   <div>
      <section class="cv">
         <header class="cv-basic-info">

         </header>
         <nav class="cv-nav">

         </nav>

         <article class="cv-content">
            <section class="jobs">
               <job v-for="i in 1" :key="i"></job>
            </section>
            <section class="projects">
               <!-- <project v-for="i in 2" :key="i"></project> -->
            </section>
         </article>
      </section>
   </div>
</template>

<script>
import job from './job'

export default {
   data() {
      return {

      }
   },
   components: {
      job,
   }
}
</script>

<style lang="scss" scoped>
@import './static/_variables.scss';

$edge-spacing: 3.5rem;

.cv{
   // padding:$edge-spacing;

   // @media screen and (max-width:$break-small) {
   //    flex:1 1 100%;
   // }

   // @media screen and (min-width:$break-large) {
   //    flex:1 1 85%;
   // }
}

</style>


