<template>
  <div id="app">
    <div class="all">
      <myHeader></myHeader>
      <div class="label"></div>
      <keep-alive>
        <router-view />
      </keep-alive>
      <div class="copyright"> Copyright © 2024 by Liang Runhao </div>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/header/header.vue'
export default {
  name: 'App',
  components: {
    myHeader
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  color: #444;
}

.el-menu-demo {
  position: fixed;
  width: 100%;
  max-width: 1024px;
  top: 0;
}

.label {
  height: 60.8px;
}

.copyright{
  background-color: white;
    position: fixed;
    bottom: 0;
    padding: 4px;
    width: 100%;
    max-width: 1020px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: #212529;
    font-size: 9.5px;
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, .5);
}

@media screen and (max-width:1024px) {

  /* // 屏幕小于或等于1024px的时候 */
  .all {
    width: 100%;
  }
}

@media screen and (min-width:1025px) {
  /* // 屏幕大于1025px的时候 */
  .all {
    width: 1024px;
    box-shadow: 0 0 1em rgba(0, 0, 0, .1);
  }
}

.all {
  /* background-color: rgb(255 245 238); */
  background: #fff;
}
</style>
