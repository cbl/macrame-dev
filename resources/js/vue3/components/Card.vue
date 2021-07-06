<template>
    <div class="grid grid-cols-12 gap-4 p-6">
        <ui-card class="col-span-12" sm>
            <ui-block :block="block" />
        </ui-card>
        <!-- <ui-card gray class="w-2/3">Hello</ui-card>
        <ui-card gray sm class="w-1/3">Hello</ui-card>
        <ui-card gray sm class="w-1/3 p-4">Hello</ui-card>
        <ui-card as="div">Hello</ui-card>
        <ui-card class="text-white bg-blue">Hello</ui-card> -->
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const block = ref({
            items: [
                {
                    title: 'Foo bar baz',
                    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia reiciendis nobis ipsum consectetur tempora est quam quis sapiente dolor illo eos illum molestiae, nesciunt fugit dolorum ratione inventore architecto tempore.',
                },
                {
                    title: 'Red green blue',
                    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia reiciendis nobis ipsum consectetur tempora est quam quis sapiente dolor illo eos illum molestiae, nesciunt fugit dolorum ratione inventore architecto tempore.',
                },
                {
                    title: 'This that thus',
                    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia reiciendis nobis ipsum consectetur tempora est quam quis sapiente dolor illo eos illum molestiae, nesciunt fugit dolorum ratione inventore architecto tempore.',
                },
            ],
        });

        return {
            block,
        };
    },
});
</script>
