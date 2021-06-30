<template>
    <div class="p-24">
        <div class="flex mb-5 space-x-5">
            <ui-toggle v-model="toggle" yellow sm> Foo </ui-toggle>
            <ui-toggle v-model="toggle" green md> Bar </ui-toggle>
            <ui-toggle v-model="toggle" blue lg> Baz </ui-toggle>
        </div>
        <div class="flex mb-5 space-x-5">
            <ui-toggle v-model="toggle" variant="red" size="sm" label="Foo" />
            <ui-toggle v-model="toggle" size="md" label="Bar" />
            <ui-toggle v-model="toggle" size="lg" label="Baz" />
        </div>
        {{ toggle }}
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const toggle = ref(false);
        return {
            toggle,
        };
    },
});
</script>
