<template>
  <div class="wave_container">
    <svg :width="svg.width" :height="svg.height" id="svg">
      <defs>
        <linearGradient id="color" x1="50%" y1="0%" x2="0" y2="100%">
          <stop offset="0%" stop-color="#36c772"></stop>
          <stop offset="100%" stop-color="#68e36b"></stop>
        </linearGradient>
        <linearGradient id="color1" x1="50%" y1="0%" x2="0" y2="100%">
          <stop offset="0%" stop-color="#f3e220"></stop>
          <stop offset="100%" stop-color="#df4920"></stop>
        </linearGradient>
      </defs>
      <g id="wave">
        <path fill="rgba(54,89,119,.8)" :d="`M ${svg.gap} ${svg.height / 2} C ${svg.width / 2 + 33.633} ${svg.height / 2 - 14.88} ${svg.width / 2 + .54} ${svg.height / 2 + 16.327} ${svg.width - svg.gap} ${svg.height / 2} A ${svg.height / 2 - svg.gap} ${svg.height / 2 - svg.gap} 0 0 0 ${svg.gap} ${svg.width / 2} Z`">
          <animate dur="3s" repeatCount="indefinite" attributeName="d" attributeType="XML" :values="`
M${svg.gap} ${svg.height / 2} C${svg.width / 2 - 10} ${svg.height / 2 + 20}, ${svg.width / 2 - 8} ${svg.height / 2 - 20}, ${svg.width - svg.gap} ${svg.height / 2} A${svg.height / 2 - svg.gap} ${svg.height / 2 - svg.gap} 0 0 0 ${svg.gap} ${svg.height / 2} Z;
M${svg.gap} ${svg.height / 2} C${svg.width / 2 + 45} ${svg.height / 2},${svg.width / 2 - 9} ${svg.height / 2 - 30}, ${svg.width - svg.gap} ${svg.height / 2} A${svg.height / 2 - svg.gap} ${svg.height / 2 - svg.gap} 0 0 0 ${svg.gap} ${svg.height / 2} Z;
M${svg.gap} ${svg.height / 2} C${svg.width / 2 - 10} ${svg.height / 2 + 20},${svg.width / 2 - 8} ${svg.height / 2 - 20}, ${svg.width - svg.gap} ${svg.height / 2} A${svg.height / 2 - svg.gap} ${svg.height / 2 - svg.gap} 0 0 0 ${svg.gap} ${svg.height / 2} Z`"></animate>
        </path>
        <path :style="{fill: type==='normal'?'#8ee7b4':' #e6d97d'}" :d="`M ${svg.gap} ${svg.height / 2 - 10} C ${svg.width / 2 + 33.633} ${svg.height / 2 - 14.88} ${svg.width / 2 + .54} ${svg.height / 2 + 6.327} ${svg.width - svg.gap} ${svg.height / 2} A ${svg.height / 2 - svg.gap} ${svg.height / 2 - svg.gap} 0 0 1 ${svg.gap} ${svg.width / 2} Z`">
        </path>
        <path :style="{fill:type==='normal'?'url(#color)':'url(#color1)'}" :d="`M ${svg.gap} ${svg.height / 2} C ${svg.width / 2 + 33.633} ${svg.height / 2 - 14.88} ${svg.width / 2 + .54} ${svg.height / 2 + 16.327} ${svg.width - svg.gap} ${svg.height / 2} A ${svg.height / 2 - svg.gap} ${svg.height / 2 - svg.gap} 0 0 1 ${svg.gap} ${svg.width / 2} Z`">
          <animate dur="3s" repeatCount="indefinite" attributeName="d" attributeType="XML" :values="`
M${svg.gap} ${svg.height / 2} C${svg.width / 2 - 10} ${svg.height / 2 + 20}, ${svg.width / 2 - 8} ${svg.height / 2 - 20}, ${svg.width - svg.gap} ${svg.height / 2} A${svg.height / 2 - svg.gap} ${svg.height / 2 - svg.gap} 0 0 1 ${svg.gap} ${svg.height / 2} Z;
M${svg.gap} ${svg.height / 2} C${svg.width / 2 + 45} ${svg.height / 2},${svg.width / 2 - 9} ${svg.height / 2 - 30}, ${svg.width - svg.gap} ${svg.height / 2} A${svg.height / 2 - svg.gap} ${svg.height / 2 - svg.gap} 0 0 1 ${svg.gap} ${svg.height / 2} Z;
M${svg.gap} ${svg.height / 2} C${svg.width / 2 - 10} ${svg.height / 2 + 20},${svg.width / 2 - 8} ${svg.height / 2 - 20}, ${svg.width - svg.gap} ${svg.height / 2} A${svg.height / 2 - svg.gap} ${svg.height / 2 - svg.gap} 0 0 1 ${svg.gap} ${svg.height / 2} Z`"></animate>
        </path>
      </g>
      <path ref="ring" fill="none" class="ring" :style="{stroke: type==='normal'?'#7df681':'#e99720'}" stroke-width="3"></path>
      <circle ref="circle"  r="4 " stroke-width="3" :style="{fill: type==='normal'?'#7df681':'#e99720'}"   class="percentage-pie-svg"></circle>
      <image :x="`${svg.width / 2 - 40}`" :y="`${svg.height / 2 - 60}`" xlink:href="/static/img/icon/top.png" width="15px" height="22px" v-if="svg.up"></image>
      <text  class="liquidFillGaugeText" v-if="svg.up" font-size="22px" :transform="`translate(${svg.width / 2 - 10},${svg.height / 2 - 40})`">{{svg.up}}</text>
      <image :x="`${svg.width / 2 - 40}`" :y="`${svg.height / 2 + 20}`" xlink:href="/static/img/icon/btm.png" width="15px" height="22px" v-if="svg.down"></image>
      <text class="liquidFillGaugeText"  font-size="22px" :transform="`translate(${svg.width / 2 - 10},${svg.height / 2 + 40})`" v-if="svg.down">{{svg.down}}</text>
      <text class="liquidFillGaugeText"  font-size="48px" :transform="`translate(${svg.width / 2 - 30},${svg.height / 2 + 10})`" v-if="svg.percent">{{svg.percent+'%'}}</text>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'HelloWord',
    props: {
      svg: {
        type: Object,
        default() {
          return {
            width: 200,
            height: 200,
            gap: 10
          }
        }
      },
      type: {
        type: String
      }
    },
    data() {
      return {
        // svg: {
        //   width: 200,
        //   height: 200,
        //   gap: 10
        // }
      }
    },
    mounted() {
      const path = this.$refs.ring
      const circle = this.$refs.circle
      const r = this.svg.width / 2 -2
      const x1 = r * Math.sin(20 / 180 * Math.PI).toFixed(2) // 起点一
      const y1 = r * Math.cos(20 / 180 * Math.PI).toFixed(2)
      const desc = `M ${r} ${r} m${-x1},${-y1} a${r},${r} 0,0,0 ${x1 - r},${y1} a${r},${r} 0,0,0 ${r},${r} a${r},${r} 0 0 0 ${r},${-r} a${r},${r} 0 0 0 ${-r + x1},${-y1}`
      path.setAttribute('d', desc)
      circle.setAttribute('cx', `${r - x1}`)
      circle.setAttribute('cy', `${r - y1}`)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .liquidFillGaugeText{
    fill:#fff;
  }
  #svg{
    .percentage-pie-svg,.ring{
      transform: translate(2px,2px)
    }
  }
</style>
