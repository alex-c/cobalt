<template>
    <div id="sandbox">
        <div id="sandbox-content">
            Sandbox
        </div>
    </div>
</template>

<script>
export default {
    name: 'sandbox',
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "../shared.scss";

#sandbox {
    text-align: center;
    padding-top: 16px;
}

#sandbox-content {
    margin: auto;
    width: $content-width;
    text-align: left;
}
</style>
