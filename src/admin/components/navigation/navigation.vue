<template lang="pug">
nav.navigation-component
  .container.navigation-container
    ul.list
      li(
        v-for="link in links",
        :class="['item', { active: link.active }]",
        :key="link.id"
      )
        a.link(:href="`/${link.alias}`") {{ link.title }}
</template>

<script>
const links = [
  { id: 0, title: "Обо мне", alias: "about", active: false },
  { id: 1, title: "Работы", alias: "works", active: true },
  { id: 2, title: "Отзывы", alias: "reviews", active: false },
];
export default {
  data() {
    return {
      links,
    };
  },
};
</script>

<style lang="postcss" scoped src="./navigation.pcss">
</style>