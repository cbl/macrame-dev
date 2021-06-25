<template>
    <div class="p-24 w-full h-full fixed flex flex-wrap gap-5">
        <ui-button blue @click="setIsOpen(!isOpen.value)">
            Toggle Sidebar
        </ui-button>
        <ui-sidebar :open="isOpen" @close="setIsOpen">
            <div class="mt-2">
                <p class="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent
                    your an email with all of the details of your order.
                </p>
            </div>
        </ui-sidebar>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        let isOpen = ref<boolean>(false);

        return {
            isOpen,
            setIsOpen(value) {
                isOpen.value = value;
            },
        };
    },
});
</script>
