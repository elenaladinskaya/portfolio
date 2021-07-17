<template lang="pug">
.about-page-component
  .page-content
    .container(v-if="categories.length")
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
          category(
            empty,
            @remove="emptyCatIsShown = false",
            @approve="createCategory"
          )
        li.item(v-for="category in categories", :key="category.id")
          category(
            :title="category.category",
            :skills="category.skills",
            @create-skill="createSkill($event, category.id)",
            @edit-skill="editSkill",
            @remove-skill="removeSkill"
          )
    .container(v-else)
      .loading Загрузка...
</template>

<script>
import iconedBtn from "../../components/button/button.vue";
import category from "../../components/category/category.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    iconedBtn,
    category,
  },
  data() {
    return {
      emptyCatIsShown: false,
    };
  },
  computed: {
    ...mapState("categories", {
      categories: (state) => state.data,
    }),
  },
  methods: {
    ...mapActions({
      createCategoryAction: "categories/create",
      fetchCategoryesAction: "categories/fetch",
      addSkillAction: "skills/add",
      removeSkillAction: "skills/remove",
      editSkillAction: "skills/edit",
    }),
    async createSkill(skill, categoryId) {
      const newSkill = {
        ...skill,
        category: categoryId,
      };
      await this.addSkillAction(newSkill);

      skill.title = "";
      skill.percent = "";
    },
    removeSkill(skill) {
      this.removeSkillAction(skill);
    },
    async editSkill(skill) {
      await this.editSkillAction(skill);
      skill.editmode = false;
    },
    async createCategory(categoryTitle) {
      try {
        await this.createCategoryAction(categoryTitle);
        this.emptyCatIsShown = false;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  created() {
    this.fetchCategoryesAction();
  },
};
</script>

<style lang="postcss" scoped src="./about.pcss"></style>