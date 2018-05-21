<template>
    <div id="guide">
        <div id="guide-content">
            Guide
        </div>
    </div>
</template>

<script>
export default {
    name: 'guide',
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "../shared.scss";

#guide {
    text-align: center;
    padding-top: 16px;
}

#guide-content {
    margin: auto;
    width: $content-width;
    text-align: left;
}
</style>
