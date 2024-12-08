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
  background-color: black;
  padding: 10px;
}

nav a {
  color: neon green;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
  color: white;
}
</style>

