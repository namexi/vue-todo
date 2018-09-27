<style lang="scss" scoped>
    .newtodo {
        width: 600px;
        margin: 0 auto;
        background: #fff;
        position: relative;
        .add{
            box-sizing: content-box;
            padding: 16px 16px 16px 60px;
            background: rgba(0, 0, 0, 0.003); 
            box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
            .newtodo-text {
                width: 100%;
                border: none;
                font-size: 24px;
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
                	top: 13px;
	                left: 0;
	                width: 60px;
	                height: 34px;
                    text-align: center;
                    border: none;
                    -webkit-appearance: none;
                    transform: rotate(90deg);
                &::before{
                    content: " ❮";
                    font-size: 22px;
                    color: #e6e6e6;
                    padding: 10px 27px 10px 27px;
                }
                &:checked:before{
                    content: " ❯";
                    color: #737373;
                     
                }
            }
            ul{
                li{
                    position: relative;
                    font-size: 24px;
                    border-bottom: 1px solid #ededed;
                    top:0;
                }
                .view{
                    display: flex;
                  .toggle{
                    width: 40px;
                    height:40px;
                    border:none;
                    -webkit-appearance: none;
                    margin: 9px 5px;
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
                        padding: 15px 15px 15px 10px;
                    }
                    a {
                        position: absolute;
                        right: 10px;
                        top: 0;
                        bottom:0;
                        color:#cc9a9a;
                        width: 40px;
                        text-align:center;
                        height: 40px;
                        line-height:40px;
                        margin: 13px 0;
                        font-size: 30px;
                        font-family: inherit;
                        font-weight: inherit;
                        &:hover {
                            color: #b83f45;
                        }
                    }
                  }
                  .edit {
                      width: 100%;
                      border:none;
                      border: 1px solid #999;
                      box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
                      font-size: 24px;
                      line-height: 1.4em;
                      z-index: 99;
                    }
                  .edit-show {
                        width: 537px;
                        position: absolute;
                        top: 0;
                        left: 60px;
                        right: 3px;
                        padding: 12px 0; 
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
            }else if (new Date().getTime() - this.clcikTime > 800 && !this.editText) {
               this.clcikTime = 0
            } else {
                this.editText = true
                this.clcikTime = 0
            }
            console.log(new Date().getTime() - this.clcikTime)
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
