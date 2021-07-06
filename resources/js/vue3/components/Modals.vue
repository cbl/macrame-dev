<template>
    <div class="p-24">
        <ui-button primary @click="openModal()">Open Modal</ui-button>
        <ui-modal v-model:open="isOpen">
            <h3 class="mb-4 text-xl font-semibold">Modal title</h3>
            <p class="mb-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
            </p>
            <ui-button primary @click="closeModal">Close Modal</ui-button>
        </ui-modal>
        <!-- <ui-modal :open="isOpen" @close="closeModal()">
            <h3 class="mb-4 text-xl font-semibold">Modal title</h3>
            <p class="mb-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
            </p>
            <ui-button primary @click="closeModal">Close Modal</ui-button>
        </ui-modal> -->
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const isOpen = ref(false);

        const openModal = () => {
            isOpen.value = true;
        };

        const closeModal = () => {
            isOpen.value = false;
        };

        return {
            isOpen,
            openModal,
            closeModal,
        };
    },
});
</script>
