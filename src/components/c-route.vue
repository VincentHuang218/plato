<template>
  <ul class="c-route">
    <li v-for="(route, index) in routes" :key="index">
      <router-link class="c-route-link"
        :to="father + route.path"
        :exact="route.exact">
        <c-icon v-if="route.icon">{{route.icon}}</c-icon>
        {{__(route.title)}}
      </router-link>
      <c-route v-if="route.children"
        :father="route.path"
        :routes="route.children"></c-route>
    </li>
  </ul>
</template>

<script>
import CIcon from './c-icon'
import mBase from './mixins/base'

export default {
  name: 'c-route',

  mixins: [mBase],

  props: {
    father: {
      type: String,
      default: ''
    },
    routes: {
      type: Array,
      default () {
        return []
      }
    }
  },

  components: {
    CIcon
  }
}
</script>
