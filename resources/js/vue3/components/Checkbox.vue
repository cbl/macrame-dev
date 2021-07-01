<template>
    <div class="p-12">
        <div>
            <ui-checkbox sm v-model="check" label="Foo" />
            <ui-checkbox sm v-model="check" blue> Bar </ui-checkbox>
            <ui-checkbox sm v-model="check" green> Baz </ui-checkbox>
            <ui-checkbox sm v-model="check" red> Boom </ui-checkbox>
            <ui-checkbox sm v-model="check" yellow> Foo </ui-checkbox>
            <ui-checkbox sm v-model="check" gray> Foo </ui-checkbox>
        </div>
        <div>
            <ui-checkbox v-model="check" label="Foo" />
            <ui-checkbox v-model="check" blue> Foo </ui-checkbox>
            <ui-checkbox v-model="check" green> Foo </ui-checkbox>
            <ui-checkbox v-model="check" red> Foo </ui-checkbox>
            <ui-checkbox v-model="check" yellow> Foo </ui-checkbox>
            <ui-checkbox v-model="check" gray> Foo </ui-checkbox>
        </div>
        <div>
            <ui-checkbox size="lg" v-model="check" label="Foo" />
            <ui-checkbox lg v-model="check" blue> Foo </ui-checkbox>
            <ui-checkbox lg v-model="check" green> Foo </ui-checkbox>
            <ui-checkbox lg v-model="check" red> Foo </ui-checkbox>
            <ui-checkbox lg v-model="check" yellow> Foo </ui-checkbox>
            <ui-checkbox lg v-model="check" gray> Foo </ui-checkbox>
        </div>
        Checked: {{ check }}
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const check = ref(true);

        return {
            check,
        };
    },
});
</script>
