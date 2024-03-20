<template>
  <div id="app" class="all">
    <div class="label"></div>
    <keep-alive>
      <router-view />
    </keep-alive>
    <myHeader></myHeader>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #fafafa;
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
