<style lang="scss" scoped>
    .j-header { 
        text-align: center;
        margin:20px;
        h1 {
            font-size: 100px;
            font-weight: 100;
            color: rgba(175, 47, 47, 0.15);
            text-rendering: optimizeLegibility
        }
    }
</style>

<template>
    <div class="j-header">
        <h1>JTodo</h1>
    </div>
</template>

<script>
export default {
    name: 'JtodoHeader'
}
</script>
