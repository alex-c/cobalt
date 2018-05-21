<template>
    <div id="topbar">
        <div id="topbar-inner">
            <div id="topbar-title">
                <router-link :to="{path: '/home'}">Cobalt</router-link>
            </div>
            <div id="topbar-navigation">
                <router-link :to="{path: '/guide'}"><el-button type="primary">Guide</el-button></router-link>
                <router-link :to="{path: '/specification'}"><el-button type="primary">Specification</el-button></router-link>
                <router-link :to="{path: '/tools'}"><el-button type="primary">Tools</el-button></router-link>
                <router-link :to="{path: '/sandbox'}"><el-button type="danger" icon="el-icon-edit"> Try it online!</el-button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'topbar',
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "../shared.scss";

#topbar {
    text-align: center;
    padding: 16px;
    background-color: #0047AB;
    color: white;
}

#topbar a:link {
    color: white;
    text-decoration: none;
}
#topbar a:hover {
    text-decoration: underline;
}

#topbar-inner {
    margin: auto;
    width: $content-width;
    text-align: left;
    overflow: auto;
}

#topbar-title {
    float: left;
    font-size: 36px;
}

#topbar-navigation {
    float: right;
}

#topbar-navigation button {
    margin-left: 4px;
}

#github-button {
    overflow: visible;
    font-size: 24px;
}
</style>
