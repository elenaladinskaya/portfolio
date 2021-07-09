import tagsAdder from "./tagsAdder.vue";

export default {
  title: "tagsAdder",
  components: { tagsAdder }
}

export const defaultView = () => ({
  components: { tagsAdder },
  data() {
    return {
      tags: "HTML, CSS, JavaScript"
    }
  },
  template: `
    <tagsAdder v-model="tags"/>
  `
});

defaultView.story = {
  name: "Стандартный вид",
};