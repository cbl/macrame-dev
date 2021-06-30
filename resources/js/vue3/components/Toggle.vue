<template>
    <div class="p-24">
        <div class="flex mb-5 space-x-5">
            <ui-toggle yellow sm> Foo </ui-toggle>
            <ui-toggle green md> Bar </ui-toggle>
            <ui-toggle blue lg> Baz </ui-toggle>
        </div>
        <div class="flex mb-5 space-x-5">
            <ui-toggle variant="red" size="sm" label="Foo" />
            <ui-toggle size="md" label="Bar" />
            <ui-toggle size="lg" label="Baz" />
        </div>
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
