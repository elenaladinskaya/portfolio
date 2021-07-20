<template lang="pug">
.app-container
  router-view(name="header")
  router-view
  div(:class="['notify-container', { active: isTooltipShown }]")
    .notification
      notification(
        :text="tooltipText",
        :type="tooltipType",
        @click="hideTooltip"
      )
</template>

<script>
import notification from "./components/notification";
import { mapState, mapActions } from "vuex";
export default {
  components: { notification },
  methods: {
    ...mapActions({
      hideTooltip: "tooltips/hide",
    }),
  },
  computed: {
    ...mapState("tooltips", {
      isTooltipShown: (state) => state.isShown,
      tooltipText: (state) => state.text,
      tooltipType: (state) => state.type,
    }),
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