<style lang="scss" scoped>
    .footer {
        line-height:.4rem;
        color: #777;
        margin: 0 auto;
        background: #fff;
        padding: .2rem .3rem;
        display: flex;
        position: relative;
        box-sizing: content-box;
        span {
            float: left;
            strong{
               font-weight:400;
        }
        }
        ul {
            position: absolute;
            margin: 0;
            padding: 0;
            right: 0;
            left: 0;
            text-align: center;
            li {
                display: inline;
                margin: 0 .03rem;
                a {
                    background: none;
                    padding: .06rem .14rem;
                    color: #777;
                }
                .active {
                    border: 1px solid rgba(175, 47, 47, 0.2);
                    border-radius:2px;
                }
            }
        }
        button {
            position: absolute;
            right: .2rem;
            line-height: .4rem
        }
        &:before {
            content: '';
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            height: 50px;
            overflow: hidden;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
        }
    }

</style>

<template>
<div>
    <div class="footer" v-show="sum">
        <span>
            <strong>{{sum}}</strong>
            items left
         </span>
        <ul>
            <li v-for="tab in tabs" :key="tab" :ref="tab">
                <a href="#" :class ="state === tab ? 'active':''" :ref="tab" @click="clickStyle(tab)">{{tab}}</a>
            </li>
        </ul>
        <button v-show="clearShow" @click="clearCompleted">Clear completed</button>
    </div>

</div>
</template>

<script>
export default {
  name: 'JtodoFooter',
  props: {
    state: String,
    lists: Array
  },
  data () {
    return {
      tabs: ['All', 'Active', 'Completed']
    }
  },
  computed: {
    sum () {
      return this.lists.length
    },
    clearShow () {
      let flag
      this.lists.forEach(element => {
        if (element.checked === true) {
          flag = true
        }
      })
      return flag
    }
  },
  methods: {
    clickStyle (tab) {
      if (tab !== this.tabs[0]) {
        const aObj = this.$refs[this.tabs[0]][0]
        aObj.classList.remove('active')
      }
      this.$emit('change', tab)
    },
    clearCompleted () {
      this.$emit('clearCompleted')
    }
  },
  mounted () {
    const aObj = this.$refs[this.tabs[0]][0]
    aObj.classList.add('active')
  }
}
</script>
