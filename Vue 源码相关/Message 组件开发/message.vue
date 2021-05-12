<template>
  <transition name="message-fade">
    <div
      class="alert"
      :class="['alert-' + type]"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      message: '',
      duration: 3000,
      type: 'info',
      onCLose: null,
      closed: false,
      timer: null
    }
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  },
  methods: {
    destroyElement () {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    close () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    },
    clearTimer () {
      clearTimeout(this.timer)
    },
    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    }
  },
  created () {
    this.startTimer()
  }
}
</script>

<style scoped>
.alert {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 80%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: opacity 0.3s, transform .4s;
  overflow: hidden;
}
.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.alert-info {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.alert-error {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}

.message-fade-enter,
.message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
@media screen and (max-width:768px) {
  .alert {
    top: 20px;
  }
}
</style>
