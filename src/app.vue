<style lang="scss">
   .app {
       max-width: 640px;
        min-width: 320px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
   }
</style>

<template>
    <div class="app">
       <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>
