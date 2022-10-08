<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
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
    <router-view :event="event" />
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
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
