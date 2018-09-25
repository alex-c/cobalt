<template>
    <div id="specification">
        <el-row>
            <el-col :span="6">
                <div id="specification-index">
                    <div>Introduction</div>
                    <div>Lexical Structure</div>
                </div>
            </el-col>
            <el-col :span="18">
                <div id="specification-content">
                    <div>Introduction</div>
                    <div>Lexical Structure</div>
                </div>
            </el-col>
        </el-row>


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
}

#specification-index {
    background-color: green;
    padding: 20px;
}

#specification-content {
    background-color: red;
    padding: 20px;
}
</style>
