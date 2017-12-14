import Vue from 'vue'
import Router from 'vue-router'
import SpellBook from '@/components/SpellBook'
import SpellsList from '@/components/SpellsList'
import Spell from '@/components/Spell'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: SpellsList
  }, {
    path: '/spell/:name',
    component: Spell
  }, {
    path: '/book',
    component: SpellBook
  }]
})
