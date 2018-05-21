<template>
    <div id="home">
        <div id="home-content">
            Home page
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "../shared.scss";

#home {
    text-align: center;
    padding-top: 16px;
}

#home-content {
    margin: auto;
    width: $content-width;
    text-align: left;
}
</style>
