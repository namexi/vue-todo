<style class="scss">

</style>

<template>
        <div>
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
