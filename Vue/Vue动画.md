```css
.ani-pop-in-enter-active,.ani-pop-in-leave-active,.ani-pop-out-enter-active,.ani-pop-out-leave-active {
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
  transform: translate3d(-100%,0,0)
}

.ani-pop-in-enter,.ani-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%,0,0)
}

.ani-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%,0,0)
}
```