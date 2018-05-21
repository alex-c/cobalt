<template>
    <div id="tools">
        <div id="tools-content">
            Tools
        </div>
    </div>
</template>

<script>
export default {
    name: 'tools',
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "../shared.scss";

#tools {
    text-align: center;
    padding-top: 16px;
}

#tools-content {
    margin: auto;
    width: $content-width;
    text-align: left;
}
</style>
