<template>
  <div v-if="GStore.event">
    <h1>{{ GStore.event.title }}</h1>
    <div class="nav">
      <router-link class="nav-item" :to="{ name: 'EventDetails' }"
        >Details</router-link
      >
      |
      <router-link class="nav-item" :to="{ name: 'EventRegister' }"
        >Register</router-link
      >
      |
      <router-link class="nav-item" :to="{ name: 'EventEdit' }"
        >Edit</router-link
      >
    </div>
    <router-view :event="GStore.event" />
  </div>
</template>

<script>
export default {
  inject: ["GStore"],
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.nav {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.nav-item {
  padding: 0 0.5rem;
}
</style>
