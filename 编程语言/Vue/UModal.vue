<template>
  <transition
    name="fade"
  >
    <div
      class="u-modal"
      v-if="visible"
      @keyup.esc="close()"
    >
      <div class="u-modal__backdrop" @click="close()" />
      <div class="u-modal__shell" :style="bodyStyle" @keyup.esc="close()">
        <div class="u-modal__header" :style="{'text-align': position}">
          <slot name="header">
            <!-- <div v-if="title" v-html="title" /> -->
          </slot>
        </div>
        <div class="u-modal__body">
          <slot />
        </div>
        <div class="u-modal__footer">
          <slot name="footer" />
        </div>
        <!-- <VueButton v-if="!visible"  @click="close()" /> -->
        <img v-show="showClose" @click="close()" class="u-modal__icon" src="../../img/icon_fanhui.png" alt="" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'UModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'center'
    },
    bodyStyle: {
      type: Object,
      default: () => ({
        width: '5.6rem',
        height: '5.52rem'
      })
    },
    title: {
      type: String,
      default: null
    },
    showClose: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close() {
      if (this.visible) {
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.u-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 100;
  &__backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
  }
  &__shell {
    box-sizing: border-box;
    background: #fff;
    border-radius: 6px;
    position: relative;
    box-shadow: 0 20px 60px rgba(0,0,0,.1);
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  // &__header {
  //   padding: 20px;
  //   text-align: center;
  //   font-size: 16px;
  //   line-height: 24px;
  //   font-weight: bold;
  // }
  // &__body {
  //   padding: 20px;
  // }
  // &__footer {
  //   padding: 20px;
  // }
  &__icon {
    position: absolute;
    width: 0.54rem;
    height: 0.54rem;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>