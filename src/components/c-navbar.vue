<template>
  <div class="c-navbar">
    <transition name="fade">
      <c-mask v-show="opened"
        @touchend.native.prevent="opened = false"></c-mask>
    </transition>
    <c-button class="c-navbar-toggle" :class="{'active': opened}"
      v-tap="toggleOpened">
      <slot name="icon"><c-icon>three-bars</c-icon></slot>
    </c-button>
    <nav class="c-navbar-menu"
      :class="{'opened': opened}"
      v-tap="cancelOpened">
      <slot></slot>
    </nav>
  </div>
</template>

<script>
import mBase from './mixins/base'
import CMask from './c-mask'
import CIcon from './c-icon'
import CButton from './c-button'

export default {
  mixins: [mBase],

  data () {
    return {
      opened: false
    }
  },

  methods: {
    toggleOpened () {
      this.opened = !this.opened
    },
    cancelOpened () {
      this.opened = false
    }
  },

  components: {
    CMask,
    CIcon,
    CButton
  }
}
</script>

<style src="styles/components/navbar"></style>
