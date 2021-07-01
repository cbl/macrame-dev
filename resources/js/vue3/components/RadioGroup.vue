<template>
    <div class="p-24">
        <ui-radio-group v-model="simple" :options="['foo', 'bar', 'baz']" />

        {{ simple }}
        <ui-radio-group
            v-model="selection"
            :options="options"
            label-key="text"
            value-key="id"
            disabled-key="disabled"
        />

        {{ selection }}
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const simple = ref();
        const selection = ref(4);
        const options = ref([
            {
                id: 1,
                text: 'Foo',
            },
            {
                id: 2,
                text: 'Bar',
            },
            {
                id: 3,
                text: 'Baz',
            },
            {
                id: 4,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet enim dolore minima, facere dicta optio sunt ex suscipit nam impedit consectetur placeat aliquam reiciendis sequi dolor rem at neque. Culpa!',
            },
        ]);

        return {
            simple,
            selection,
            options,
        };
    },
});
</script>
