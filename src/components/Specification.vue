<template>
    <div id="specification">
        <div id="specification-content">
            Specification
        </div>
    </div>
</template>

<script>
export default {
    name: 'specification',
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "../shared.scss";

#specification {
    text-align: center;
    padding-top: 16px;
}

#specification-content {
    margin: auto;
    width: $content-width;
    text-align: left;
}
</style>
