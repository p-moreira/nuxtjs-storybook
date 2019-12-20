import Vue from 'vue'
import AButton from './AButton.vue'

export default {
  title: 'Atoms/AButton',
  component: AButton
}

export const withText = () => '<a-button>with text</a-button>'

export const withEmoji = () => '<a-button>😀 😎 👍 💯</a-button>'

export const asAComponent = () => ({
  components: { AButton },
  template: '<a-button>Button</a-button>'
})
