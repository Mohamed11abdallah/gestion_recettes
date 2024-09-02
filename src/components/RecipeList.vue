<template>
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
  