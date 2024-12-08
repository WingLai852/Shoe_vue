<template>
  <div id="app">
    <!-- Navigatie toevoegen -->
    <nav>
      <router-link to="/login">Login</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
    </nav>

    <!-- Hier worden de views geladen -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Simpele navigatiestijl */
nav {
  display: flex;
  gap: 10px;
  background-color: #333;
  padding: 10px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
