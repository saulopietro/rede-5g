<template>
  <div id="app">
    <AppNavbar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f8fc;
  color: #333;
}

.main-content {
  max-width: 960px;
  margin: 40px auto;
  padding: 0 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

h2 {
  color: #0056b3;
  margin-bottom: 10px;
}

p {
  line-height: 1.6;
  font-size: 1.05rem;
}
</style>
