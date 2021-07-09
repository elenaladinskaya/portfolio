<template lang="pug">
.app-container
  headline(title="Панель администрирования")
    user
  navigation
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
import headline from "./components/headline/headline.vue";
import user from "./components/user/user.vue";
import navigation from "./components/navigation/navigation.vue";
import iconedBtn from "./components/button/button.vue";
import category from "./components/category/category.vue";

export default {
  components: {
    headline,
    user,
    navigation,
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
    this.categories = require("./data/categories.json");
  },
};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
</style>

<style lang="postcss" scoped src="./app.pcss"></style>