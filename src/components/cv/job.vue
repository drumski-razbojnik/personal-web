<template>
   <article class="job">
      <header class="job-header">
         <h1 class="position">{{job.position}}</h1>
         <h2 class="company">{{job.company.name}}, {{job.company.location}}</h2>
         <h3 class="duration">{{job.date.from}} - {{job.date.to}}</h3>
      </header>
      <div class="job-content">
         <p>{{job.summary}}</p>
         <section class="projects">
            <!-- <nav class="projects-menu">
               <div class="menu-item" v-for="project in job.projects" :key="project.name">
                  {{project.shortName}}
               </div>
            </nav> -->
            <div class="projects-content">
               <project class="active"></project>
               <project></project>
               <project></project>
            </div>

         </section>
      </div>
   </article>
</template>

<script>
import project from './project'
export default {
   data() {
      return {
         job: {
            company: {
               name: 'marketmind GmbH',
               location: 'Vienna, Austria',
               link: 'www.marketmind.at'
            },
            position: 'Software developer',
            date: {
               from: "12.1.2017",
               to: "12.3.2017"
            },
            summary: 'Scenario with Drei products lorem ipsum dolor sit by Hrvoje Fadiga. Longer, a bit longer. Yet not too long enough...',
            projects: [{
               name: 'Scenario calculator',
               shortName: 'Main scenario',
               date: {
                  from: "12.1.2017",
                  to: "12.3.2017"
               },
               summary: 'Scenario with Drei products lorem ipsum dolor sit',
               technologies: [{
                  name: 'sql',
                  icon: 'bla'
               },
               {
                  name: 'vue',
                  icon: 'bla2'
               }]
            },
            {
               name: 'Lebua Dashboard',
               shortName: 'Scenario 2',
               date: {
                  from: "12.1.2017",
                  to: "12.3.2017"
               },
               summary: 'Scenario with Drei products lorem ipsum dolor sit',
               technologies: [{
                  name: 'sql',
                  icon: 'bla'
               },
               {
                  name: 'vue',
                  icon: 'bla2'
               }]
            },
            {
               name: 'Holter Dashboard',
               shortName: 'Scenario 3',
               date: {
                  from: "12.1.2017",
                  to: "12.3.2017"
               },
               summary: 'Scenario with Drei products lorem ipsum dolor sit',
               technologies: [{
                  name: 'sql',
                  icon: 'bla'
               },
               {
                  name: 'vue',
                  icon: 'bla2'
               }]
            }]
         },
      }
   },
   methods: {
   },
   components: {
      project
   }
}
</script>

<style lang="scss" scoped>
@import './static/_variables.scss';

.job{
   // padding:3.5rem;
}

.projects-menu{
   background-color:#545e6f;
   display:flex;

   .menu-item{
      // border-bottom:1px solid #222;
      box-sizing: border-box;
      color:#fff;
      flex:1 0 5%;
      font-size:1.4rem;
      padding:1.5rem;
      text-align: center;

      &:hover{   
         background-color:#2f3644;
         cursor: pointer;
         color:#fff;
      }

      &.active{
         background-color:#cacaca;

         &:hover{
            
         }
      }
   }
}

.projects{
   background-color: #545e6f;
   padding:3.5rem;

}

.projects-content{
   display: flex;
   flex-wrap:wrap;
}
</style>
