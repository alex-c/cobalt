<template>
    <div id="home">
        <div id="home-content">
            <card title="lol">test1</card>
            <card>test2</card>
            <el-card class="box-card">
                Cobalt is a statically typed programming language with type infrerence. It is imperative and procedural, but not object-oriented.
            </el-card>
            <el-card class="box-card">
                <h3>State of Cobalt</h3>
                <p>Cobalt is currently being developed. Until the first full language version is finalized as version 1.0, features will be incrementally added with a 0.x version numbering. Reverse compatibility between these versions will not be guaranteed.</p>
            </el-card>
        </div>
    </div>
</template>

<script>
import Card from './shared/Card.vue';

export default {
    name: 'home',
    components: {Card},
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
