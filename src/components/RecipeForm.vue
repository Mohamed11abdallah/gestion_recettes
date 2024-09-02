<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input type="text" id="title" v-model="recipe.title" class="form-control" />
    </div>
    <div class="mb-3">
      <label for="ingredients" class="form-label">Ingredients</label>
      <textarea id="ingredients" v-model="recipe.ingredients" class="form-control"></textarea>
    </div>
    <div class="mb-3">
      <label for="type" class="form-label">Type</label>
      <select id="type" v-model="recipe.type" class="form-select">
        <option>Entrée</option>
        <option>Plat</option>
        <option>Dessert</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRecipeStore } from '../stores/recipeStore'
import { useRoute, useRouter } from 'vue-router'

const recipeStore = useRecipeStore()
const route = useRoute()
const router = useRouter()

const recipe = ref({ title: '', ingredients: '', type: 'Entrée' })

onMounted(() => {
  if (route.params.index !== undefined) {
    const index = parseInt(route.params.index)
    Object.assign(recipe.value, recipeStore.recipes[index])
  }
})

const onSubmit = () => {
  if (route.params.index !== undefined) {
    const index = parseInt(route.params.index)
    recipeStore.updateRecipe(index, recipe.value)
  } else {
    recipeStore.addRecipe(recipe.value)
  }
  router.push('/')
}
</script>
