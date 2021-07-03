import Vue from "vue";

const thumbs = {
  props: ["works", "currentWork"],
  template: "#preview-thumbs"
};

const btns = {
  props: ["isDisabledNext", "isDisabledPrev"],
  template: "#preview-btns",
};

const display = {
  props: ["currentWork", "works", "isDisabledNext", "isDisabledPrev", "currentIndex"],
  template: "#preview-display",
  components: { thumbs, btns },
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.reverse();
    }
  }
};

const tags = {
  props: ["tags"],
  template: "#preview-tags",
};

const info = {
  props: ["currentWork"],
  template: "#preview-info",
  components: { tags },
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(",");
    }
  }
};

new Vue({
  el: "#preview-component",
  template: "#preview-container",
  components: { display, info },
  data() {
    return {
      works: [],
      currentIndex: 0,
      isDisabledNext: false,
      isDisabledPrev: true
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  methods: {
    requireImagesToArray(data) {
      return data.map(item => {
        const requiredImage = require(`../images/content/portfolio/${item.photo}`).default;
        item.photo = requiredImage;
        return item
      });
    },
    slide(direction) {
      switch (direction) {
        case "next":
          if (this.works.length - 1 < this.currentIndex + 1) {
            this.isDisabledNext = true;
          } else if (this.currentIndex === this.works.length - 2) {
            this.isDisabledNext = true;
            this.currentIndex++
          } else {
            this.isDisabledPrev = false;
            this.currentIndex++
          }
          break;
        case "prev":
          if (this.currentIndex === 0) {
            this.isDisabledPrev = true;
          } else if (this.currentIndex === 1) {
            this.isDisabledPrev = true;
            this.currentIndex--
          }
          else {
            this.isDisabledNext = false;
            this.currentIndex--
          }
          break;
      }
    },
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.requireImagesToArray(data);
  }
});