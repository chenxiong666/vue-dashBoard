<template>
  <div id="app">
    <router-view class="mon_content"/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
  #app{
    .mon_content{
      width: 100%;
      position: fixed;
      top: 0;
      bottom:0;
      left: 0;
      right: 0;
      background: #000;
      background-size: cover;
      box-sizing: border-box;
    }
  }
</style>
