<template>
  <div id="app">
    <router-view></router-view>
    <ul class="footer-bar">
      <li class="footer-bar-item">
        <router-link to="/">首页</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/category">分类</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/cart">购物车</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/profile">我的</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.footer-bar{
  height: 1rem;
  display:flex;
  background: #cccccc;
  position:fixed;
  bottom:0;
  /*固定定位脱离文档流，想要充满整个父元素，要设置width*/
  width:100%;
  &-item{
    flex-grow: 1;
    text-align:center;
    line-height:1rem;
  }
}
</style>
