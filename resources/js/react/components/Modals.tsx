import { useState, useEffect } from 'react';
import { Modal, Button as UiButton } from '@macramejs/admin-react';

export default function() {
    let [open, setOpen] = useState<boolean>(false);

    return (
        <>
        <UiButton onClick={() => setOpen(true)}>Open Modal</UiButton>
        <Modal open={open} onClose={() => setOpen(false)}>
            <h3 className="mb-4 text-xl font-semibold">Modal title</h3>
            <p className="mb-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed...
            </p>
            <UiButton onClick={() => setOpen(false)}>Close Modal</UiButton>
        </Modal>
        </>
    );
}