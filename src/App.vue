<script>
export default {
  inject: ["GStore"],
};
</script>

<template>
  <div class="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>

  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'EventList' }">Events</RouterLink>
        <RouterLink :to="{ name: 'About' }">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  nav {
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}

@keyframes greenfade {
  from {
    background: hsla(160, 100%, 37%, 1);
  }
  to {
    background: transparent;
  }
}

.flashMessage {
  animation-name: greenfade;
  animation-duration: 3s;
}
</style>
