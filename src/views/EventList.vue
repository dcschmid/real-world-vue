<script>
import EventCard from "../components/EventCard.vue";
import EventService from "../services/EventService";

export default {
  name: "EventList",
  props: ["page"],
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
    };
  },
  beforeRouteEnter(routeTo, _routeFrom, next) {
    EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.events = response.data;
          comp.totalEvents = response.headers["x-total-count"];
        });
      })
      .catch(() => {
        next({ name: "NetworkError" });
      });
  },
  beforeRouteUpdate(routeTo) {
    return EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.events = response.data;
        this.totalEvents = response.headers["x-total-count"];
      })
      .catch(() => {
        return { name: "NetworkError" };
      });
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2);
      return this.page < totalPages;
    },
  },
};
</script>

<template>
  <h1>Events For Good</h1>

  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Previous</router-link
      >

      <router-link
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next &#62;</router-link
      >
    </div>
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

.pagination {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>
