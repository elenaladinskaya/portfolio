<template lang="pug">
.about-page-component
  .page-content
    .container
      .header
        .title Блок «Обо мне»
        iconed-btn(
          type="iconed",
          v-if="!emptyCatIsShown",
          @click="emptyCatIsShown = true",
          title="Добавить группу"
        )
      ul.skills
        li.item(v-if="emptyCatIsShown")
          category(empty, @remove="emptyCatIsShown = false")
        li.item(v-for="category in categories", :key="category.id")
          category(:title="category.category", :skills="category.skills")
</template>

<script>
import iconedBtn from "../../components/button/button.vue";
import category from "../../components/category/category.vue";

export default {
  components: {
    iconedBtn,
    category,
  },
  data() {
    return {
      categories: [],
      emptyCatIsShown: false,
    };
  },
  created() {
    this.categories = require("../../data/categories.json");
  },
};
</script>

<style lang="postcss" scoped src="./about.pcss"></style>