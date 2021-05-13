### 利用 CSS3的transform特性

**图片尺寸2000px**

```html
<div class="carousel"></div>
```

```css
.carousel {
    width: 4000px;
    height: 200px;
    background-image: url("/public/images/cover.png"); // 利用repeat-x
    animation: CoverRound 60s linear infinite;
}

@keyframes imground {
    0% {
        transform: translateZ(0);
    }
    to {
        transform: translate3d(-50%, 0, 0);
    }
}

```