import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import cv from '@/components/cv/page'

import blogs from '@/components/blog/posts/page'
import blog from '@/components/blog/post/page'

Vue.use(Router)

export default new Router({
   mode: 'history',
   routes: [
      {
         path: '/',
         name: 'Hello',
         component: Hello
      },
      {
         path: '/cv',
         name: 'curriculum-vitae',
         component: cv
      },
      {
         path: '/blog',
         name: 'blog',
         component: blogs
      },
      {
         path: '/blog/:title/:id',
         component: blog
      }
   ]
})
