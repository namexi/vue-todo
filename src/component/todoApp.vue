<style class="scss">

</style>

<template>
        <div>
        <jtodo-header></jtodo-header>
        <jtodo-newtodo></jtodo-newtodo> 
        </div>
</template>

<script>
import JtodoHeader from './header.vue'
import JtodoNewtodo from './newtodo.vue'
export default {
    name: 'TodoApp',
    components: {
        JtodoHeader,
        JtodoNewtodo
    }
}
</script>
