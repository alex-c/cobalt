<template>
    <div id="app">
        <topbar></topbar>
        <div id="app-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Topbar from './components/Topbar.vue';

export default {
    name: 'app',
    components: {Topbar},
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
body {
    margin: 0px;
    font-family: 'Nanum Gothic', sans-serif;
    background-color: #DFDFEF;
}

#app {}
</style>
