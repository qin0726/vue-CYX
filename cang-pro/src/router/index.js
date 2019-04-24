import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Product from '@/components/Product'
import News from '@/components/News'
import Join from '@/components/Join'
import Skill from '@/components/Skill'
import Detail from '@/components/Detail'
import Not from '@/components/Not'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Index, children:[
        { path:"/", component: Home },
        { path:"product", component: Product, },
        { path:"news", component:News,},
        { path:"join", component: Join},
        { path:"skill", component: Skill},
        { path:"detail/:lid", component: Detail,props:true },
    ]},
    { path: '/*', component:Not }
  ]
})
