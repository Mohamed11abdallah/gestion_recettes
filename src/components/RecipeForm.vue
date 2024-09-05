<template>
  <div class="container mt-5">
    <form @submit.prevent="onSubmit" class="form-card p-4">
      <h2 class="text-center mb-4">Ajouter une recette</h2>
      <div class="mb-3">
        <label for="title" class="form-label">Titre</label>
        <input type="text" id="title" v-model="recipe.title" class="form-control form-control-lg" />
      </div>
      <div class="mb-3">
        <label for="ingredients" class="form-label">Ingrédients</label>
        <textarea id="ingredients" v-model="recipe.ingredients" class="form-control form-control-lg" rows="5"></textarea>
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">Type</label>
        <select id="type" v-model="recipe.type" class="form-select form-select-lg">
          <option>Entrée</option>
          <option>Plat</option>
          <option>Dessert</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary btn-lg w-100">Envoyer</button>
    </form>
  </div>
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

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}

.form-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-label {
  font-weight: 500;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}
</style>

