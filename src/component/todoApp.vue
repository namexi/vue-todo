<style class="scss">
    .todo-app {
        margin: 0 .2rem;
    }
</style>

<template>
        <div class="todo-app">
            <jtodo-header></jtodo-header>
            <jtodo-newtodo></jtodo-newtodo>
            <jtodo-footer></jtodo-footer>
        </div>
</template>

<script>
import JtodoHeader from './header.vue'
import JtodoNewtodo from './newtodo.vue'
import JtodoFooter from './footer.vue'
export default {
    name: 'TodoApp',
    components: {
        JtodoHeader,
        JtodoNewtodo,
        JtodoFooter
    }
}
</script>
