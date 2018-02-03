<template>
   <article class="project">
      <header class="project-header">
         <h1 class="project-name small">{{project.name}}</h1>
         <h2 class="project-duration x-small">{{project.date.from}} - {{project.date.to}}</h2>
         <!-- <div class="project-technologies">
            <span v-bind:href="technology.link" class=" project-technology" v-for="(technology,index) in project.technologies" :key="technology.name">
               {{technology.name}}
            </span> -->
         </div>
      </header>
      <div class="project-content">
         <p>{{project.summary}}</p>
         <figure>
            <img src="http://via.placeholder.com/1650x768" />
         </figure>
         <p>{{project.summary}}</p>
      </div>
   </article>
</template>

<script>
export default {
   data() {
      return {
         project: {
            name: 'Project',
            date: {
               from: "12.1.2017",
               to: "12.3.2017"
            },
            technologies: [{
               name: 'sql',
               link: 'http://www.sql.com',
               icon: 'bla'
            },
            {
               name: 'vue.js',
               link: 'https://vuejs.org/',
               icon: 'bla2'
            }],
            summary: 'Scenario with Drei Scenario with Drei Morbi consequat venenatis tortor, sed commodo est pulvinar sit amet. Aenean ex tortor, volutpat vitae faucibus quis, iaculis et urna. Pellentesque iaculis commodo augue, nec pellentesque metus sodales ut. Scenario with Drei products lorem ipsum dolor sit by Hrvoje Fadiga. Longer, a bit longer. Yet not too long enough...',
         },
      }
   },
   methods: {
   }
}
</script>

<style lang="scss" scoped>
@import './static/_variables.scss';

$contentSpacing:3.5rem;
$negativeContentSpacing:-3.5rem;

.project{
   background-color: #fff;
   border:1px solid #cecece;
   flex:1 0 50%;
   max-width: 50%;
   margin-top:-1px;
   margin-left:-1px;
   padding:$contentSpacing;

   &.active{
      flex:1 0 100%;
      max-width: 100%;
   }
}

.project-name{
   margin:0 0 0.5rem 0;
}

.project-duration{
   margin:0 0 0.5rem 0;
}

.project-technologies{
   font-size:1.2rem;

   .project-technology{

   }
}

.project-content{
      figure{
      margin:0;

      img{
         width:100%;
      }
   }
}

</style>
