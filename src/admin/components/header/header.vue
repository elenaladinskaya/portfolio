<template lang="pug">
.header-component
  headline(title="Панель администрирования")
    user
  navigation
</template>

<script>
import headline from "../../components/headline/headline.vue";
import user from "../../components/user/user.vue";
import navigation from "../../components/navigation/navigation.vue";
export default {
  components: { headline, user, navigation },
};
</script>