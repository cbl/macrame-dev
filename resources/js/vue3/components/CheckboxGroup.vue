<template>
    <div class="p-12">
        <div>
            <ui-checkbox-group
                v-model="checked"
                lg
                yellow
                label="Foo"
                :options="['foo', 'bar', 'baz']"
            />
        </div>
        <div>
            <ui-checkbox-group
                v-model="checked"
                green
                label="Foo"
                :options="['foo', 'bar', 'baz']"
            />
        </div>
        <div class="mb-4">
            <ui-checkbox-group
                v-model="checked"
                sm
                label="Foo"
                :options="['foo', 'bar', 'baz']"
            />
            Checked: {{ checked }}
        </div>
        <div class="mb-4">
            <ui-checkbox-group
                v-model="checkedOptions"
                label="Bar"
                :options="opt"
                stacked
                label-key="text"
                value-key="id"
                disabled-key="disabled"
            />
            Checked: {{ checkedOptions }}
        </div>
        <div class="mb-4">
            <ui-checkbox-group
                v-model="checkedOptions"
                label="Bar"
                :options="opt"
                stacked
                red
                label-key="text"
                value-key="id"
                disabled-key="disabled"
            />
            Checked: {{ checkedOptions }}
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { options } from './options';
export default defineComponent({
    setup() {
        const checked = ref(['foo']);
        const checkedOptions = ref([1, 2]);

        const opt = ref(options);

        return {
            checked,
            checkedOptions,
            opt,
        };
    },
});
</script>
