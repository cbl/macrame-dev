<template>
    <div>
        <component v-bind="buttons.props" :is="buttons.name" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Component } from '@macramejs/macrame';
export default defineComponent({
    name: 'BasePage',
    props: ['buttons'],
});
</script>
