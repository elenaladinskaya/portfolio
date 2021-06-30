import Vue from "vue";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css'

const mediaQuery = window.matchMedia('(max-width: 566px)');

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    Swiper, SwiperSlide,
  },
  data() {
    if (mediaQuery.matches) {
      return {
        reviews: [],
        sliderOptions: {
          slidesPerView: 1,
          loop: false
        }
      }
    } else {
      return {
        reviews: [],
        sliderOptions: {
          slidesPerView: 2,
          loop: false
        }
      }
    }

  },
  computed: {
    slider() {
      return this.$refs["slider"].$swiper;
    }
  },
  methods: {
    requireImagesToArray(data) {
      return data.map((item) => {
        const requiredImage = require(`../images/content/avatars/${item.photo}`).default;
        item.photo = requiredImage;
        return item;
      });
    },
    slide(direction) {
      const slider = this.$refs["slider"].$swiper;
      switch (direction) {
        case 'next':
          slider.slideNext();
          break;
        case 'prev':
          slider.slidePrev();
          break;
      }
    },
  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.requireImagesToArray(data)
  },
})