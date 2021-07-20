<template lang="pug">
.user-component
  avatar(size="2.7", :src="userPic")
  .username Елена Ладинская
</template>

<script>
import avatar from "../avatar/avatar.vue";
export default {
  components: {
    avatar,
  },
  computed: {
    userPic() {
      return require("../../../images/content/user.jpg").default;
    },
  },
};
</script>

<style lang="postcss" src="./user.pcss">
</style>