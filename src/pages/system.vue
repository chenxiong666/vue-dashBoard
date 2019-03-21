<template>
    <div class="system_container">
      <div class="top_menu">
          <wave :svg="interSpeed" type="normal"></wave>
          <dash-board :data="interStroage" :progress="stroagePro"></dash-board>
          <dash-board :data="cpu" :progress="cpuPro"></dash-board>
          <wave :svg="drive" type="abnormal"></wave>
      </div>
    </div>
</template>
<script>
  import wave from '@/components/garish/wave'
  import DashBoard from '@/components/garish/dashBoard'
    export default {
        components: {
          wave, DashBoard
        },
        data() {
            return {
              interSpeed: { // 网速
                startColor: '#36c772',
                stopColor: '#68e36b',
                width: 200,
                height: 200,
                gap: 10,
                up: '4.9k/s',
                down: '5.2k/s'
              },
              interStroage: { // 内存
                title: '内存',
                width: 300,
                height: 300,
                gap: 32,
                deg: 34,
                progress: 40
              },
              stroagePro: 30,
              cpu: { // cpu
                title: 'CPU',
                width: 300,
                height: 300,
                gap: 32,
                deg: 34,
                progress: 80
              },
              cpuPro: 80,
              drive: { // 盘符
                width: 200,
                height: 200,
                gap: 10,
                percent: 55
              }
            }
        }
    }
</script>
<style lang='scss' scoped>
.system_container{
  display: flex;
  flex-direction: column;
  .top_menu {
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 0 110px;
    align-items: center;
  }
}
</style>
