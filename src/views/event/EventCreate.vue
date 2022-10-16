<template>
  <h2>Create an event</h2>

  <form>
    <BaseSelect
      :options="categories"
      v-model="event.category"
      label="Select a category"
    />

    <h3>Name & describe your event</h3>

    <BaseInput v-model="event.title" label="Title" type="text" />

    <BaseInput v-model="event.description" label="Description" type="text" />

    <h3>Where is your event?</h3>

    <BaseInput v-model="event.location" label="Location" type="text" />

    <h3>Are pets allowed</h3>

    <div>
      <BaseRadio v-model="event.pets" :value="1" label="Yes" name="pets" />
    </div>

    <div>
      <BaseRadio v-model="event.pets" :value="0" label="No" name="pets" />
    </div>

    <h3>Extras</h3>

    <div>
      <BaseCheckbox v-model="event.extras.catering" label="Catering" />
    </div>

    <div>
      <BaseCheckbox v-model="event.extras.music" label="Live music" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import BaseInput from "../../components/form/BaseInput.vue";
import BaseSelect from "../../components/form/BaseSelect.vue";
import BaseCheckbox from "../../components/form/BaseCheckbox.vue";
import BaseRadio from "../../components/form/BaseRadio.vue";
export default {
  data() {
    return {
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      event: {
        category: "",
        title: "",
        description: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
    };
  },
  components: { BaseInput, BaseSelect, BaseCheckbox, BaseRadio },
};
</script>
