<template>
    <div id="app">
        <topbar></topbar>
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
}

#app {}
</style>
