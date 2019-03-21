<template>
    <div class="dash_board_container">
        <svg :width="svg.width" :height="svg.height">
            <defs>
              <linearGradient id="tocolor">
                <stop offset="26%" stop-color="#37b1f7"></stop>
                <stop offset="38%" stop-color="#40ecdf"></stop>
                <stop offset="88%" stop-color="#f3a824"></stop>
                <stop offset="100%" stop-color="#c72708"></stop>
              </linearGradient>
            </defs>
          <path ref="dash"   stroke="url(#tocolor)" :stroke-width="svg.gap" fill="none">
          </path>
          <circle ref="cirlt" class="mycircle cirlt" :r="svg.gap / 2" fill="#37b1f7"></circle>
          <circle ref="cirrt" class="mycircle" :r="svg.gap / 2" fill="#6aa2c2"></circle>
          <path ref="progress"  class="mypath" stroke="#6aa2c2" :stroke-width="svg.gap" fill="none">
          </path>
          <circle class="mycircle" ref="cipro" :r="svg.gap / 2" stroke-width="10" stroke="#ffffff" fill="#32cfa1"></circle>
          <image :x="svg.gap+10" :y="svg.gap+10" class="dash" xlink:href="/static/img/bash.png" :width="svg.height/1.4"></image>
          <text  class="liquidFillGaugeText"  font-size="48px" :transform="`translate(${svg.width / 2 - 40},${svg.height / 2})`">{{circlePro+'%'}}</text>
          <text  class="liquidFillGaugeText"  font-size="30px" :transform="`translate(${svg.width / 2 - 30},${svg.height - 40})`">{{svg.title}}</text>
        </svg>
    </div>
</template>

<script>
    export default {
      props: {
        data: {
          type: Object,
          default() {
            return {
              title: '测试',
              width: 300,
              height: 300,
              gap: 32,
              deg: 34,
              progress: 40
            }
          }
        },
        progress: Number
      },
      computed: {
        svg () {
          return this.data
        }
      },
        data() {
            return {
              circlePro: 0,
              timer:null
            }
        },
      watch: {
        circlePro(newVal,oldVal){
          if(newVal === this.progress){
            clearInterval(this.timer)
          }
        }
      },
      methods: {
        dashDraw() {
          const path = this.$refs.dash
          const cirLt = this.$refs.cirlt
          const cx = this.svg.width / 2
          const cy = this.svg.width / 2
          const r1 = this.svg.width / 2 - 20
          const x1 = r1 * Math.sin(this.svg.deg / 180 * Math.PI).toFixed(2) // 起点一
          const y1 = r1 * Math.cos(this.svg.deg / 180 * Math.PI).toFixed(2)
          const desc = `M ${cx} ${cy} m${-x1},${y1}
                          a${r1},${r1} 0,0,1 ${x1},${-y1 - r1}
                          a${r1},${r1} 0,0,1 ${x1},${r1 + y1}
          `
          path.setAttribute('d', desc)
          cirLt.setAttribute('cx', `${r1 - x1}`)
          cirLt.setAttribute('cy', `${r1 + y1}`)
        },
        progressDraw() {
          const deg = this.svg.deg - 90
          const pro = 100 - this.circlePro
          const cirPro = this.$refs.cipro
          const cirRt = this.$refs.cirrt
          const path = this.$refs.progress
          const r = this.svg.width / 2 - 20
          const x1 = (r * Math.cos(deg / 180 * Math.PI) + r).toFixed(2) // 起点一
          const y1 = (-r * Math.sin(deg / 180 * Math.PI) + r).toFixed(2)
          cirRt.setAttribute('cx', `${x1}`)
          cirRt.setAttribute('cy', `${y1}`)
          // 起点 r+x1 r+y1
          const Whole = 180 + 2 * 56 // 整个圆弧度数
          let desc
             const degLast = Whole * pro / 100 + deg// 进度条对应度数
             const rad = degLast * (Math.PI / 180)
             const x2 = (Math.cos(rad) * r) + r
             const y2 = -(Math.sin(rad) * r) + r
             if (pro < 50) {
               desc = `M ${x1},${y1}
                          A${r},${r} 0,0,0 ${x2},${y2}`
             } else {
               desc = `M ${x1},${y1}
                    A${r},${r} 0,0,0 ${r},0
                    A${r},${r} 0,0,0 ${x2},${y2}`
             }
            cirPro.setAttribute('cx', `${x2}`)
            cirPro.setAttribute('cy', `${y2}`)
            path.setAttribute('d', desc)
        },
        interval() {
          let that = this
          that.timer = setInterval(()=> {
            that.$set(that, 'circlePro', this.circlePro+1)
            that.progressDraw()
          },30)
        }
      },
      mounted() {
        let that = this
        that.interval()
        this.dashDraw()
        this.progressDraw()
      }
    }
</script>
<style lang='scss' scoped>
  .dash_board_container{
    .mycircle,.mypath{
      border-radius: 50%;
      // transform: scale(0.9,0.9)
      transform: translate(20px,20px)
    }
    .cirlt {
      // transform: translate(19px,19px)
    }
    .liquidFillGaugeText{
      fill: #fff;
    }
    svg{
      // padding: 20px;
      // overflow: auto
    }
  }
</style>
