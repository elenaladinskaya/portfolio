<template lang="pug">
card(slim)
  editLine(
    slot="title",
    v-model="categoryTitle",
    :editModeByDefault="empty",
    @remove="$emit('remove', $event)",
    @approve="$emit('approve', $event)"
  )
  template(slot="content")
    ul.skills(v-if="empty === false")
      li.item(v-for="skill in skills", :key="skill.id")
        skill(
          :skill="skill",
          @remove="$emit('remove-skill', $event)",
          @approve="$emit('edit-skill', $event)"
        )
    .bottom-line
      skillAddLine(:blocked="empty")
</template>

<script>
import card from "../card/card.vue";
import editLine from "../editLine/editLine.vue";
import skill from "../skill/skill.vue";
import skillAddLine from "../skillAddLine/skillAddLine.vue";

export default {
  components: {
    card,
    editLine,
    skill,
    skillAddLine,
  },
  props: {
    empty: Boolean,
    title: {
      type: String,
      default: "",
    },
    skills: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      categoryTitle: this.title,
    };
  },
};
</script>

<style lang="postcss" scoped src="./category.pcss">
</style>