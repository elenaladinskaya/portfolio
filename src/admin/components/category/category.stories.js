import category from './category';
import { action } from '@storybook/addon-actions';

const methods = {
  onRemove: action("onRemove"),
  onRemoveSkill: action("onRemoveSkill"),
  onEditSkill: action("onEditSkill"),
}

export default {
  title: "category",
  components: { category }
}

const skills = [
  {
    "id": 0,
    "title": "Html5",
    "percent": 100
  },
  {
    "id": 1,
    "title": "СSS3",
    "percent": 90
  },
  {
    "id": 2,
    "title": "JavaScript",
    "percent": 80
  },
  {
    "id": 3,
    "title": "Jquery и Vue.js",
    "percent": 85
  }
]

export const defaultView = () => ({
  components: { category },
  data() {
    return {
      title: "Frontend",
      skills
    }
  },
  template: `
  <category :title="title"
  :skills="skills"
  @remove="onRemove"
  @remove-skill="onRemoveSkill"
  @edit-skill="onEditSkill"
  />
  `,
  methods
});

defaultView.story = {
  name: "Стандартный вид"
}