<template>
  <nav class="navbar">

    <div class="nav-container">
      <router-link to="/introducao">Introdução</router-link>
      <router-link to="/oque5g">O que é 5G</router-link>
      <router-link to="/aplicacoes">Aplicações</router-link>
      <router-link to="/beneficios">Benefícios</router-link>
      <router-link to="/seguranca">Segurança</router-link>
      <router-link to="/conclusao">Conclusão</router-link>
      <router-link to="/referencias">Referencias</router-link>
      <router-link to="/participantes">Participantes</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
.navbar {
  background-color: #0056b3;
  padding: 15px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.nav-container {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
a {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.2s;
}
a:hover {
  color: #d1ecff;
}
.router-link-exact-active {
  border-bottom: 2px solid white;
}
</style>
