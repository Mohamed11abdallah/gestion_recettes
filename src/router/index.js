import { createRouter, createWebHistory } from 'vue-router'
import Introduction from '../components/Introduction.vue'
import RecipeList from '../components/RecipeList.vue'
import RecipeForm from '../components/RecipeForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: RecipeList
  },
  {
    path: '/add',
    name: 'AddRecipe',
    component: RecipeForm
  },
  {
    path: '/edit/:index',
    name: 'EditRecipe',
    component: RecipeForm,
    props: true
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
