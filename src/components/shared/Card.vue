<template>
    <div class="card">
        <div class="title" v-if="title">{{title}}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['title', 'type'],
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
.card {
    background-color: white;
    border-radius: 3px;
}
</style>
