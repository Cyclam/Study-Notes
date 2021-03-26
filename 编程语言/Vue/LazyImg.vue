<template>
  <img
    ref="img"
    :src="img"
    :style="{ visibility: loaded ? 'visible' : 'hidden' }"
    :alt="alt"
    @load="$emit('load')"
  >
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    img() {
      return this.loaded ? this.src : "";
    },
  },
  mounted() {
    var io = new IntersectionObserver((entry) => {
      const target = entry[0];
      const { top } = target.boundingClientRect;
      if (top > -500 && top < innerHeight + 500) {
        this.loaded = true;
        io.unobserve(this.$refs.img);
      }
    });
    io.observe(this.$refs.img);
  },
});
</script>
