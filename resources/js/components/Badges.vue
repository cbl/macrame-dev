<template>
    <div class="p-24">
        Hi
        <div>
            <ui-badge variant="blue" class="m-2">Foo</ui-badge>
            <ui-badge variant="gray" class="m-2">Foo</ui-badge>
            <ui-badge variant="green" class="m-2">Foo</ui-badge>
            <ui-badge variant="yellow" class="m-2">Foo</ui-badge>
            <ui-badge variant="red" class="m-2">Foo</ui-badge>
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
