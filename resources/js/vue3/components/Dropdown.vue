<template>
    <div
        class="
            w-full
            h-full
            text-right
            fixed
            bg-gradient-to-r
            from-blue-400
            via-pink-500
            to-red-500
        "
    >
        <div>
            <ui-dropdown>
                <ui-dropdown-item>Hello</ui-dropdown-item>
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
        console.log('hi');
    },
});
</script>
