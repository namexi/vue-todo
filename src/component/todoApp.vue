<style lang="scss" scoped>
    .todo-app {
        margin: 0 .2rem
    }
</style>

<template>
        <div class="todo-app">
            <jtodo-header></jtodo-header>
            <jtodo-newtodo @change="getDataList" :list="list"></jtodo-newtodo>
            <jtodo-footer @change="getTabs" @clearCompleted="clearCompleted" :state="tab" :lists="lists"></jtodo-footer>
            <jtodo-bottom></jtodo-bottom>
        </div>
</template>

<script>
import JtodoHeader from '../public/header.vue'
import JtodoNewtodo from './newtodo.vue'
import JtodoFooter from './footer.vue'
import JtodoBottom from '../public/bottompage.vue'
export default {
    name: 'TodoApp',
    data () {
        return {
          tab: '',
          lists: [
                {
                    id: 0,
                    text: 'java',
                    checked: false
                },{
                id: 1,
                    text: 'PHP',
                    checked: false
                },{
                    id: 2,
                    text: 'WEB',
                    checked: false
                }
            ],
            list: []
        }
    },
    components: {
        JtodoHeader,
        JtodoNewtodo,
        JtodoFooter,
        JtodoBottom
    },
    computed : {
        choice () {
            return this.lists.filter( element => element.checked )
        },
        nochoice () {
            return this.lists.filter( element => !element.checked )
        }
    },
    methods:{
        getTabs (tab) {
            this.tab = tab
            if (tab === 'All') return this.list = this.lists
            if (tab === 'Active') return this.list = this.nochoice
            if (tab === 'Completed') return this.list = this.choice
        },
        getDataList (list) {
            this.lists = list
            console.log(this.lists)
        },
        clearCompleted () {
            this.list = this.nochoice
            this.lists = this.list
        }
    },
    created () {
        this.list = this.lists
    }
}
</script>
