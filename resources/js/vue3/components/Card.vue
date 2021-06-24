<template>
    <div class="p-24 w-full h-full fixed bg-gray-700 flex flex-wrap gap-5">
        <ui-card class="w-full">Hello</ui-card>
        <ui-card gray class="w-2/3">Hello</ui-card>
        <ui-card gray sm class="w-1/3">Hello</ui-card>
        <ui-card gray sm class="w-1/3 p-4">Hello</ui-card>
        <ui-card as="div">Hello</ui-card>
        <ui-card class="bg-blue text-white">Hello</ui-card>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        console.log('hi');
    },
});
</script>
