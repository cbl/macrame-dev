<template>
    <div>
        <component v-bind="table.props" :is="table.name" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Component } from '@macramejs/macrame';
export default defineComponent({
    name: 'BasePage',
    props: ['table'],
});
</script>
