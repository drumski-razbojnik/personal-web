<template>
   <div class="page">
      <section class="post">
         <header class="post-header">
            <h1 class="x-large">Scenario 1</h1>
         </header>

         <article class="post-content">
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dapibus lorem, eu elementum enim. Sed egestas nulla in purus pulvinar tristique. Nulla tristique tempor purus eget volutpat. Aenean vulputate est nec neque dapibus convallis non vel augue. Integer interdum, lectus quis tempus dapibus, tellus enim bibendum ante, quis tincidunt nibh ligula non quam. Aliquam posuere, enim aliquet ultricies finibus, massa augue convallis dolor, vel pellentesque velit est eget sem. Nullam eget turpis libero. Proin luctus dolor molestie justo malesuada commodo a at elit. Etiam fermentum suscipit nisi, dictum pharetra lectus accumsan sit amet.
            </p>

            <figure>
               <img src="http://via.placeholder.com/1650x768" />
               <figcaption>Figure 1</figcaption>
            </figure>

            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dapibus lorem, eu elementum enim. Sed egestas nulla in purus pulvinar tristique. Nulla tristique tempor purus eget volutpat. Aenean vulputate est nec neque dapibus convallis non vel augue. Integer interdum, lectus quis tempus dapibus, tellus enim bibendum ante, quis tincidunt nibh ligula non quam. Aliquam posuere, enim aliquet ultricies finibus, massa augue convallis dolor, vel pellentesque velit est eget sem. Nullam eget turpis libero. Proin luctus dolor molestie justo malesuada commodo a at elit. Etiam fermentum suscipit nisi, dictum pharetra lectus accumsan sit amet.
            </p>
            <figure>
               <table class="has-border">
                  <thead>
                     <tr>
                        <th>Scenario</th>
                        <th>Score 2015</th>
                        <th>Score 2017</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>Intel i5 U7850</td>
                        <td>1026,7 points</td>
                        <td>12371 points</td>
                     </tr>
                     <tr>
                        <td>Intel i5 U7850</td>
                        <td>1026,7 points</td>
                        <td>12371 points</td>
                     </tr>
                  </tbody>
               </table>
               <figcaption>Figure 2</figcaption>
            </figure>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dapibus lorem, eu elementum enim. Sed egestas nulla in purus pulvinar tristique. Nulla tristique tempor purus eget volutpat. Aenean vulputate est nec neque dapibus convallis non vel augue. Integer interdum, lectus quis tempus dapibus, tellus enim bibendum ante, quis tincidunt nibh ligula non quam. Aliquam posuere, enim aliquet ultricies finibus, massa augue convallis dolor, vel pellentesque velit est eget sem. Nullam eget turpis libero. Proin luctus dolor molestie justo malesuada commodo a at elit. Etiam fermentum suscipit nisi, dictum pharetra lectus accumsan sit amet.
            </p>

            <pre>
                  <code>
html {
   height: 100%;
}

body {
   height: 100%;   
   overflow: hidden;  
   margin: 0px;  /*removes default style*/
   display: flex;  /*enables flex content for its children*/
   box-sizing: border-box;
}
                  </code>
            </pre>

            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dapibus lorem, eu elementum enim. Sed egestas nulla in purus pulvinar tristique. Nulla tristique tempor purus eget volutpat. Aenean vulputate est nec neque dapibus convallis non vel augue. Integer interdum, lectus quis tempus dapibus, tellus enim bibendum ante, quis tincidunt nibh ligula non quam. Aliquam posuere, enim aliquet ultricies finibus, massa augue convallis dolor, vel pellentesque velit est eget sem. Nullam eget turpis libero. Proin luctus dolor molestie justo malesuada commodo a at elit. Etiam fermentum suscipit nisi, dictum pharetra lectus accumsan sit amet.
            </p>
         </article>

         <footer class="post-footer">

         </footer>
      </section>

      <section class="posts">
         <header class="posts-header">
            <h1>Last scenarios</h1>
         </header>
         <div class="posts-content">
            <sidebar-post v-for="i in 3" :key="i" />
         </div>
      </section>
   </div>
</template>

<script>
import sidebarPost from './sidebar-post-full'

export default {
   data() {
      return {

      }
   },
   components: {
      'sidebar-post': sidebarPost
   }
}
</script>

<style lang="scss" scoped>
@import './static/_variables.scss';

$edge-spacing: 3.5rem;

.post{
   background-color:#fff;
   overflow:hidden;
   padding:$edge-spacing;

   @media screen and (max-width:$break-medium) {
      flex:1 0 100%;
   }

   @media screen and (min-width:$break-large) {
      flex:1 0 80%;
   }
}

.post-header{
   padding-bottom:3rem;
   position: relative;

   &:after{
      background-color:#545e6f;
      content:'';
      height:1px;
      left:0;
      position: absolute;
      bottom:1.75rem;
      width:100%;
   }

   hr{
      margin:1.5rem 0 1.5rem;
   }
}

.post-content{
   p{
      font-size:1.4rem;
      margin:3rem 0;
   }

   figure{

      margin:0 (-$edge-spacing);

      img{
         width:100%;
      }

      table{
        margin: 0 3.5rem;
      }

      figcaption{
         margin:1.5rem 3.5rem;
      }
   }

   pre{
      margin:0 -3.5rem;
      background-color:#545e6f;

      code{
         color:#fff;
         display: block;
         font-size:1.4rem;
         padding: 0 3.5rem;
         width:100%;
      }
   }

   table{
    border-collapse:collapse;

  thead{
    tr{
      background-color:#eaeaea;
    }
  }

    tbody{
      tr{
        &:nth-child(1n+2){
          background-color:#fdfdfd;
        }
      }
    }

    th,td{
      border: 1px solid #f1f1f1;
      padding:0.75rem;
      text-align: center;
    }
    th{
      font-size:1.3rem;
      font-weight: 300;
    }
    td{
      font-size:1.2rem;
    }
   }
}

.posts{
   background-color: #545e6f;
   padding:$edge-spacing;

   @media screen and (max-width:$break-medium) {
      flex:1 0 100%;
   }

   @media screen and (min-width:$break-large) {
      flex:1 0 20%;
   }
}

.posts-header{
   padding-bottom:3rem;
   position: relative;

   h1{
      color:#fff;
   }
}

.posts-content{
   display:flex;
   flex-wrap:wrap;
}
</style>


