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
	                left: 0;
	                width: 1.2rem;
	                height: .67rem;
                    text-align: center;
                    border: none;
                    -webkit-appearance: none;
                    transform: rotate(90deg);
                &::before{
                    content: " ❮";
                    font-size: .44rem;
                    color: #e6e6e6;
                    padding: .2rem .34rem .2rem .34rem;
                }
                &:checked:before{
                    content: " ❯";
                    color: #737373;
                     
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
                    -webkit-appearance: none;
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
                        &:hover {
                            color: #b83f45;
                        }
                    }
                  }
                  .edit {
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
            <input type="text" placeholder="接下来要去做什么？" class="newtodo-text">
        </div>
        <div class="main">
            <input id="toggle-all" type="checkbox" class="toggle-all">
            <label for="toggle-all"></label>
            <ul>
                <li @mouseenter="showDelBtn" @mouseleave="hiddenDelBtn">
                    <div class="view">
                        <input type="checkbox" class="toggle">
                        <label @click.stop="showEditInput">内容</label>
                        <a v-show="delBtn">×</a>
                    </div>  
                    <input type="text" class="edit" :class="{'edit-show':'editText'}" v-show="editText" v-todo-focus="editText" @blur="hiddeEditText">
                </li>
            </ul>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'JtodoNewtodo',
    data () {
        return {
            delBtn: false,
            editText: false,
            clcikTime : 0
        }
    },
    methods:{
        showDelBtn(){
            this.delBtn = true
        },
        hiddenDelBtn(){
           this.delBtn = false 
        },
        showEditInput () {
            if (this.clcikTime === 0 && !this.editText) {
                this.clcikTime = new Date().getTime()
            }else if (new Date().getTime() - this.clcikTime > 500 && !this.editText) {
               this.clcikTime = 0
            } else {
                this.editText = true
                this.clcikTime = 0
            }
        },
        hiddeEditText(){
            this.editText = false
        }
    },
    directives: {
		'todo-focus': function (el, binding) {
			if (binding.value) {
				el.focus();
			}
		}
	}
}
</script>
