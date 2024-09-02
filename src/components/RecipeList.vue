<!-- <template>
    <div>
      <ul class="list-group">
        <li v-for="(recipe, index) in recipes" :key="index" class="list-group-item">
          <h5>{{ recipe.title }}</h5>
          <p>{{ recipe.ingredients }}</p>
          <p><strong>Type:</strong> {{ recipe.type }}</p>
          <button class="btn btn-danger btn-sm" @click="deleteRecipe(index)">Delete</button>
          <router-link :to="{ name: 'EditRecipe', params: { index } }" class="btn btn-secondary btn-sm">
            Edit
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRecipeStore } from '../stores/recipeStore'
  
  const recipeStore = useRecipeStore()
  const recipes = recipeStore.recipes
  
  const deleteRecipe = (index) => {
    recipeStore.deleteRecipe(index)
  }
  </script>
   -->

   <template>
    <div class="container mt-5">
      <ul class="list-group list-group-flush">
        <li v-for="(recipe, index) in recipes" :key="index" class="list-group-item recipe-card mb-3">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <h5 class="mb-1">{{ recipe.title }}</h5>
              <p class="mb-2">{{ recipe.ingredients }}</p>
              <p class="mb-2"><strong>Type:</strong> {{ recipe.type }}</p>
            </div>
            <div class="btn-group">
              <button class="btn btn-danger btn-sm" @click="deleteRecipe(index)">
                Supprimer
              </button>
              <router-link :to="{ name: 'EditRecipe', params: { index } }" class="btn btn-secondary btn-sm ms-2">
                Modifier
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRecipeStore } from '../stores/recipeStore'
  
  const recipeStore = useRecipeStore()
  const recipes = recipeStore.recipes
  
  const deleteRecipe = (index) => {
    recipeStore.deleteRecipe(index)
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: auto;
  }
  
  .recipe-card {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 15px;
  }
  
  .recipe-card h5 {
    font-size: 1.25rem;
    color: #333;
  }
  
  .recipe-card p {
    color: #666;
  }
  
  .btn-group .btn {
    margin: 0;
  }
  
  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  
  .btn-danger:hover {
    background-color: #c82333;
    border-color: #bd2130;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
  }
  
  .btn-secondary:hover {
    background-color: #5a6268;
    border-color: #545b62;
  }
  </style>
  