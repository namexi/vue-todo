<style lang="scss" scoped>
    .newtodo {
        margin: 0 auto;
        background: #fff;
        position: relative;
        .add{
            box-sizing: content-box;
            padding: .32rem .32rem .32rem 1.2rem;
            background: rgba(0, 0, 0, 0.003);
            box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
            .newtodo-text {
                width: 100%;
                border: none;
                font-size: .48rem;
                font-family: inherit;
                font-weight: inherit;
                color: inherit;
            }
        }
        .main {
            border-top: 1px solid #e6e6e6;
            box-sizing: border-box;
            label[for='toggle-all'] {
	            display: none;
            }
            .toggle-all{
                position:absolute;
                	top: .26rem;
	                left: -2px;
	                width: 1.2rem;
	                height: .67rem;
                    text-align: center;
                    border: none;
                &:before{
                    content: "\276F";
                    font-size: .44rem;
                    color: #e6e6e6;
                    padding: .2rem .34rem .2rem .34rem;
                }
                &:checked:before{
                    color: #737373;
                }
                &:checked {
                    transform: rotate(90deg);
                    -webkit-transform:rotate(90deg);
                    -moz-transform:rotate(90deg);
                }
            }
            ul{
                box-sizing: content-box;
                padding: 0 0 0 1.2rem;
                li{
                    position: relative;
                    font-size: .48rem;
                    border-bottom: 1px solid #ededed;
                    top:0;
                }
                .view{
                    display: flex;
                  .toggle{
                    width: .8rem;
                    height:.8rem;
                    border:none;
                    position: absolute;
                    left: -53px;
                    margin: .18rem .1rem;
                    z-index: 99;
                    &::before {
                        content: url('../assets/images/round.svg');
                    }
                    &:checked:before {
                        content: url('../assets/images/done.svg');
                    }
                  }
                    label {
                       flex: 1;
                        width: 100%;
                        padding: .3rem .3rem .3rem .2rem;
                    }
                    .completed{
                        color: #d9d9d9;
                        text-decoration: line-through;
                    }
                    a {
                        position: absolute;
                        right: .2rem;
                        top: 0;
                        bottom:0;
                        color:#cc9a9a;
                        width: .8rem;
                        text-align:center;
                        height: .8rem;
                        line-height:.8rem;
                        margin: .26rem 0;
                        font-size: .6rem;
                        font-family: inherit;
                        font-weight: inherit;
                        background: none;
                        display: none;
                        &:hover {
                            color: #b83f45;
                        }
                    }

                  }
                  .edit {
                      display: none;
                      width: 100%;
                      border:none;
                      border: 1px solid #999;
                      box-shadow: inset 0 -1px .1rem 0 rgba(0, 0, 0, 0.2);
                      font-size: .48rem;
                      line-height: 1.4em;
                      box-sizing: border-box;
                      padding: .24rem 0;
                      position: absolute;
                      top: 0;
                      right: .06rem;
                      z-index: 99;
                    }
                }
            }
    }
</style>

<template>
    <div class="newtodo">
        <div class="add">
            <input type="text" placeholder="接下来要去做什么？" class="newtodo-text" v-model="input" @keyup.enter="inputData">
        </div>
        <div class="main" v-show="todosShow">
            <input id="toggle-all" type="checkbox" class="toggle-all" v-model="allCkecked" @click="setAllCkecked">
            <label for="toggle-all"></label>
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <div class="view" @mouseenter="showDelBtn" @mouseleave="hiddenDelBtn" >
                        <input type="checkbox" class="toggle"  :checked="item.checked" @click="getCkecked($event,item)">
                        <label @click.stop="showEditInput($event,item.text)" :class="{completed:item.checked}">{{item.text}}</label>
                        <a @click="dellTOdo(index)">×</a>
                    </div>
                    <form action="" @submit="changeText($event,item)">
                        <input type="text" class="edit" v-todo-focus="falge" ref="text" @blur="hiddeEditText" :value="item.text">
                    </form>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'JtodoNewtodo',
  props: ['list'],
  data () {
    return {
      clcikTime: 0,
      allCkecked: false,
      text: '',
      falge: false,
      index: 0,
      input: ''
    }
  },
  computed: {
    todosShow () {
      return this.list.length
    }
  },
  methods: {
    showDelBtn (e) {
      if (e.target) e.currentTarget.lastElementChild.style.display = 'block'
    },
    hiddenDelBtn (e) {
      if (e.target) e.currentTarget.lastElementChild.style.display = 'none'
    },
    showEditInput (e, item) {
      if (!this.text) this.text = e.currentTarget.textContent
      if (this.clcikTime === 0 && !this.falge) {
        this.clcikTime = new Date().getTime()
        console.log('开始获取第一次时间了')
      } else {
        if (this.text === e.currentTarget.textContent) {
          if (new Date().getTime() - this.clcikTime > 300 && !this.falge) {
            this.clcikTime = 0
            this.text = ''
            console.log('两次点击时间过长')
            return
          }
          console.log('点击了相同的元素')
          console.log('连续点击了两次')
          // this.text = e.currentTarget.parentElement.nextElementSibling
          this.falge = true
          this.text = this.$refs.text
          this.text.forEach(el => {
            if (el.value === item) {
              el.style.display = 'block'
            }
          })
          // this.text.style.display = 'block'
        } else {
          this.falge = false
          this.text = e.currentTarget.textContent
          this.clcikTime = new Date().getTime()
          console.log('点击了不相同的元素')
        }
      }
    },
    hiddeEditText (e) {
      e.currentTarget.style.display = 'none'
    },
    setAllCkecked (e) {
      this.allCkecked = e.target.checked
      this.index = this.allCkecked ? this.list.length : 0
      this.list.forEach(el => {
        el.checked = this.allCkecked
      })
    },
    getCkecked (e, item) {
      if (e.target.checked) this.index += 1
      if (!e.target.checked && this.index > 0) this.index -= 1
      if (this.index === this.list.length) {
        this.allCkecked = true
      } else {
        this.allCkecked = false
      }
      item.checked = e.target.checked
    },
    inputData () {
      if (!this.input.trim()) return
      const idx = this.list.length ? this.list.length : 0
      const inputArr = { id: idx, text: this.input, checked: false }
      this.list.unshift(inputArr)
      this.input = ''
      this.$emit('change', this.list)
    },
    dellTOdo (index) {
      let dellOk = this.list.splice(index, 1)
      if (dellOk.length >= 1) this.$emit('change', this.list)
    },
    changeText (e, item) {
      let newText = e.currentTarget.children[0].value
      item.text = newText
      e.currentTarget.children[0].style.display = 'none'
    }
  },
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  },
  created () {
    this.$emit('change', this.list)
  }
}
</script>
