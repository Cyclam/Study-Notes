```css
.ani-pop-in-enter-active,
.ani-pop-in-leave-active,
.ani-pop-out-enter-active,
.ani-pop-out-leave-active {
  will-change: transform;
  transition: all .5s;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000
}

.ani-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0)
}
.ani-pop-in-enter,
.ani-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0)
}
.ani-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0)
}
```

```css
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
```

```css
.toggleSide-enter,
.toggleSide-leave-active{
  transform: translate3d(0, 100%, 0);
}
.toggleSide-enter-active,
.toggleSide-leave{
  transform: translate3d(0, 0%, 0);
}
// slide
.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active {
  transition: all 0.3s;
}
.slide-left-enter, .slide-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}
.slide-right-enter, .slide-right-leave-to {
  transform: translate3d(100%, 0, 0);
}
// fade
.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fadeIn-enter-active {
  animation: fadeInRight .3s ease;
}
.fadeIn-leave-active {
  animation: fadeOutRight .3s ease;
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeOutRight {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale3d(.3,.3,.3);
    }
  50% {
    opacity: 1;
  }
}
```