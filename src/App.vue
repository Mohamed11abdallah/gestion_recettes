<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <!-- <a class="navbar-brand" href="#">Accueil</a> -->
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/introduction" class="nav-link nav-link-custom">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link nav-link-custom">Liste des Recettes</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link nav-link-custom">Ajouter une Recette</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('App loaded')
})
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

.navbar {
  border-radius: 8px;
}

.navbar-light .navbar-nav .nav-link-custom {
  color: #333;
  font-weight: 500;
  padding: 10px 15px;
  transition: background-color 0.3s, color 0.3s;
}

.navbar-light .navbar-nav .nav-link-custom:hover {
  background-color: #007bff;
  color: #ffffff;
  border-radius: 4px;
}

.navbar-light .navbar-brand {
  font-weight: 700;
  color: #007bff;
}

.navbar-light .navbar-brand:hover {
  color: #0056b3;
}

.shadow-sm {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
