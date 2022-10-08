<script>
import EventCard from "../components/EventCard.vue";
import EventService from "../services/EventService";

export default {
  name: "EventList",
  components: { EventCard },
  data() {
    return {
      events: null,
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<template>
  <h1>Events For Good</h1>

  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
