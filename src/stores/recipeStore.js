import { defineStore } from 'pinia'

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: []
  }),
  actions: {
    addRecipe(recipe) {
      this.recipes.push(recipe)
    },
    updateRecipe(index, updatedRecipe) {
      this.recipes[index] = updatedRecipe
    },
    deleteRecipe(index) {
      this.recipes.splice(index, 1)
    }
  }
})
