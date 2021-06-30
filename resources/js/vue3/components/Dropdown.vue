<template>
    <div class="p-4">
        <div class="flex justify-between">
            <ui-dropdown text="Toggle me" left>
                <ui-dropdown-item>Hello</ui-dropdown-item>
                <ui-dropdown-item href="/">Hello</ui-dropdown-item>
            </ui-dropdown>
            <ui-dropdown right>
                <template v-slot:button>
                    <ui-button>Right</ui-button>
                </template>

                <ui-dropdown-group title="Group A">
                    <ui-dropdown-item>Foo</ui-dropdown-item>
                    <ui-dropdown-item>Bar</ui-dropdown-item>
                </ui-dropdown-group>
                <ui-dropdown-devider />
                <ui-dropdown-group>
                    <template v-slot:title> Group B </template>
                    <ui-dropdown-item>Baz</ui-dropdown-item>
                    <ui-dropdown-item>Boom</ui-dropdown-item>
                </ui-dropdown-group>
            </ui-dropdown>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

export default defineComponent({
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
    },
    setup() {
        //
    },
});
</script>
