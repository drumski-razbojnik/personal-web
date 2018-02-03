<template>
  <div id="app">
    <page-header/>
    <main class="content">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './static/_variables.scss';
@import './static/style.scss';

#app {
   display:flex;
   flex-wrap: wrap;

   // @media screen and (max-width: $break-small) {
   //    flex-direction: column;
   // }

   // @media screen and (min-width: $break-large) {
   //    flex-direction: row;
   // }
}
</style>
